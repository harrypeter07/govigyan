import { NextResponse } from "next/server";
import { getChatResponse, ChatError } from "@/lib/gemini";
import { headers } from "next/headers";

const MAX_MESSAGE_LENGTH = 1000;

// GovGyan context for the AI
const GOVIGYAN_CONTEXT = `You are an AI assistant for Go Vigyan Anusandhan Kendra (GVAK), a non-profit organization dedicated to research and promotion of cow-based products and traditional Indian knowledge systems. Here's your core knowledge:

1. About GovGyan:
- Founded to rekindle the age-old bond between humans and cows
- Located at Kamdhenu Bhavan, Nagpur, India
- Focuses on research, training, and promotion of cow-based products

2. Main Areas:
- Panchagavya Ayurved (cow-based traditional medicine)
- Training programs for sustainable farming
- Research on cow-based products
- Promotion of cow-based rural economy

3. Products:
- Panchagavya Ghrita (traditional Ayurvedic formulation)
- Cow Urine Ark (distilled cow urine)
- Herbal Cow Dung Soap
- Panchagavya Hair Oil
- Various other cow-based health and wellness products

4. Services:
- Training programs for farmers and entrepreneurs
- Research facilities
- Educational programs
- Consultation on cow-based farming

5. Contact Information:
- Phone: +0712-2772273, 2734182
- Email: info@govigyan.com
- Address: Kamdhenu Bhavan, Pt. Baccharaj Vyas Square, Chitar Oli, Mahal, Nagpur, India

Please provide helpful, accurate, and friendly responses based on this information. If asked about something outside this scope, you can provide general information while staying true to GovGyan's values of traditional knowledge and sustainable practices.`;

export async function POST(request: Request) {
	try {
		// Get user IP or session ID for rate limiting
		const headersList = await headers();
		const forwardedFor = headersList.get("x-forwarded-for");
		const userIdentifier = forwardedFor || "default";

		// Validate request body
		const body = await request.json();

		if (!body.message) {
			return NextResponse.json(
				{ error: "Message is required" },
				{ status: 400 }
			);
		}

		if (typeof body.message !== "string") {
			return NextResponse.json(
				{ error: "Message must be a string" },
				{ status: 400 }
			);
		}

		if (body.message.length > MAX_MESSAGE_LENGTH) {
			return NextResponse.json(
				{ error: `Message must be less than ${MAX_MESSAGE_LENGTH} characters` },
				{ status: 400 }
			);
		}

		// Create a context-aware prompt
		const userQuery = `User Query: ${body.message}

Please provide a helpful response based on the above context about GovGyan. If the query is about:
1. Products - Provide accurate information about availability, benefits, and usage
2. Services - Explain the programs, eligibility, and how to enroll
3. General Information - Share relevant details while promoting GovGyan's mission
4. Contact/Location - Provide the correct contact details and location information

Keep responses clear, friendly, and aligned with GovGyan's values.`;

		const response = await getChatResponse(
			userQuery,
			GOVIGYAN_CONTEXT,
			userIdentifier
		);

		return NextResponse.json({ response });
	} catch (error) {
		console.error("Chat API Error:", error);

		if (error instanceof ChatError) {
			const statusCode = error.code === "RATE_LIMIT" ? 429 : 500;
			return NextResponse.json(
				{ error: error.message },
				{ status: statusCode }
			);
		}

		return NextResponse.json(
			{ error: "An unexpected error occurred" },
			{ status: 500 }
		);
	}
}
