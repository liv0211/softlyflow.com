import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  category?: string
  keywords?: string[]
  coverImage?: string
  readingTime?: number
}

export interface Post extends PostMeta {
  content: string
}

export function calcReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs()
  return slugs
    .map((slug) => getPostMeta(slug))
    .filter(Boolean)
    .sort((a, b) => (a!.date < b!.date ? 1 : -1)) as PostMeta[]
}

export function getPostMeta(slug: string): PostMeta | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? new Date().toISOString(),
    excerpt: data.excerpt ?? '',
    category: data.category,
    keywords: data.keywords,
    coverImage: data.coverImage,
    readingTime: calcReadingTime(content),
  }
}

export function getPost(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? new Date().toISOString(),
    excerpt: data.excerpt ?? '',
    category: data.category,
    keywords: data.keywords,
    coverImage: data.coverImage,
    readingTime: calcReadingTime(content),
    content,
  }
}

export function getRelatedPosts(slug: string, category?: string, limit = 3): PostMeta[] {
  const all = getAllPosts()
  return all
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, limit)
}
