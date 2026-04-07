import { getAllPosts } from '@/lib/blogPosts'
import BlogListClient from '@/components/BlogListClient'
import '@/css/Blog.css'

export const metadata = {
  title: 'ProfitPlay – Om Value Betting (guider & recensioner)',
  description:
    'ProfitPlay – lär dig value betting, bankroll management och hur du slår spelbolagen med matematik. Guider, recensioner och smarta strategier.',
  keywords:
    'value betting, RebelBetting, bankroll management, betting strategi, sure betting, tjäna pengar på betting, slå spelbolagen',
}

export default function BlogPage() {
  const posts = getAllPosts()
  return <BlogListClient posts={posts} />
}
