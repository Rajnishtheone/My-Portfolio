import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "PHP", "C++", "Java (Basics)"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "HTML5", "CSS3", "REST APIs"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "MySQL", "PostgreSQL", "GraphQL", "Redis"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "CI/CD", "Docker", "Firebase", "Cloudinary", "ElasticSearch"],
    },
    {
      title: "Other",
      skills: ["OOP", "SDLC", "JWT", "Agile", "Linux", "Big Data"],
    },
  ]

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg text-center dark:text-slate-100">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
