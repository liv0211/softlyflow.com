import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const base = 'https://softlyflow.com'

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/viral-caption-gen`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    // Pillar / hub pages — high priority
    { url: `${base}/bios`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/captions`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ]

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/post/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...postPages]
}
