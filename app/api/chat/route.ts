import { NextResponse } from "next/server";
import { getChatResponse } from "@/lib/gemini";

export async function POST(request: Request) {
	try {
		const { message } = await request.json();

		// Create a context-aware prompt that includes information about GovGyan
		const contextPrompt = `You are a helpful assistant for GovGyan, a platform dedicated to providing information and resources about government schemes and initiatives. 
    
    User Query: ${message}
    
    Please provide a helpful, accurate, and concise response based on your knowledge about government schemes and initiatives. If you're not sure about something, please say so.`;

		const response = await getChatResponse(contextPrompt);

		return NextResponse.json({ response });
	} catch (error) {
		console.error("Chat API Error:", error);
		return NextResponse.json(
			{ error: "Failed to process your request" },
			{ status: 500 }
		);
	}
}
