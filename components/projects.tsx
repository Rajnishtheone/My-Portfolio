import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Weather Insight by SwaRa",
      year: "2025",
      description: "Built modern weather app with AI chatbot for forecasts & Q&A; integrated APIs, world clocks, PWA.",
      technologies: ["TypeScript", "React", "OpenAI", "PWA"],
      featured: true,
    },
    {
      title: "Decentralized Community Court (DCC)",
      year: "2025",
      description:
        "Designed platform for transparent community case voting with AI verdicts, JWT auth, role-based access.",
      technologies: ["MERN", "Docker", "Redis", "GraphQL"],
      featured: true,
    },
    {
      title: "Inventory Tracker",
      year: "Feb–May 2025",
      description: "Built backend for supermarket inventory, CRUD operations, and reports.",
      technologies: ["PHP", "MySQL", "OOP"],
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`h-full dark:bg-slate-800 dark:border-slate-700 ${project.featured ? "ring-2 ring-blue-200 dark:ring-blue-800" : ""}`}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg dark:text-slate-100">{project.title}</CardTitle>
                  {project.featured && <Badge className="bg-blue-600 dark:bg-blue-500">Featured</Badge>}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{project.year}</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
