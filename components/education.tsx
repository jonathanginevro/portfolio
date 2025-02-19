import { Book, Users } from "lucide-react"

const educationData = {
  degree: "Bachelor of Science in Computer Science",
  university: "University of Toronto",
  graduationYear: 2025,
  courses: [
    "Algorithm Design, Analysis & Complexity",
    "Natural Language Computing",
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Networking Systems",
  ],
  clubs: [
    "UTMIST Infrastructure Director",
    "UofT AI Partnership Associate",
    "ASIP Senior Ambassador",
    "UTMIST Infrastructure Developer",
    "CSSU and USMC Orientation Leader",
  ],
}

export default function Education() {
  return (
    <section id="education" className="py-12 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-2">{educationData.degree}</h3>
          <p className="text-xl text-gray-300 mb-6">
            {educationData.university}, Class of {educationData.graduationYear}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Book className="mr-2 text-red-400" />
                Relevant Courses
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {educationData.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="mr-2 text-red-400" />
                Clubs & Activities
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {educationData.clubs.map((club, index) => (
                  <li key={index}>{club}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

