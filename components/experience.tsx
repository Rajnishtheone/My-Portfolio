import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="dark:bg-slate-800 dark:border-slate-700">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    Full Stack Developer Intern
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">Slash Mark IT Solutions</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 2024 – Feb 2025</span>
                  </div>
                  <Badge variant="secondary">3 months</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-300">
                    Developed and maintained web applications using React, Next.js, Docker, and CI/CD pipelines
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-300">
                    Collaborated with cross-functional teams to deliver features and improvements
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Docker", "CI/CD", "JavaScript", "TypeScript"].map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
