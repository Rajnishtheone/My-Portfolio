import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy } from "lucide-react"

export function Certifications() {
  const achievements = [
    {
      title: "2nd Place – Vultr Cloud Innovation Hackathon 2024",
      description: "Built cloud-native app using React & AWS",
      type: "achievement",
      icon: Trophy,
    },
  ]

  const certifications = [
    {
      title: "TCS iON Career Edge",
      date: "May 2023",
      type: "certification",
    },
    {
      title: "Responsive Web Design (FreeCodeCamp)",
      date: "Jan 2024",
      type: "certification",
    },
    {
      title: "Data Structures & Algorithms (Simplilearn)",
      date: "Mar 2024",
      type: "certification",
    },
  ]

  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-6">
          {/* Achievements */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
              Achievements
            </h3>
            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-l-4 border-l-yellow-500 dark:bg-slate-800 dark:border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                        <Trophy className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{achievement.title}</h4>
                        <p className="text-slate-600 dark:text-slate-300">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="dark:bg-slate-800 dark:border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-slate-100 text-sm mb-1">{cert.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {cert.date}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
