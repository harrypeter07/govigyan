import { PageTransition } from "@/components/page-transition";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	ArrowRight,
	CheckCircle,
	Droplet,
	Leaf,
	Milk,
	Sun,
	Wind,
} from "lucide-react";

export default function AyurvedaPage() {
	return (
		<PageTransition>
			<HeroSection
				title="Cow Based Panchagavya Ayurved"
				subtitle="Ancient wisdom meets modern science in our holistic approach to health and wellness"
				imageSrc="/image-34.jpg?height=600&width=1920"
				buttonText="Discover Panchagavya"
				buttonLink="#panchagavya"
			/>

			{/* Introduction Section */}
			<section className="py-16 bg-card" id="panchagavya" data-scroll-section>
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div>
							<SectionHeading
								title="What is Panchagavya?"
								subtitle="The five sacred elements derived from indigenous cows that form the foundation of traditional Ayurvedic treatments"
							/>
							<p className="text-gray-700 mb-6">
								Panchagavya is a blend of five products obtained from cows -
								milk, curd, ghee, urine, and dung. This powerful combination has
								been used for centuries in traditional Ayurvedic medicine for
								its therapeutic properties and health benefits.
							</p>
							<div className="bg-amber-50 p-6 rounded-lg border-l-4 border-green-600 mb-6">
								<p className="text-gray-700 italic">
									The indigenous cow is a mobile dispensary. It is the treasure
									of all medicines. Its five products - milk, curd, ghee, urine,
									and dung - have medicinal properties that can treat many
									disorders.
								</p>
							</div>
							<Button className="bg-green-600 hover:bg-green-700 text-white">
								Learn More <ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</div>
						<div className="relative h-[400px] rounded-lg overflow-hidden">
							<Image
								src="/image-34.jpg?height=400&width=600"
								alt="Panchagavya"
								
								width={600}
								height={400}
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Five Elements Section */}
			<section className="py-16 bg-amber-50" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="The Five Elements of Panchagavya"
						subtitle="Each component of Panchagavya offers unique health benefits and therapeutic properties"
						centered
					/>

					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
						{[
							{
								title: "Cow Milk",
								icon: <Milk className="h-10 w-10 text-green-600" />,
								description:
									"Rich in essential nutrients, proteins, and minerals that strengthen the immune system and promote overall health.",
							},
							{
								title: "Cow Curd",
								icon: <Droplet className="h-10 w-10 text-green-600" />,
								description:
									"Contains beneficial probiotics that support digestive health and enhance nutrient absorption.",
							},
							{
								title: "Cow Ghee",
								icon: <Sun className="h-10 w-10 text-green-600" />,
								description:
									"A powerful carrier of medicinal properties, enhances memory, intelligence, and supports joint health.",
							},
							{
								title: "Cow Urine",
								icon: <Wind className="h-10 w-10 text-green-600" />,
								description:
									"Contains antioxidants and bioactive compounds with antimicrobial, antifungal, and immune-boosting properties.",
							},
							{
								title: "Cow Dung",
								icon: <Leaf className="h-10 w-10 text-green-600" />,
								description:
									"Used in external applications for its antiseptic properties and ability to draw out toxins from the body.",
							},
						].map((element, index) => (
							<Card key={index} className="border-none shadow-md text-center">
								<CardContent className="p-6">
									<div className="flex justify-center mb-4">{element.icon}</div>
									<h3 className="text-xl font-bold mb-3">{element.title}</h3>
									<p className="text-gray-700">{element.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-16 bg-white" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Health Benefits of Panchagavya"
						subtitle="Scientific research supports the traditional uses of Panchagavya in promoting health and treating various conditions"
						centered
					/>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{[
							{
								title: "Immune System Support",
								description:
									"Panchagavya contains bioactive compounds that enhance immune function and help the body fight infections naturally.",
							},
							{
								title: "Digestive Health",
								description:
									"The probiotics and enzymes in Panchagavya support healthy digestion, reduce inflammation, and improve nutrient absorption.",
							},
							{
								title: "Detoxification",
								description:
									"Helps remove toxins from the body, supporting liver function and promoting cellular health and regeneration.",
							},
							{
								title: "Skin Health",
								description:
									"External application of certain Panchagavya preparations can treat skin conditions and promote healing.",
							},
							{
								title: "Anti-inflammatory",
								description:
									"Contains natural compounds that reduce inflammation and alleviate symptoms of inflammatory conditions.",
							},
							{
								title: "Mental Clarity",
								description:
									"Traditional use suggests improvements in cognitive function, memory, and mental clarity with regular use.",
							},
						].map((benefit, index) => (
							<Card key={index} className="border-none shadow-md h-full">
								<CardContent className="p-6 h-full flex flex-col">
									<h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
									<p className="text-gray-700 flex-grow">
										{benefit.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Products Section */}
			<section className="py-16 bg-gray-50" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Our Panchagavya Products"
						subtitle="Carefully formulated products based on traditional recipes and modern research"
						centered
					/>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{[
							{
								title: "Panchagavya Ghrita",
								description:
									"A medicated ghee preparation used for improving digestion, memory, and overall health.",
								uses: [
									"Digestive disorders",
									"Memory enhancement",
									"Immune support",
								],
							},
							{
								title: "Cow Urine Ark",
								description:
									"Distilled cow urine with powerful antimicrobial and immune-boosting properties.",
								uses: [
									"Liver detoxification",
									"Skin conditions",
									"Immune enhancement",
								],
							},
							{
								title: "Panchagavya Soap",
								description:
									"Natural soap made with cow milk and ghee for gentle cleansing and skin nourishment.",
								uses: [
									"Daily cleansing",
									"Skin nourishment",
									"Treatment of minor skin issues",
								],
							},
							{
								title: "Panchagavya Hair Oil",
								description:
									"Herbal oil infused with Panchagavya for hair health and scalp conditions.",
								uses: [
									"Hair strengthening",
									"Scalp health",
									"Premature graying",
								],
							},
							{
								title: "Panchagavya Skin Cream",
								description:
									"Nourishing cream for various skin conditions and general skin health.",
								uses: ["Dry skin", "Minor wounds", "Skin irritations"],
							},
							{
								title: "Panchagavya Tooth Powder",
								description:
									"Natural tooth powder for oral hygiene and gum health.",
								uses: ["Dental hygiene", "Gum health", "Fresh breath"],
							},
						].map((product, index) => (
							<Card
								key={index}
								className="border-none shadow-md overflow-hidden"
							>
								<div className="relative h-48">
									<Image
										src={`/image-34.jpg?height=200&width=400&text=${product.title}`}
										alt={product.title}
										width={400}
                                        height={200}
										className="object-cover"
									/>
								</div>
								<CardContent className="p-6">
									<h3 className="text-xl font-bold mb-3">{product.title}</h3>
									<p className="text-gray-700 mb-4">{product.description}</p>
									<h4 className="font-semibold text-green-700 mb-2">
										Common Uses:
									</h4>
									<ul className="space-y-1">
										{product.uses.map((use, i) => (
											<li key={i} className="flex items-start">
												<CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
												<span className="text-sm">{use}</span>
											</li>
										))}
									</ul>
									<Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white">
										View Product
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Research Section */}
			<section className="py-16 bg-white" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Research & Studies"
						subtitle="Scientific validation of traditional knowledge through rigorous research"
						centered
					/>

					<div className="max-w-4xl mx-auto">
						<Card className="border-none shadow-md mb-8">
							<CardContent className="p-8">
								<h3 className="text-2xl font-bold mb-4">
									Our Research Initiatives
								</h3>
								<p className="text-gray-700 mb-6">
									At Go Vigyan Anusandhan Kendra, we are committed to
									scientifically validating the traditional knowledge of
									Panchagavya through rigorous research. Our team of scientists
									and Ayurvedic practitioners work together to study the
									efficacy, safety, and applications of Panchagavya products in
									modern healthcare.
								</p>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="bg-amber-50 p-4 rounded-lg">
										<h4 className="font-bold mb-2">Antimicrobial Properties</h4>
										<p className="text-sm text-gray-700">
											Research on the antimicrobial properties of cow urine
											against various pathogens, including antibiotic-resistant
											strains.
										</p>
									</div>
									<div className="bg-amber-50 p-4 rounded-lg">
										<h4 className="font-bold mb-2">Immunomodulatory Effects</h4>
										<p className="text-sm text-gray-700">
											Studies on how Panchagavya preparations enhance immune
											function and regulate inflammatory responses in the body.
										</p>
									</div>
									<div className="bg-amber-50 p-4 rounded-lg">
										<h4 className="font-bold mb-2">Antioxidant Properties</h4>
										<p className="text-sm text-gray-700">
											Research on the free radical scavenging activity of
											various Panchagavya components and their potential in
											preventing oxidative stress.
										</p>
									</div>
									<div className="bg-amber-50 p-4 rounded-lg">
										<h4 className="font-bold mb-2">Clinical Applications</h4>
										<p className="text-sm text-gray-700">
											Clinical trials and case studies on the efficacy of
											Panchagavya formulations in treating various health
											conditions.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<div className="text-center">
							<Button className="bg-green-600 hover:bg-green-700 text-white">
								View Research Publications{" "}
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Consultation Section */}
			<section className="py-16 bg-amber-50" data-scroll-section>
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<ContactForm
							formType="consultation"
							title="Need Personalized Guidance?"
							subtitle="Our Ayurvedic experts can provide personalized recommendations based on your specific health needs and conditions."
							className="bg-white"
						/>
					</div>
				</div>
			</section>
		</PageTransition>
	);
}
