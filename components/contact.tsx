import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="dark:bg-slate-900 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-100">Email</p>
                      <a
                        href="mailto:Rajnishkk97@gmail.com"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Rajnishkk97@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                      <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-100">Phone</p>
                      <a href="tel:+919798669871" className="text-green-600 dark:text-green-400 hover:underline">
                        +91 9798669871
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                      <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-100">Location</p>
                      <p className="text-slate-600 dark:text-slate-300">Kerala, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-slate-900 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Connect With Me</h3>

                <div className="space-y-4">
                  <Button asChild className="w-full justify-start">
                    <a href="https://linkedin.com/in/rajnish-kumar-11808a254" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 mr-3" />
                      Connect on LinkedIn
                    </a>
                  </Button>

                  <Button variant="outline" asChild className="w-full justify-start bg-transparent">
                    <a href="https://github.com/Rajnishtheone" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 mr-3" />
                      Follow on GitHub
                    </a>
                  </Button>

                  <Button variant="outline" asChild className="w-full justify-start bg-transparent">
                    <a href="mailto:Rajnishkk97@gmail.com">
                      <Mail className="h-5 w-5 mr-3" />
                      Send Email
                    </a>
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                    Looking forward to hearing from you!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
        <div className="text-center text-slate-600 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} Rajnish Kumar. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}
