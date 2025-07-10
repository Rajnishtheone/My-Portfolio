import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              RK
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Rajnish Kumar
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-6">Full Stack Developer</p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              Detail-oriented Full Stack Developer skilled in building scalable web apps using React, TypeScript,
              Node.js, and modern backend technologies. Seeking entry-level software engineering role.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild>
              <a href="mailto:Rajnishkk97@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://linkedin.com/in/rajnish-kumar-11808a254"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/Rajnishtheone"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Rajnishkk97@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +91 9798669871
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
