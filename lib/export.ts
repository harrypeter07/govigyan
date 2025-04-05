interface ChatMessage {
	role: string;
	content: string;
	timestamp?: number;
}

export function exportChatHistory(messages: ChatMessage[]): void {
	// Filter out error messages and format the chat
	const formattedChat = messages
		.filter((msg) => msg.role !== "error")
		.map((msg) => {
			const timestamp = msg.timestamp
				? new Date(msg.timestamp).toLocaleString()
				: "";
			const role = msg.role === "assistant" ? "GovGyan Assistant" : "You";
			return `[${timestamp}] ${role}:\n${msg.content}\n`;
		})
		.join("\n");

	// Create the full export text
	const exportText = `GovGyan Chat History
Generated on: ${new Date().toLocaleString()}
------------------------------------------

${formattedChat}
------------------------------------------
Exported from GovGyan - Your Government Schemes Assistant
`;

	// Create a blob and download link
	const blob = new Blob([exportText], { type: "text/plain;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = `govigyan-chat-${new Date().toISOString().split("T")[0]}.txt`;

	// Trigger download
	document.body.appendChild(link);
	link.click();

	// Cleanup
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
