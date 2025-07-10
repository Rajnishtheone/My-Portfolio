import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="dark:bg-slate-800 dark:border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                        B.Tech in Information Technology
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                        Cochin University of Science and Technology, Kerala
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>Expected Jun 2026</span>
                      </div>
                      <Badge className="bg-green-600 dark:bg-green-500">CGPA: 8.5</Badge>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Data Structures", "Operating Systems", "DBMS"].map((course) => (
                        <Badge key={course} variant="outline">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
