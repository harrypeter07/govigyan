import { PageTransition } from "@/components/page-transition";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
	return (
		<PageTransition>
			<HeroSection
				title="Contact Us"
				subtitle="Get in touch with our team for inquiries, support, or to learn more about our programs"
				imageSrc="/image-34.jpg?height=600&width=1920"
			/>

			{/* Contact Information Section */}
			<section className="py-16 bg-white" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Get In Touch"
						subtitle="We're here to answer any questions you may have about our programs, products, or services"
						centered
					/>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
						<div>
							<div className="mb-8">
								<h3 className="text-xl font-bold mb-4">Contact Information</h3>
								<div className="space-y-4">
									<div className="flex items-start">
										<MapPin className="h-5 w-5 mr-3 mt-1 text-green-600" />
										<div>
											<p className="font-medium">Address</p>
											<p className="text-gray-600">
												Kamdhenu Bhavan, Pt. Baccharaj Vyas Square, Chitar Oli,
												Mahal, Nagpur, India
											</p>
										</div>
									</div>
									<div className="flex items-start">
										<Phone className="h-5 w-5 mr-3 mt-1 text-green-600" />
										<div>
											<p className="font-medium">Phone</p>
											<p className="text-gray-600">
												Toll-free: 1800-2772273
												<br />
												Landline: +91-712-2734182
											</p>
										</div>
									</div>
									<div className="flex items-start">
										<Mail className="h-5 w-5 mr-3 mt-1 text-green-600" />
										<div>
											<p className="font-medium">Email</p>
											<p className="text-gray-600">info@govigyan.com</p>
										</div>
									</div>
									<div className="flex items-start">
										<Clock className="h-5 w-5 mr-3 mt-1 text-green-600" />
										<div>
											<p className="font-medium">Hours</p>
											<p className="text-gray-600">
												Monday - Saturday: 9:00 AM - 5:00 PM
											</p>
											<p className="text-gray-600">Sunday: Closed</p>
										</div>
									</div>
								</div>
							</div>

							<div>
								<h3 className="text-xl font-bold mb-4">Our Location</h3>
								<div className="relative h-[300px] rounded-lg overflow-hidden">
									<Image
										src="/image-34.jpg?height=300&width=600&text=Map"
										alt="Go Vigyan Location Map"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</div>

						<ContactForm />
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-16 bg-gray-50" data-scroll-section>
				<div className="container mx-auto px-4">
					<SectionHeading
						title="Frequently Asked Questions"
						subtitle="Find answers to common questions about our organization and services"
						centered
					/>

					<div className="max-w-3xl mx-auto">
						<div className="space-y-6">
							<Card className="border-none shadow-sm">
								<CardContent className="p-6">
									<h3 className="text-lg font-bold mb-2">
										How can I visit your center?
									</h3>
									<p className="text-gray-700">
										You can visit our center during working hours (Monday to
										Saturday, 9 AM to 5 PM). We recommend calling ahead to
										schedule a visit, especially if you re interested in a
										specific program or would like a guided tour.
									</p>
								</CardContent>
							</Card>

							<Card className="border-none shadow-sm">
								<CardContent className="p-6">
									<h3 className="text-lg font-bold mb-2">
										Do you offer training programs for groups?
									</h3>
									<p className="text-gray-700">
										Yes, we offer customized training programs for groups,
										organizations, and institutions. Please contact us with your
										specific requirements, and we ll design a program that meets
										your needs.
									</p>
								</CardContent>
							</Card>

							<Card className="border-none shadow-sm">
								<CardContent className="p-6">
									<h3 className="text-lg font-bold mb-2">
										How can I support your cow conservation efforts?
									</h3>
									<p className="text-gray-700">
										You can support our efforts by donating, volunteering,
										purchasing our cow-based products, or spreading awareness
										about our mission. Every contribution helps us continue our
										work in cow conservation and research.
									</p>
								</CardContent>
							</Card>

							<Card className="border-none shadow-sm">
								<CardContent className="p-6">
									<h3 className="text-lg font-bold mb-2">
										Do you ship your products internationally?
									</h3>
									<p className="text-gray-700">
										Yes, we ship to select international destinations.
										International shipping times and costs vary by location.
										Please contact us for specific information about shipping to
										your country.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	);
}
