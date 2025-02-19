import { Briefcase } from "lucide-react"

const experienceData = [
  {
    title: "Software Developement Engineer Co-op",
    company: "Amazon",
    period: "May 2023 - Aug 2024",
    description:
      "Leveraged AWS to develop software that monitors Amazon’s robotics and warehouse operations. Lead the design, development and deployment of a service that calculates real-time metrics and delivers them to associates across Amazon’s fulfillment network.",
  },
  {
    title: "Software Developer Intern",
    company: "Royal Bank of Canada",
    period: "May 2022 - Aug 2022",
    description:
      "Contributed towards team goals as a full-stack developer, working across various consumer-facing banking platforms. Worked on the development of a client verification system that supports returning customers who are looking to be connected to their old accounts.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experienceData.map((job, index) => (
            <div key={index} className="mb-8 flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-px h-full bg-red-400 flex-grow"></div>
                <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
                  <Briefcase size={20} className="text-gray-900" />
                </div>
              </div>
              <div className="bg-[rgb(17,24,39)] p-6 rounded-xl flex-grow">
                <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                <p className="text-red-400 mb-2">{job.company}</p>
                <p className="text-sm text-gray-400 mb-3">{job.period}</p>
                <p className="text-gray-300">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

