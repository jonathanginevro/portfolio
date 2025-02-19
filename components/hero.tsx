import { Github, Linkedin, Gitlab } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-12 md:pt-32 md:pb-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Jonathan Ginevro</h1>
        <h2 className="text-2xl md:text-3xl text-red-400 mb-6">Computer Science Student</h2>
        <p className="max-w-3xl mx-auto text-gray-300 mb-8">
          Welcome to my personal portfolio, this is a space for me to showcase my projects and experiences as a developer. I am currently in my final year studying computer science and passionate about leveraging different technologies to build impactful digital experiences.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/jonathanginevro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-ginevro/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://gitlab.com/jonginevro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Gitlab size={24} />
            <span className="sr-only">GitLab</span>
          </a>
        </div>
      </div>
    </section>
  )
}

