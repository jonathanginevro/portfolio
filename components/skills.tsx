export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "Docker",
  ]

  return (
    <section id="skills" className="py-12 md:py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm md:text-base">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

