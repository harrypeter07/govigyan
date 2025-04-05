// Sound effect URLs
const SOUND_EFFECTS = {
	messageSent: "/sounds/message-sent.mp3",
	messageReceived: "/sounds/message-received.mp3",
	error: "/sounds/error.mp3",
} as const;

// Create audio elements
const audioElements = new Map<keyof typeof SOUND_EFFECTS, HTMLAudioElement>();

// Initialize audio elements
if (typeof window !== "undefined") {
	Object.entries(SOUND_EFFECTS).forEach(([key, url]) => {
		const audio = new Audio(url);
		audio.volume = 0.5;
		audioElements.set(key as keyof typeof SOUND_EFFECTS, audio);
	});
}

// Sound preferences in localStorage
const SOUND_ENABLED_KEY = "govigyan-sounds-enabled";

export function isSoundEnabled(): boolean {
	if (typeof window === "undefined") return false;
	const stored = localStorage.getItem(SOUND_ENABLED_KEY);
	return stored === null ? true : stored === "true";
}

export function toggleSound(): boolean {
	const newValue = !isSoundEnabled();
	localStorage.setItem(SOUND_ENABLED_KEY, String(newValue));
	return newValue;
}

export function playSound(type: keyof typeof SOUND_EFFECTS): void {
	if (!isSoundEnabled() || typeof window === "undefined") return;

	const audio = audioElements.get(type);
	if (audio) {
		audio.currentTime = 0;
		audio.play().catch((error) => {
			console.error("Failed to play sound:", error);
		});
	}
}
