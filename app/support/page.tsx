import { ChatBot } from "@/components/ChatBot";

export default function SupportPage() {
	return (
		<main className="min-h-screen bg-background py-12">
			<div className="container">
				<h1 className="text-4xl font-bold text-center mb-8">GovGyan Support</h1>
				<p className="text-center text-muted-foreground mb-8">
					Have questions about government schemes or need help navigating
					GovGyan? Our AI assistant is here to help!
				</p>
				<ChatBot />
			</div>
		</main>
	);
}
