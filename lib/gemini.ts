import { GoogleGenerativeAI } from "@google/generative-ai";

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
	context: string = "",
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
			model: "gemini-2.0-flash-001",
			generationConfig: {
				temperature: 0.7,
				topP: 0.8,
				topK: 40,
				maxOutputTokens: 2048,
			},
		});

		const fullPrompt = `${context}\n\nQuestion: ${prompt}\n\nPlease provide a helpful and relevant response based on the context provided.`;

		try {
			const result = await model.generateContent(fullPrompt);
			const response = await result.response;
			const text = response.text();

			if (!text) {
				throw new ChatError("Failed to generate a response.", "API_ERROR");
			}

			return text;
		} catch (error: unknown) {
			if (error instanceof Error) {
				if (error.message?.includes("API key")) {
					throw new ChatError(
						"Invalid API key. Please check your configuration.",
						"API_ERROR"
					);
				}
				if (error.message?.includes("quota")) {
					throw new ChatError(
						"API quota exceeded. Please try again later.",
						"API_ERROR"
					);
				}
				if (error.message?.includes("not found")) {
					throw new ChatError(
						"Invalid model configuration. Please check your settings.",
						"API_ERROR"
					);
				}
			}
			throw error;
		}
	} catch (error) {
		console.error("Error getting chat response:", error);

		if (error instanceof ChatError) {
			throw error;
		}

		// Handle network-related errors
		if (error instanceof TypeError && error.message.includes("fetch")) {
			throw new ChatError(
				"Network error. Please check your connection and try again.",
				"API_ERROR"
			);
		}

		throw new ChatError(
			"An unexpected error occurred. Please try again.",
			"UNKNOWN"
		);
	}
}
