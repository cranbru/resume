import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, type LucideIcon } from "lucide-react"
import Link from "next/link"

interface ArticleProps {
  article: {
    id: number
    title: string
    excerpt: string
    date: string
    category: string
    icon: LucideIcon
    readTime: string
  }
}

export default function ArticleCard({ article }: ArticleProps) {
  const { id, title, excerpt, date, category, icon: Icon, readTime } = article

  return (
    <Card className="overflow-hidden border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 h-full flex flex-col animate-fade-in">
      <div className="h-2 bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          <Badge className="bg-gradient-to-r from-cyan-500 to-cyan-700 border-none text-white">{category}</Badge>
          <div className="flex items-center text-xs text-slate-400">
            <Clock className="h-3 w-3 mr-1" />
            {readTime}
          </div>
        </div>
        <CardTitle className="text-xl text-slate-100 line-clamp-2">{title}</CardTitle>
        <CardDescription className="text-slate-400 text-sm">{date}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <p className="text-slate-300 text-sm line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href={`/articles/${id}`} className="w-full">
          <Button
            variant="outline"
            className="w-full border-slate-700 text-cyan-400 hover:bg-slate-700 hover:text-cyan-300"
          >
            Read Article
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
