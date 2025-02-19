import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Anonymization API",
    description: "A secure API and app designed to anonymize sensitive data, ensuring privacy compliance while preserving data utility.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Birthday Tracker",
    description: "A user-friendly Android app that helps track and manage birthdays, sending timely reminders and customizable notifications.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Baseball Stat Tracker",
    description: "A comprehensive tool for analyzing, and visualizing baseball player statistics and team performance.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com",
    live: "https://example.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[rgb(17,24,39)] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 transition-colors flex items-center"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 transition-colors flex items-center"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

