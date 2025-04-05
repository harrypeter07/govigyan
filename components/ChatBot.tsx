"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

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
		if (!input.trim()) return;

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
			<Card className="h-[600px] p-4 flex flex-col">
				<div className="flex-1 overflow-y-auto space-y-4">
					{messages.map((message, index) => (
						<div
							key={index}
							className={`flex ${
								message.role === "user" ? "justify-end" : "justify-start"
							}`}
						>
							<div
								className={`max-w-[80%] rounded-lg p-3 ${
									message.role === "user"
										? "bg-blue-500 text-white"
										: "bg-gray-100 dark:bg-gray-800"
								}`}
							>
								{message.content}
							</div>
						</div>
					))}
				</div>
				<form onSubmit={handleSubmit} className="mt-4 flex gap-2">
					<Input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Type your message..."
						disabled={isLoading}
						className="flex-1"
					/>
					<Button type="submit" disabled={isLoading}>
						{isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send"}
					</Button>
				</form>
			</Card>
		</div>
	);
}
