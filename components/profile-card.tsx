"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Code, Github, Linkedin, Lock, Mail, Server, Shield, Terminal, Twitter, FileText } from "lucide-react"
import Link from "next/link"

export default function ProfileCard() {
  const [activeTab, setActiveTab] = useState("about")
  const [typedText, setTypedText] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)
  const fullText = "Senior Developer & Cybersecurity Specialist"

  // Typing effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  // Set loaded state after initial render
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true)
    }, 300)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <Card className="w-full max-w-md border-none shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-slate-100 backdrop-blur-sm bg-opacity-80 animate-card-entrance relative overflow-hidden">
      {/* Card top gradient line */}
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500"></div>

      {/* Glowing corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-md animate-pulse-slow"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-500/50 rounded-tr-md animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-teal-500/50 rounded-bl-md animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 rounded-br-md animate-pulse-slow animation-delay-3000"></div>

      <CardHeader
        className={`flex flex-col items-center space-y-4 pb-2 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "100ms" }}
      >
        <div className="relative">
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 blur opacity-70 animate-pulse"></div>
          <Avatar className="h-24 w-24 border-2 border-slate-700 relative">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile picture" />
            <AvatarFallback className="bg-slate-700 text-emerald-400">JD</AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-1 text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Jane Doe
          </h2>
          <p className="text-slate-400 h-6">
            {typedText}
            <span className="animate-blink">|</span>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge className="bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800 transition-all duration-300 border-none text-white flex items-center gap-1">
            <Code className="h-3 w-3" />
            Developer
          </Badge>
          <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 transition-all duration-300 border-none text-white flex items-center gap-1">
            <Shield className="h-3 w-3" />
            Security
          </Badge>
          <Badge className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 transition-all duration-300 border-none text-white flex items-center gap-1">
            <Server className="h-3 w-3" />
            Cloud
          </Badge>
        </div>
      </CardHeader>

      <CardContent
        className={`pb-2 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "400ms" }}
      >
        <div className="w-full">
          {/* Custom Tab Implementation */}
          <div className="mb-4">
            <div className="grid grid-cols-3 bg-slate-800/50 border border-slate-700 rounded-md p-1 relative">
              {/* Tab Buttons */}
              <button
                onClick={() => setActiveTab("about")}
                className={`py-2 px-4 rounded-md z-10 transition-colors duration-200 ${
                  activeTab === "about" ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`py-2 px-4 rounded-md z-10 transition-colors duration-200 ${
                  activeTab === "skills" ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab("contact")}
                className={`py-2 px-4 rounded-md z-10 transition-colors duration-200 ${
                  activeTab === "contact" ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Contact
              </button>

              {/* Animated Tab Indicator */}
              <div
                className="absolute top-1 bottom-1 rounded-md bg-gradient-to-r from-cyan-900/50 to-emerald-900/50 transition-all duration-300 ease-out"
                style={{
                  left: `${(100 / 3) * (activeTab === "about" ? 0 : activeTab === "skills" ? 1 : 2)}%`,
                  width: `${100 / 3}%`,
                }}
              />
            </div>

            {/* Tab Content with Transitions */}
            <div className="mt-4 min-h-[120px]">
              {/* About Tab */}
              <div
                className={`transition-all duration-300 ${
                  activeTab === "about"
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 absolute pointer-events-none transform -translate-y-4"
                }`}
              >
                <p className="text-sm text-slate-300">
                  Full-stack developer with 8+ years of experience and a passion for cybersecurity. Specializing in
                  secure application development and penetration testing. Currently working on cloud security solutions
                  and open-source security tools.
                </p>
              </div>

              {/* Skills Tab */}
              <div
                className={`transition-all duration-300 ${
                  activeTab === "skills"
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 absolute pointer-events-none transform -translate-y-4"
                }`}
              >
                <div className="space-y-3">
                  <div>
                    <h3 className="mb-2 font-medium text-emerald-400">Development</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-cyan-700 text-cyan-400 hover:bg-cyan-900/30 transition-all duration-300"
                      >
                        JavaScript
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-cyan-700 text-cyan-400 hover:bg-cyan-900/30 transition-all duration-300"
                      >
                        TypeScript
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-cyan-700 text-cyan-400 hover:bg-cyan-900/30 transition-all duration-300"
                      >
                        React
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-cyan-700 text-cyan-400 hover:bg-cyan-900/30 transition-all duration-300"
                      >
                        Node.js
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-cyan-700 text-cyan-400 hover:bg-cyan-900/30 transition-all duration-300"
                      >
                        Python
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium text-emerald-400">Cybersecurity</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/30 transition-all duration-300"
                      >
                        Penetration Testing
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/30 transition-all duration-300"
                      >
                        OWASP
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/30 transition-all duration-300"
                      >
                        Network Security
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/30 transition-all duration-300"
                      >
                        Cryptography
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Tab */}
              <div
                className={`transition-all duration-300 ${
                  activeTab === "contact"
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 absolute pointer-events-none transform -translate-y-4"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-800/50 transition-all duration-300 group">
                    <Mail className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                    <span className="text-sm text-slate-300 group-hover:text-white transition-all duration-300">
                      jane.doe@example.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-800/50 transition-all duration-300 group">
                    <Github className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                    <span className="text-sm text-slate-300 group-hover:text-white transition-all duration-300">
                      github.com/janedoe
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-800/50 transition-all duration-300 group">
                    <Linkedin className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                    <span className="text-sm text-slate-300 group-hover:text-white transition-all duration-300">
                      linkedin.com/in/janedoe
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-800/50 transition-all duration-300 group">
                    <Twitter className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                    <span className="text-sm text-slate-300 group-hover:text-white transition-all duration-300">
                      @jane_cybersec
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter
        className={`flex flex-col gap-3 pt-2 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "700ms" }}
      >
        <div className="flex gap-3 w-full">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2 flex-1 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 border-none text-white shadow-lg shadow-cyan-500/20 hover:shadow-emerald-500/30 transition-all duration-300">
                <Terminal className="h-4 w-4" />
                View Resume
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl bg-slate-900 border-slate-700 text-slate-100">
              <DialogHeader>
                <DialogTitle className="text-emerald-400">Jane Doe - Resume</DialogTitle>
              </DialogHeader>
              <div className="max-h-[70vh] overflow-y-auto p-4">
                <ResumeContent />
              </div>
            </DialogContent>
          </Dialog>

          <Link href="/articles" className="flex-1">
            <Button className="gap-2 w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 border-none text-white shadow-lg shadow-teal-500/20 hover:shadow-cyan-500/30 transition-all duration-300">
              <FileText className="h-4 w-4" />
              View Articles
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

function ResumeContent() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Jane Doe
        </h2>
        <p className="text-slate-400">Senior Developer & Cybersecurity Specialist</p>
        <div className="mt-2 text-sm text-slate-400">
          <p>Los Angeles, CA • jane.doe@example.com • (555) 123-4567</p>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-emerald-400">Summary</h3>
        <div className="mt-2 text-sm text-slate-300">
          <p>
            Experienced full-stack developer with a strong background in cybersecurity. Passionate about building
            secure, scalable applications and identifying security vulnerabilities. Certified ethical hacker with
            expertise in penetration testing and security auditing.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-emerald-400">Experience</h3>
        <div className="mt-2 space-y-4">
          <div>
            <div className="flex justify-between">
              <h4 className="font-medium text-cyan-400">Senior Security Developer, SecureTech Inc.</h4>
              <span className="text-sm text-slate-400">2020 - Present</span>
            </div>
            <ul className="mt-1 list-disc pl-5 text-sm text-slate-300">
              <li>Lead development of secure cloud-based authentication systems</li>
              <li>Conduct regular security audits and penetration testing</li>
              <li>Implemented zero-trust architecture reducing security incidents by 75%</li>
              <li>Mentor junior developers on security best practices</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between">
              <h4 className="font-medium text-cyan-400">Full Stack Developer, WebSolutions</h4>
              <span className="text-sm text-slate-400">2017 - 2020</span>
            </div>
            <ul className="mt-1 list-disc pl-5 text-sm text-slate-300">
              <li>Developed and maintained client web applications using React and Node.js</li>
              <li>Implemented security features including OAuth 2.0 and RBAC</li>
              <li>Optimized database performance and implemented data encryption</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-emerald-400">Education</h3>
        <div className="mt-2 space-y-2">
          <div>
            <div className="flex justify-between">
              <h4 className="font-medium text-cyan-400">M.S. in Cybersecurity</h4>
              <span className="text-sm text-slate-400">2017</span>
            </div>
            <p className="text-sm text-slate-300">University of Technology</p>
          </div>
          <div>
            <div className="flex justify-between">
              <h4 className="font-medium text-cyan-400">B.S. in Computer Science</h4>
              <span className="text-sm text-slate-400">2015</span>
            </div>
            <p className="text-sm text-slate-300">State University</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-emerald-400">Certifications</h3>
        <div className="mt-2 space-y-1 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-cyan-400" />
            <span>Certified Ethical Hacker (CEH)</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-cyan-400" />
            <span>Certified Information Systems Security Professional (CISSP)</span>
          </div>
          <div className="flex items-center gap-2">
            <Server className="h-4 w-4 text-cyan-400" />
            <span>AWS Certified Security Specialist</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-emerald-400">Projects</h3>
        <div className="mt-2 space-y-2 text-sm text-slate-300">
          <div>
            <h4 className="font-medium text-cyan-400">SecureAuth Framework</h4>
            <p>Open-source authentication framework with advanced security features</p>
          </div>
          <div>
            <h4 className="font-medium text-cyan-400">VulnScanner</h4>
            <p>Automated vulnerability scanner for web applications</p>
          </div>
        </div>
      </section>
    </div>
  )
}
