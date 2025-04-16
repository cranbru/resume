"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function PostArticlePage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    excerpt: "",
    content: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Article Published!",
        description: "Your article has been successfully published.",
      })

      // Reset form or redirect
      setFormData({
        title: "",
        category: "",
        excerpt: "",
        content: "",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-8">
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl relative z-10 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <Link href="/articles">
            <Button
              variant="outline"
              className="gap-2 text-cyan-400 border-slate-700 hover:bg-slate-800 hover:text-cyan-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Button>
          </Link>
        </div>

        <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-xl">
          <div className="h-2 bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
          <CardHeader>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Post New Article
            </CardTitle>
            <CardDescription className="text-slate-400">
              Share your knowledge and insights with the community
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-slate-200">
                  Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter article title"
                  className="bg-slate-900 border-slate-700 text-slate-200"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-slate-200">
                  Category
                </Label>
                <Select value={formData.category} onValueChange={handleSelectChange} required>
                  <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-200">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-700">
                    <SelectItem value="Security">Security</SelectItem>
                    <SelectItem value="Development">Development</SelectItem>
                    <SelectItem value="Cloud">Cloud</SelectItem>
                    <SelectItem value="Career">Career</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt" className="text-slate-200">
                  Excerpt
                </Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  placeholder="Brief summary of your article"
                  className="bg-slate-900 border-slate-700 text-slate-200 resize-none h-20"
                  value={formData.excerpt}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content" className="text-slate-200">
                  Content
                </Label>
                <Textarea
                  id="content"
                  name="content"
                  placeholder="Write your article content here..."
                  className="bg-slate-900 border-slate-700 text-slate-200 resize-none h-64"
                  value={formData.content}
                  onChange={handleChange}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white"
                disabled={isSubmitting}
              >
                <Save className="h-4 w-4" />
                {isSubmitting ? "Publishing..." : "Publish Article"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
