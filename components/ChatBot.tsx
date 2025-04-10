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
	MessageCircle,
	X,
	Volume,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { playSound, isSoundEnabled, toggleSound } from "@/lib/sounds";
import { exportChatHistory } from "@/lib/export";
import { motion, AnimatePresence } from "framer-motion";

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
	const [isOpen, setIsOpen] = useState(false);
	const [isSpeaking, setIsSpeaking] = useState(false);
	const [speechLang, setSpeechLang] = useState<"en-US" | "hi-IN">("hi-IN");
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	// Text-to-speech function
	const speak = (text: string) => {
		if ("speechSynthesis" in window) {
			// Cancel any ongoing speech
			window.speechSynthesis.cancel();

			const utterance = new SpeechSynthesisUtterance(text);
			utterance.lang = speechLang;
			utterance.rate = 0.9;
			utterance.pitch = 1;

			// Get available voices
			const voices = window.speechSynthesis.getVoices();
			// Try to find a Hindi voice
			const hindiVoice = voices.find(
				(voice) => voice.lang.includes("hi") || voice.lang.includes("IN")
			);

			if (hindiVoice) {
				utterance.voice = hindiVoice;
			}

			utterance.onstart = () => setIsSpeaking(true);
			utterance.onend = () => setIsSpeaking(false);
			utterance.onerror = () => setIsSpeaking(false);

			window.speechSynthesis.speak(utterance);
		}
	};

	// Stop speaking
	const stopSpeaking = () => {
		if ("speechSynthesis" in window) {
			window.speechSynthesis.cancel();
			setIsSpeaking(false);
		}
	};

	// Toggle language
	const toggleLanguage = () => {
		setSpeechLang((prev) => (prev === "en-US" ? "hi-IN" : "en-US"));
		stopSpeaking();
	};

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

	// Focus input when chat opens
	useEffect(() => {
		if (isOpen) {
			inputRef.current?.focus();
		}
	}, [isOpen]);

	// Keyboard shortcuts
	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			// Ctrl/Cmd + K to focus input
			if ((e.ctrlKey || e.metaKey) && e.key === "k") {
				e.preventDefault();
				inputRef.current?.focus();
			}
			// Escape to close chat
			if (e.key === "Escape") {
				if (document.activeElement === inputRef.current) {
					setInput("");
				} else {
					setIsOpen(false);
				}
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

			// Automatically speak the response if sound is enabled
			if (soundEnabled) {
				speak(data.response);
			}
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
		<>
			{/* Floating Chat Button */}
			<button
				onClick={() => setIsOpen(true)}
				className="fixed bottom-6 right-6 p-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
				aria-label="Open chat"
			>
				<MessageCircle className="h-6 w-6" />
			</button>

			{/* Chat Interface */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 20 }}
						transition={{ duration: 0.2 }}
						className="fixed bottom-24 right-6 w-full max-w-[400px] z-50"
					>
						<Card className="h-[600px] p-4 flex flex-col relative shadow-xl">
							{/* Chat Header */}
							<div className="flex justify-between items-center mb-4 pb-2 border-b">
								<div className="flex items-center gap-2">
									<Bot className="h-5 w-5 text-green-600" />
									<h2 className="font-semibold">GovGyan Assistant</h2>
								</div>
								<div className="flex items-center gap-2">
									<button
										onClick={toggleLanguage}
										className="p-2 hover:bg-gray-100 rounded-full text-sm font-medium"
										aria-label={`Switch to ${
											speechLang === "en-US" ? "Hindi" : "English"
										} speech`}
									>
										{speechLang === "en-US" ? "EN" : "हि"}
									</button>
									<button
										onClick={handleToggleSound}
										className="p-2 hover:bg-gray-100 rounded-full"
										aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
									>
										{soundEnabled ? (
											<Volume2 className="h-4 w-4" />
										) : (
											<VolumeX className="h-4 w-4" />
										)}
									</button>
									<button
										onClick={clearHistory}
										className="p-2 hover:bg-gray-100 rounded-full"
										aria-label="Clear chat history"
									>
										<Trash className="h-4 w-4" />
									</button>
									<button
										onClick={handleExport}
										className="p-2 hover:bg-gray-100 rounded-full"
										aria-label="Export chat history"
									>
										<Download className="h-4 w-4" />
									</button>
									<button
										onClick={() => setIsOpen(false)}
										className="p-2 hover:bg-gray-100 rounded-full"
										aria-label="Close chat"
									>
										<X className="h-4 w-4" />
									</button>
								</div>
							</div>

							{/* Error Alert */}
							{error && (
								<Alert variant="destructive" className="mb-4">
									<AlertCircle className="h-4 w-4" />
									<AlertDescription>{error}</AlertDescription>
								</Alert>
							)}

							{/* Messages */}
							<div className="flex-1 overflow-y-auto space-y-4 mb-4">
								{messages.map((message, index) => (
									<div
										key={index}
										className={`flex items-start gap-2 ${
											message.role === "user" ? "flex-row-reverse" : ""
										}`}
									>
										<div
											className={`p-1 rounded-full ${
												message.role === "user"
													? "bg-green-100"
													: message.role === "error"
													? "bg-red-100"
													: "bg-gray-100"
											}`}
										>
											{message.role === "user" ? (
												<User className="h-4 w-4 text-green-600" />
											) : message.role === "error" ? (
												<AlertCircle className="h-4 w-4 text-red-600" />
											) : (
												<Bot className="h-4 w-4 text-gray-600" />
											)}
										</div>
										<div
											className={`rounded-lg p-3 max-w-[80%] relative group ${
												message.role === "user"
													? "bg-green-500 text-white"
													: message.role === "error"
													? "bg-red-50 text-red-600"
													: "bg-gray-100 text-gray-900"
											}`}
										>
											{message.content}
											{message.role === "assistant" && (
												<button
													onClick={() => speak(message.content)}
													className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
													aria-label={
														isSpeaking
															? "Stop speaking"
															: `Speak message in ${
																	speechLang === "en-US" ? "English" : "Hindi"
															  }`
													}
												>
													{isSpeaking ? (
														<VolumeX
															className="h-4 w-4 text-gray-600 hover:text-gray-900"
															onClick={stopSpeaking}
														/>
													) : (
														<>
															<Volume className="h-4 w-4 text-gray-600 hover:text-gray-900" />
															<span className="text-xs text-gray-500">
																{speechLang === "en-US" ? "EN" : "हि"}
															</span>
														</>
													)}
												</button>
											)}
										</div>
									</div>
								))}
								<div ref={messagesEndRef} />
							</div>

							{/* Input Form */}
							<form onSubmit={handleSubmit} className="flex gap-2">
								<Input
									ref={inputRef}
									type="text"
									placeholder="Type your message..."
									value={input}
									onChange={(e) => setInput(e.target.value)}
									disabled={isLoading}
									className="flex-1"
								/>
								<Button
									type="submit"
									disabled={isLoading || !input.trim()}
									className="bg-green-600 hover:bg-green-700"
								>
									{isLoading ? (
										<Loader2 className="h-4 w-4 animate-spin" />
									) : (
										<Send className="h-4 w-4" />
									)}
								</Button>
							</form>
						</Card>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
