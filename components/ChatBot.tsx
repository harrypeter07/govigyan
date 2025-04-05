"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
	Loader2,
	Send,
	Bot,
	User,
	AlertCircle,
	Trash,
	Volume2,
	VolumeX,
	Download,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { playSound, isSoundEnabled, toggleSound } from "@/lib/sounds";
import { exportChatHistory } from "@/lib/export";

interface Message {
	role: "user" | "assistant" | "error";
	content: string;
	timestamp?: number;
}

const STORAGE_KEY = "govigyan-chat-history";
const MAX_HISTORY = 50;

export function ChatBot() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [soundEnabled, setSoundEnabled] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	// Initialize sound preference
	useEffect(() => {
		setSoundEnabled(isSoundEnabled());
	}, []);

	// Load chat history on mount
	useEffect(() => {
		const savedHistory = localStorage.getItem(STORAGE_KEY);
		if (savedHistory) {
			try {
				const parsed = JSON.parse(savedHistory);
				setMessages(parsed);
			} catch (e) {
				console.error("Failed to parse chat history:", e);
				setMessages([
					{
						role: "assistant",
						content:
							"Hello! I'm your GovGyan assistant. How can I help you today?",
					},
				]);
			}
		} else {
			setMessages([
				{
					role: "assistant",
					content:
						"Hello! I'm your GovGyan assistant. How can I help you today?",
				},
			]);
		}
	}, []);

	// Save chat history on update
	useEffect(() => {
		if (messages.length > 0) {
			const historyToSave = messages.slice(-MAX_HISTORY);
			localStorage.setItem(STORAGE_KEY, JSON.stringify(historyToSave));
		}
	}, [messages]);

	// Scroll to bottom on new messages
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	// Focus input on mount
	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	// Keyboard shortcuts
	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			// Ctrl/Cmd + K to focus input
			if ((e.ctrlKey || e.metaKey) && e.key === "k") {
				e.preventDefault();
				inputRef.current?.focus();
			}
			// Escape to clear input
			if (e.key === "Escape" && document.activeElement === inputRef.current) {
				setInput("");
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!input.trim() || isLoading) return;

		setError(null);
		const userMessage = {
			role: "user" as const,
			content: input,
			timestamp: Date.now(),
		};
		setMessages((prev) => [...prev, userMessage]);
		setInput("");
		setIsLoading(true);
		playSound("messageSent");

		try {
			const response = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message: input }),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Failed to get response");
			}

			const assistantMessage = {
				role: "assistant" as const,
				content: data.response,
				timestamp: Date.now(),
			};
			setMessages((prev) => [...prev, assistantMessage]);
			playSound("messageReceived");
		} catch (error) {
			console.error("Error:", error);
			const errorMessage =
				error instanceof Error ? error.message : "An unexpected error occurred";
			setError(errorMessage);
			setMessages((prev) => [
				...prev,
				{
					role: "error",
					content:
						errorMessage === "Failed to fetch"
							? "Network error. Please check your connection and try again."
							: errorMessage,
					timestamp: Date.now(),
				},
			]);
			playSound("error");
		} finally {
			setIsLoading(false);
		}
	};

	const handleToggleSound = () => {
		const newValue = toggleSound();
		setSoundEnabled(newValue);
	};

	const clearHistory = () => {
		localStorage.removeItem(STORAGE_KEY);
		setMessages([
			{
				role: "assistant",
				content: "Hello! I'm your GovGyan assistant. How can I help you today?",
				timestamp: Date.now(),
			},
		]);
	};

	const handleExport = () => {
		if (messages.length > 1) {
			// Don't export if only welcome message
			exportChatHistory(messages);
		}
	};

	return (
		<div className="w-full max-w-2xl mx-auto p-4 space-y-4">
			{error && (
				<Alert variant="destructive" className="mb-4">
					<AlertCircle className="h-4 w-4" />
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}
			<Card className="h-[600px] p-4 flex flex-col relative">
				<div className="flex justify-between items-center mb-4">
					<div className="flex items-center gap-4">
						<p className="text-sm text-muted-foreground">
							Press <kbd className="px-2 py-1 bg-muted rounded">Ctrl/⌘ K</kbd>{" "}
							to focus chat
						</p>
						<Button
							variant="ghost"
							size="sm"
							onClick={handleToggleSound}
							className="text-muted-foreground hover:text-primary"
							aria-label={
								soundEnabled ? "Disable sound effects" : "Enable sound effects"
							}
						>
							{soundEnabled ? (
								<Volume2 className="h-4 w-4" />
							) : (
								<VolumeX className="h-4 w-4" />
							)}
						</Button>
					</div>
					<div className="flex items-center gap-2">
						<Button
							variant="ghost"
							size="sm"
							onClick={handleExport}
							className="text-muted-foreground hover:text-primary"
							aria-label="Export chat history"
							disabled={messages.length <= 1}
						>
							<Download className="h-4 w-4" />
						</Button>
						<Button
							variant="ghost"
							size="sm"
							onClick={clearHistory}
							className="text-muted-foreground hover:text-destructive"
							aria-label="Clear chat history"
						>
							<Trash className="h-4 w-4" />
						</Button>
					</div>
				</div>
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
							{message.role === "error" && (
								<AlertCircle
									className="w-6 h-6 mt-1 text-red-500"
									aria-hidden="true"
								/>
							)}
							<div
								className={`max-w-[80%] rounded-lg p-3 ${
									message.role === "user"
										? "bg-blue-500 text-white"
										: message.role === "error"
										? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
										: "bg-gray-100 dark:bg-gray-800"
								}`}
							>
								<div>{message.content}</div>
								{message.timestamp && (
									<div className="mt-1 text-xs opacity-70">
										{new Date(message.timestamp).toLocaleTimeString()}
									</div>
								)}
							</div>
							{message.role === "user" && (
								<User
									className="w-6 h-6 mt-1 text-blue-500"
									aria-hidden="true"
								/>
							)}
						</div>
					))}
					<div ref={messagesEndRef} />
					{isLoading && (
						<div className="flex items-center justify-center py-2">
							<Loader2 className="h-6 w-6 animate-spin text-blue-500" />
						</div>
					)}
				</div>
				<form onSubmit={handleSubmit} className="mt-4 flex gap-2">
					<Input
						ref={inputRef}
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Type your message... (Ctrl/⌘ K to focus)"
						disabled={isLoading}
						className="flex-1"
						aria-label="Chat message input"
						maxLength={1000}
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
