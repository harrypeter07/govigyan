"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Loader2, Send, Bot, User } from "lucide-react";

interface Message {
	role: "user" | "assistant";
	content: string;
}

export function ChatBot() {
	const [messages, setMessages] = useState<Message[]>([
		{
			role: "assistant",
			content: "Hello! I'm your GovGyan assistant. How can I help you today?",
		},
	]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!input.trim() || isLoading) return;

		const userMessage = { role: "user" as const, content: input };
		setMessages((prev) => [...prev, userMessage]);
		setInput("");
		setIsLoading(true);

		try {
			const response = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message: input }),
			});

			if (!response.ok) throw new Error("Failed to get response");

			const data = await response.json();
			const assistantMessage = {
				role: "assistant" as const,
				content: data.response,
			};
			setMessages((prev) => [...prev, assistantMessage]);
		} catch (error) {
			console.error("Error:", error);
			setMessages((prev) => [
				...prev,
				{
					role: "assistant",
					content: "Sorry, I encountered an error. Please try again.",
				},
			]);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="w-full max-w-2xl mx-auto p-4 space-y-4">
			<Card className="h-[600px] p-4 flex flex-col relative">
				<div
					className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600"
					role="log"
					aria-live="polite"
					aria-label="Chat messages"
				>
					{messages.map((message, index) => (
						<div
							key={index}
							className={`flex items-start gap-2 ${
								message.role === "user" ? "justify-end" : "justify-start"
							}`}
						>
							{message.role === "assistant" && (
								<Bot
									className="w-6 h-6 mt-1 text-blue-500"
									aria-hidden="true"
								/>
							)}
							<div
								className={`max-w-[80%] rounded-lg p-3 ${
									message.role === "user"
										? "bg-blue-500 text-white"
										: "bg-gray-100 dark:bg-gray-800"
								}`}
							>
								{message.content}
							</div>
							{message.role === "user" && (
								<User
									className="w-6 h-6 mt-1 text-blue-500"
									aria-hidden="true"
								/>
							)}
						</div>
					))}
					{isLoading && (
						<div className="flex items-center justify-center py-2">
							<Loader2 className="h-6 w-6 animate-spin text-blue-500" />
						</div>
					)}
				</div>
				<form onSubmit={handleSubmit} className="mt-4 flex gap-2">
					<Input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Type your message..."
						disabled={isLoading}
						className="flex-1"
						aria-label="Chat message input"
					/>
					<Button
						type="submit"
						disabled={isLoading || !input.trim()}
						aria-label="Send message"
					>
						{isLoading ? (
							<Loader2 className="h-4 w-4 animate-spin" />
						) : (
							<Send className="h-4 w-4" />
						)}
					</Button>
				</form>
			</Card>
		</div>
	);
}
