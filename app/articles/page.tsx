"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, FileText, Plus, Search, Shield, Terminal } from "lucide-react"
import ArticleCard from "@/components/article-card"
import { Badge } from "@/components/ui/badge"

// Sample article data
const sampleArticles = [
  {
    id: 1,
    title: "Understanding Zero Trust Architecture",
    excerpt: "A comprehensive guide to implementing zero trust security models in modern organizations.",
    date: "April 10, 2025",
    category: "Security",
    icon: Shield,
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Secure Coding Practices for React Applications",
    excerpt: "Learn how to write secure React code and prevent common vulnerabilities in your web applications.",
    date: "March 22, 2025",
    category: "Development",
    icon: Terminal,
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "The Future of Authentication: Beyond Passwords",
    excerpt: "Exploring passwordless authentication methods and their implementation in modern applications.",
    date: "February 15, 2025",
    category: "Security",
    icon: Shield,
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Building Secure APIs with Node.js",
    excerpt: "Best practices for developing and securing RESTful APIs using Node.js and Express.",
    date: "January 30, 2025",
    category: "Development",
    icon: Terminal,
    readTime: "15 min read",
  },
]

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filter articles based on search term and category
  const filteredArticles = sampleArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  // Get unique categories
  const categories = Array.from(new Set(sampleArticles.map((article) => article.category)))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10 animate-fade-in">
        <header className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <Link href="/">
              <Button
                variant="outline"
                className="gap-2 text-cyan-400 border-slate-700 hover:bg-slate-800 hover:text-cyan-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Profile
              </Button>
            </Link>
            <Link href="/articles/post">
              <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 border-none text-white">
                <Plus className="h-4 w-4" />
                Post New Article
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8 space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Jane's Tech & Security Articles
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Insights and tutorials on cybersecurity, development, and the intersection of both worlds.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 bg-slate-800 border-slate-700 text-slate-200 placeholder:text-slate-500 focus:border-cyan-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  className={`cursor-pointer ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white"
                      : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                  }`}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => <ArticleCard key={article.id} article={article} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <FileText className="h-12 w-12 mx-auto text-slate-500 mb-4" />
              <h3 className="text-xl font-medium text-slate-300 mb-2">No articles found</h3>
              <p className="text-slate-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
