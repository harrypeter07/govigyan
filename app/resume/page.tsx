import React from "react";
import { PageTransition } from "@/components/page-transition";

export default function ResumePage() {
	return (
		<PageTransition>
			<div className="container mx-auto px-4 py-10">
				<h1 className="text-3xl font-bold mb-6">Resume</h1>
				<div className="bg-white p-6 rounded-lg shadow-lg">
					<h2 className="text-2xl font-semibold mb-4">John Doe</h2>
					<p className="text-gray-600 mb-4">Software Developer</p>
					<h3 className="text-xl font-semibold mb-2">Experience</h3>
					<ul className="list-disc pl-5 mb-4">
						<li>Senior Developer at Tech Corp (2020 - Present)</li>
						<li>Junior Developer at StartUp Inc (2018 - 2020)</li>
					</ul>
					<h3 className="text-xl font-semibold mb-2">Education</h3>
					<p>
						Bachelor of Science in Computer Science, University of Technology
						(2018)
					</p>
				</div>
			</div>
		</PageTransition>
	);
}
