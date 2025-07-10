import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Professional Summary</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  I'm a passionate Full Stack Developer with a solid foundation in modern web technologies. Currently
                  pursuing B.Tech in Information Technology from Cochin University of Science and Technology, I have
                  hands-on experience in building scalable applications using React, TypeScript, Node.js, and various
                  backend technologies.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                  My expertise spans across Data Structures & Algorithms, Operating Systems, Networking, and SDLC. I'm
                  known for my ability to learn new technologies quickly and deliver impactful projects.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">🎯 Focus Areas</h4>
                <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Full Stack Web Development</li>
                  <li>• Modern JavaScript Frameworks</li>
                  <li>• Cloud-Native Applications</li>
                  <li>• API Design & Development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">🌍 Languages</h4>
                <div className="flex gap-4 text-slate-600 dark:text-slate-300">
                  <span>English (Fluent)</span>
                  <span>Hindi (Fluent)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
