import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-6 md:space-x-8">
          <li>
            <Link href="#home" className="hover:text-red-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#experience" className="hover:text-red-400 transition-colors">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#education" className="hover:text-red-400 transition-colors">
              Education
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-red-400 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-red-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

