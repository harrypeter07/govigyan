import { NextResponse } from "next/server";
import { getChatResponse, ChatError } from "@/lib/gemini";
import { headers } from "next/headers";

const MAX_MESSAGE_LENGTH = 1000;

export async function POST(request: Request) {
	try {
		// Get user IP or session ID for rate limiting
		const headersList = headers();
		const userIdentifier = headersList.get("x-forwarded-for") || "default";

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
		const contextPrompt = `You are a helpful assistant for GovGyan, a platform dedicated to providing information and resources about government schemes and initiatives. 
    
    User Query: ${body.message}
    
    Please provide a helpful, accurate, and concise response based on your knowledge about government schemes and initiatives. If you're not sure about something, please say so.
    
    Focus on:
    1. Government schemes and policies
    2. Eligibility criteria and benefits
    3. Application processes
    4. Important deadlines
    5. Required documents
    
    Keep responses clear and easy to understand.`;

		const response = await getChatResponse(contextPrompt, userIdentifier);

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
