import {
	GoogleGenerativeAI,
	HarmCategory,
	HarmBlockThreshold,
} from "@google/generative-ai";

if (!process.env.GEMINI_API_KEY) {
	throw new Error("Missing GEMINI_API_KEY environment variable");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Simple in-memory rate limiting
const rateLimits = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;

function checkRateLimit(userId: string): boolean {
	const now = Date.now();
	const userRateLimit = rateLimits.get(userId);

	if (!userRateLimit) {
		rateLimits.set(userId, { count: 1, timestamp: now });
		return true;
	}

	if (now - userRateLimit.timestamp > RATE_LIMIT_WINDOW) {
		rateLimits.set(userId, { count: 1, timestamp: now });
		return true;
	}

	if (userRateLimit.count >= MAX_REQUESTS_PER_WINDOW) {
		return false;
	}

	userRateLimit.count++;
	return true;
}

export class ChatError extends Error {
	constructor(
		message: string,
		public readonly code: "RATE_LIMIT" | "API_ERROR" | "SAFETY" | "UNKNOWN"
	) {
		super(message);
		this.name = "ChatError";
	}
}

export async function getChatResponse(
	prompt: string,
	userId: string = "default"
) {
	try {
		if (!checkRateLimit(userId)) {
			throw new ChatError(
				"Too many requests. Please wait a moment before trying again.",
				"RATE_LIMIT"
			);
		}

		const model = genAI.getGenerativeModel({
			model: "gemini-pro",
			safetySettings: [
				{
					category: HarmCategory.HARASSMENT,
					threshold: HarmBlockThreshold.MEDIUM_AND_ABOVE,
				},
				{
					category: HarmCategory.HATE_SPEECH,
					threshold: HarmBlockThreshold.MEDIUM_AND_ABOVE,
				},
				{
					category: HarmCategory.SEXUALLY_EXPLICIT,
					threshold: HarmBlockThreshold.MEDIUM_AND_ABOVE,
				},
				{
					category: HarmCategory.DANGEROUS_CONTENT,
					threshold: HarmBlockThreshold.MEDIUM_AND_ABOVE,
				},
			],
		});

		const result = await model.generateContent(prompt);
		const response = await result.response;

		if (response.promptFeedback?.blockReason) {
			throw new ChatError(
				"Your message was blocked for safety reasons.",
				"SAFETY"
			);
		}

		return response.text();
	} catch (error) {
		if (error instanceof ChatError) {
			throw error;
		}

		console.error("Error getting chat response:", error);

		if (error.message?.includes("quota")) {
			throw new ChatError(
				"API quota exceeded. Please try again later.",
				"API_ERROR"
			);
		}

		throw new ChatError(
			"An unexpected error occurred. Please try again.",
			"UNKNOWN"
		);
	}
}
