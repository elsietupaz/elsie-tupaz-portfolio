'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
	{
		title: 'Makati Virtual Resilience Hub',
		description:'An innovative online platform accessible at resilient.makati.gov.ph that supports disaster risk reduction and climate resilience efforts in Makati City. As the first Resilience Hub in the Philippines recognized by the United Nations, it serves as a central resource for knowledge-sharing, collaboration, and capacity-building among local government units and communities. The hub advances sustainable, data-driven solutions to strengthen urban resilience and disaster preparedness.',
		image: '/ResHub.jpg',
		tags: ['PHP', 'JavaScript', 'HTML5/CSS', 'Node.js', 'JQuery'],
	},
	{
		title: 'UpGrave: Smart Cemetery Management with 2D Mapping & Online Services',
		description: 'UpGrave is a modern cemetery management system that simplifies lot reservations and online payments through GCash QR. It offers navigation features similar to Waze to help locate graves easily. With interactive 2D mapping, UpGrave makes cemetery management easier for both administrators and families—providing a more accessible, organized, and respectful way to plan memorials.',
		image: '/upgrave.jpg',
		tags: ['PHP', 'Laravel', 'CSS', 'Bootstrap', 'Chart.js', 'OpenStreet Map'],
	},
	{
		title: 'SmartStay: Apartment Rental Management System',
		description: 'SmartStay is a sleek, modern web-based platform crafted to streamline apartment rental processes. Designed with both landlords and tenants in mind, it centralizes functions like lease and tenant management, utility billing, online payments, and maintenance tracking into a single, intuitive dashboard. With features such as automated notifications, payments, and real-time updates, SmartStay delivers an efficient, user-friendly experience that boosts transparency, responsiveness, and overall satisfaction.',
		image: '/smartstay.jpg',
		tags: ['PHP', 'JavaScript', 'Bootstrap', 'HTML5/CSS'],
	},
	
];

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					 PROJECTS
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
						>
							<div className="aspect-video relative overflow-hidden">
								<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, i) => (
										<span key={i} className="text-sm px-3 py-1 bg-gray-800 rounded-full">
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
