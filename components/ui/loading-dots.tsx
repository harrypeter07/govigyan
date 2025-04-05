import { cn } from "@/lib/utils";

interface LoadingDotsProps {
	className?: string;
}

export function LoadingDots({ className }: LoadingDotsProps) {
	return (
		<div className={cn("flex space-x-1", className)}>
			<div className="w-2 h-2 rounded-full bg-current animate-[loading-dot_1.4s_ease-in-out_infinite]" />
			<div className="w-2 h-2 rounded-full bg-current animate-[loading-dot_1.4s_ease-in-out_0.2s_infinite]" />
			<div className="w-2 h-2 rounded-full bg-current animate-[loading-dot_1.4s_ease-in-out_0.4s_infinite]" />
		</div>
	);
}

// Add this to your tailwind.config.js:
// {
//   theme: {
//     extend: {
//       keyframes: {
//         'loading-dot': {
//           '0%': {
//             opacity: '0.2',
//           },
//           '20%': {
//             opacity: '1',
//           },
//           '100%': {
//             opacity: '0.2',
//           },
//         },
//       },
//     },
//   },
// }
