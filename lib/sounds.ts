// Sound configuration
const SOUNDS = {
	messageSent: "/sounds/message-sent.mp3",
	messageReceived: "/sounds/message-received.mp3",
	error: "/sounds/error.mp3",
} as const;

// Sound enabled state
let soundEnabled = false;

// Initialize audio elements
const audioElements = new Map<string, HTMLAudioElement>();

// Create audio elements for each sound
Object.entries(SOUNDS).forEach(([key, src]) => {
	if (typeof window !== "undefined") {
		const audio = new Audio(src);
		audio.preload = "auto";
		audioElements.set(key, audio);
	}
});

// Play a sound by its key
export function playSound(key: keyof typeof SOUNDS) {
	if (!soundEnabled || typeof window === "undefined") return;

	const audio = audioElements.get(key);
	if (audio) {
		audio.currentTime = 0;
		audio.play().catch((err) => {
			console.warn(`Failed to play sound: ${key}`, err);
		});
	}
}

// Toggle sound on/off
export function toggleSound(): boolean {
	soundEnabled = !soundEnabled;
	localStorage.setItem("soundEnabled", String(soundEnabled));
	return soundEnabled;
}

// Check if sound is enabled
export function isSoundEnabled(): boolean {
	if (typeof window === "undefined") return false;

	const stored = localStorage.getItem("soundEnabled");
	soundEnabled = stored ? stored === "true" : false;
	return soundEnabled;
}
