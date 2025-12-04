export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const navigation: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Crochet',
    href: '/crochet',
    children: [
      {
        label: 'Amigurumi Cute Animals',
        href: '/crochet/amigurumi-cute-animals',
      },
      {
        label: 'Doll Clothes',
        href: '/crochet/doll-clothes',
      },
      {
        label: 'Bags & Accessories',
        href: '/crochet/bags-accessories',
      },
      {
        label: 'Beginner Patterns',
        href: '/crochet/beginner-patterns',
      },
    ],
  },
  {
    label: 'DIY Crafts',
    href: '/diy-crafts',
    children: [
      {
        label: 'Kawaii Keychains',
        href: '/diy-crafts/kawaii-keychains',
      },
      {
        label: 'Beading / Bracelet',
        href: '/diy-crafts/beading-bracelet',
      },
      {
        label: 'Felt Crafts',
        href: '/diy-crafts/felt-crafts',
      },
      {
        label: 'Aesthetic Room Decor',
        href: '/diy-crafts/aesthetic-room-decor',
      },
    ],
  },
  {
    label: 'Baking',
    href: '/baking',
    children: [
      {
        label: 'Cute Desserts',
        href: '/baking/cute-desserts',
      },
      {
        label: 'Kawaii Cakes',
        href: '/baking/kawaii-cakes',
      },
      {
        label: 'Cookies & Pastry',
        href: '/baking/cookies-pastry',
      },
      {
        label: 'Beginner Baking',
        href: '/baking/beginner-baking',
      },
    ],
  },
  {
    label: 'Aesthetic Life',
    href: '/aesthetic-life',
    children: [
      {
        label: 'Minimal / Kawaii Style',
        href: '/aesthetic-life/minimal-kawaii-style',
      },
      {
        label: 'Photo Style Tips',
        href: '/aesthetic-life/photo-style-tips',
      },
      {
        label: 'Journaling',
        href: '/aesthetic-life/journaling',
      },
      {
        label: 'Productivity',
        href: '/aesthetic-life/productivity',
      },
    ],
  },
  {
    label: 'Templates',
    href: '/templates',
    children: [
      {
        label: 'Crochet Patterns PDF',
        href: '/templates/crochet-patterns-pdf',
      },
      {
        label: 'Doll Clothing Patterns',
        href: '/templates/doll-clothing-patterns',
      },
      {
        label: 'Baking Recipe Cards',
        href: '/templates/baking-recipe-cards',
      },
      {
        label: 'Printable Checklists',
        href: '/templates/printable-checklists',
      },
    ],
  },
  {
    label: 'Community',
    href: '/community',
    children: [
      {
        label: 'Upload Your Creation',
        href: '/community/upload',
      },
      {
        label: 'Trending DIY Creations',
        href: '/community/trending',
      },
    ],
  },
]

