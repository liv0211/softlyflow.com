// Each category maps to:
// - a curated Unsplash photo ID (free, no API key needed via source.unsplash.com)
// - a CSS gradient fallback
// - an accent color for the card

export interface CoverConfig {
  unsplashId: string   // used as: https://source.unsplash.com/{id}/800x500
  gradient: string     // CSS gradient fallback
  accent: string       // hex accent color
  textColor: string    // 'light' | 'dark' for overlay text
}

const categoryCovers: Record<string, CoverConfig> = {
  'Instagram Bios': {
    unsplashId: 'N_Y88TWmGwA', // aesthetic flat lay with phone
    gradient: 'linear-gradient(135deg, #F9E8D0 0%, #F0D5B8 50%, #E8C49A 100%)',
    accent: '#B8956A',
    textColor: 'dark',
  },
  'Captions': {
    unsplashId: 'Kk5CVs2hCNs', // cozy writing scene
    gradient: 'linear-gradient(135deg, #E8EEF2 0%, #D4DFE6 50%, #BDD0DA 100%)',
    accent: '#7A9BAD',
    textColor: 'dark',
  },
  'Guides': {
    unsplashId: 'IClZBVw5W5A', // open notebook, aesthetic
    gradient: 'linear-gradient(135deg, #EDF0E8 0%, #DCE3D2 50%, #C8D4BA 100%)',
    accent: '#7A8E6E',
    textColor: 'dark',
  },
  'Digital Life': {
    unsplashId: 'npxXWgQ33ZQ', // minimal desk setup
    gradient: 'linear-gradient(135deg, #EDE8F0 0%, #DDD4E8 50%, #CAC0D8 100%)',
    accent: '#8E7AAD',
    textColor: 'dark',
  },
}

const defaultCover: CoverConfig = {
  unsplashId: 'photo-1499750310107-5fef28a66643', // aesthetic coffee & journal
  gradient: 'linear-gradient(135deg, #FDFBF7 0%, #F0EAE0 50%, #E5DDD0 100%)',
  accent: '#B8956A',
  textColor: 'dark',
}

export function getCoverConfig(category?: string): CoverConfig {
  if (!category) return defaultCover
  return categoryCovers[category] ?? defaultCover
}

// Returns a deterministic Unsplash URL based on slug (so it's stable across builds)
// Uses Unsplash Source API — free, no API key, no rate limits for reasonable use
export function getUnsplashUrl(slug: string, category?: string): string {
  const config = getCoverConfig(category)
  // Use picsum.photos as primary (more reliable), unsplash as backup keyword search
  const keywords = getCoverKeywords(category)
  return `https://images.unsplash.com/photo-${config.unsplashId}?auto=format&fit=crop&w=800&q=70`
}

function getCoverKeywords(category?: string): string {
  const map: Record<string, string> = {
    'Instagram Bios': 'aesthetic,minimal,lifestyle',
    'Captions': 'cozy,writing,journal',
    'Guides': 'notebook,desk,minimal',
    'Digital Life': 'phone,minimal,desk',
  }
  return map[category ?? ''] ?? 'aesthetic,minimal,calm'
}

// Slug-based seed for deterministic Picsum photos (stable, always available)
export function getPicsumUrl(slug: string, width = 800, height = 450): string {
  // Hash slug to a number between 1-1000
  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 1000
  }
  // Use curated nature/lifestyle photo IDs from Picsum
  const aestheticIds = [
    10, 11, 12, 13, 14, 15, 16, 20, 22, 24,
    26, 28, 29, 30, 37, 39, 40, 42, 43, 45,
    48, 49, 50, 51, 54, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 67, 68, 69, 70, 71,
  ]
  const id = aestheticIds[hash % aestheticIds.length]
  return `https://picsum.photos/seed/${slug}/${width}/${height}?grayscale&blur=1`
}
