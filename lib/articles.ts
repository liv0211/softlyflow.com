import { getReadingTime } from './utils'

export interface Article {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  tags: string[]
  readTime: number
  seoTitle?: string
  seoDescription?: string
}

// This will be replaced with a database or CMS in the future
// For now, we'll use a simple array
export const articles: Article[] = [
  {
    slug: 'sunset-pastel-crochet-coasters',
    title: 'Sunset Pastel Crochet Coasters: Beginner-Friendly Set',
    excerpt:
      'Make a dreamy stack of pastel crochet coasters inspired by golden-hour skies. Perfect for gifting, market tables, or your own tea corner.',
    content: `# Sunset Pastel Crochet Coasters

![Pastel crochet coasters stacked beside a cup of tea](https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80)

Inspired by soft evening gradients, these crochet coasters take less than 30 minutes each and only use basic stitches. The finished set looks beautiful on any table and protects your surfaces with love.

## Supplies
- DK cotton yarn in 4 pastel shades
- 4 mm crochet hook
- Tapestry needle + scissors
- Blocking mat + pins (optional for perfectly round results)

## Step-by-step instructions
1. **Magic circle + round 1**  
   Chain 2, crochet 12 double crochets (US terms) into the ring, tighten, slip stitch to join.
2. **Round 2**  
   Chain 2, *2 double crochets in each stitch* around (24 stitches).
3. **Round 3**  
   Chain 2, *(1 double crochet, 2 double crochets in next stitch)* repeat (36 stitches).
4. **Round 4 (border)**  
   Switch color, *single crochet, chain 2, skip 1 stitch* repeat to create a scalloped edge.
5. **Finishing**  
   Weave in ends, lightly block for a flat shape.

## Styling ideas
- Tie stacks with silk ribbon for instant hostess gifts.
- Mix unexpected color palettes (matcha + lilac!) for a trendier look.

## Printable pattern card
Download our free PDF template in the Templates section to resell or share with workshop students.`,
    date: '2024-02-01',
    category: 'Crochet',
    tags: ['crochet', 'pastel', 'home decor', 'beginner friendly'],
    readTime: 6,
    seoTitle: 'Sunset Pastel Crochet Coasters Tutorial | Softlyflow',
    seoDescription: 'Create dreamy pastel crochet coasters with this beginner tutorial featuring step-by-step instructions and styling ideas.',
  },
  {
    slug: 'kawaii-polymer-clay-pet-charms',
    title: 'Kawaii Polymer Clay Pet Charms',
    excerpt:
      'Sculpt tiny animal friends from polymer clay and turn them into keychains, zipper pulls, or bracelet charms.',
    content: `# Kawaii Polymer Clay Pet Charms

![Tiny pastel polymer clay charms shaped like animals](https://images.unsplash.com/photo-1513617333755-ae441b2a5a1c?auto=format&fit=crop&w=900&q=80)

These pocket-sized pals are the perfect craft-night activity. Mix soft colors, add glossy eyes, and bake them into durable charms.

## Supplies
- Polymer clay in pastel shades
- Dotting tool or toothpick
- Craft blade
- Eye pins + jump rings + keychain hardware
- UV resin or varnish for shine

## Tutorial
1. **Condition clay**  
   Roll small balls for head + body. Flatten slightly for a chibi look.
2. **Add features**  
   Use contrasting clay for ears, cheeks, and tails. Press gently with a dotting tool.
3. **Insert hardware**  
   Add an eye pin at the top before baking to avoid cracks later.
4. **Bake**  
   Follow clay brand instructions (usually 110°C / 230°F for 15 minutes).
5. **Gloss + assemble**  
   Brush UV resin, cure, attach jump ring + keychain.

## Variations
- Turn into bag charms by adding tassels.
- Create zodiac animals for a collectible set.

## Photo prompt
Style your finished charms with soft fabric, petals, and daylight for an Instagram-ready shot.`,
    date: '2024-02-04',
    category: 'DIY Crafts',
    tags: ['polymer clay', 'kawaii', 'keychains', 'accessories'],
    readTime: 5,
    seoTitle: 'Kawaii Polymer Clay Pet Charms Tutorial | Softlyflow',
    seoDescription: 'Learn how to sculpt adorable polymer clay pet charms with easy steps, baking tips, and styling ideas.',
  },
  {
    slug: 'cottagecore-embroidered-market-tote',
    title: 'Cottagecore Embroidered Market Tote',
    excerpt:
      'Transform a plain canvas tote with botanical embroidery inspired by weekend markets and wildflower walks.',
    content: `# Cottagecore Embroidered Market Tote

![Canvas tote with floral embroidery hanging on a chair](https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80)

Slow mornings deserve beautiful bags. This project layers simple stitches into a lush floral arrangement on any tote you already own.

## Supplies
- Blank canvas tote
- Embroidery hoop (8 inch)
- Embroidery floss in 6 coordinating shades
- Transfer pen or water-soluble pencil
- Needle + scissors

## Pattern transfer
1. Sketch or print our downloadable floral bouquet PDF.
2. Slide carbon paper between tote + template, trace gently.

## Stitches used
- Stem stitch for vines
- Lazy daisy for petals
- French knots for pollen
- Satin stitch for fruit/leaves

## Embroidery steps
1. Hoop the corner of your tote, keeping fabric taut but not stretched.
2. Outline stems first, then build large petals, add filler leaves, finish with dotted berries.
3. Mist lightly to erase transfer lines, let dry, then steam with a pressing cloth.

## Care tips
- Hand-wash in cool water, reshape, and air dry.
- Store hanging to avoid creases on stitches.`,
    date: '2024-02-08',
    category: 'DIY Crafts',
    tags: ['embroidery', 'cottagecore', 'tote bag', 'slow living'],
    readTime: 7,
    seoTitle: 'Cottagecore Embroidered Tote Tutorial | Softlyflow',
    seoDescription: 'Stitch a romantic floral design on your market tote with this step-by-step embroidery guide.',
  },
  {
    slug: 'bubble-candle-studio-at-home',
    title: 'Cloudy Bubble Candles: A Minimal Home Studio Project',
    excerpt:
      'Pour trendy bubble candles with a marshmallow color palette and essential oil blends that feel like spa days at home.',
    content: `# Cloudy Bubble Candles

![Bubble candles in soft neutral tones on a marble tray](https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80)

These sculptural candles look boutique-ready but only require a silicone mold and gentle patience.

## Materials
- Soy wax flakes (1 lb makes ~4 candles)
- Bubble candle silicone mold
- Cotton wicks + wick stickers
- Digital thermometer
- Essential oils (ylang-ylang, lavender, bergamot)
- Candle dye or mica

## Pour guide
1. **Prep mold**: Insert wick, secure with wick holder.
2. **Melt wax**: Double boiler method, remove heat at 75°C / 167°F.
3. **Fragrance + color**: When wax cools to 65°C / 149°F, add oils (6%) and 1–2 drops dye.
4. **Pour slowly**: Fill mold in two stages to prevent air pockets.
5. **Cure + unmold**: Let set 6 hours, then unmold and trim wick to 0.5 in.

## Styling + safety
- Display on ceramic trays to catch drips.
- Burn for 2 hours max each session to keep shape crisp.

## Branding idea
Wrap each candle with vellum belly bands and a minimalist logo for small-batch sales.`,
    date: '2024-02-12',
    category: 'Aesthetic Life',
    tags: ['candles', 'home fragrance', 'minimal', 'DIY business'],
    readTime: 6,
    seoTitle: 'Bubble Candle DIY Guide | Softlyflow',
    seoDescription: 'Pour your own bubble candles with soft colors, essential oil blends, and pro finishing tips.',
  },
  {
    slug: 'airy-clay-cloud-trinket-dishes',
    title: 'Air-Dry Clay Cloud Trinket Dishes',
    excerpt:
      'Shape dreamy cloud trays with air-dry clay for jewelry, incense, or desk accessories in under one hour.',
    content: `# Air-Dry Clay Cloud Trinket Dishes

![Air dry clay cloud dishes on a pastel background](https://images.unsplash.com/photo-1521986329282-0436c1b6e8b3?auto=format&fit=crop&w=900&q=80)

With just clay, paint, and a little imagination, you can create soft-edged dishes that elevate any vanity setup.

## Supplies
- Air-dry clay (white)
- Rolling pin + craft knife
- Bowl for shaping
- Fine sandpaper
- Acrylic paint + gloss varnish

## Steps
1. Roll clay to 5 mm thickness, cut cloud outline with knife.
2. Place cut-out over an upside-down bowl to form gentle curves.
3. Dry 24 hours, then sand edges smooth.
4. Paint in ombré pastels, add tiny stars using a paint marker.
5. Seal with gloss varnish for durability.

## Styling tips
- Layer two dish sizes for depth.
- Add self-adhesive felt to the bottom to prevent slipping.

## Gift idea
Bundle the dish with matching jewelry or incense sticks for a thoughtful care package.`,
    date: '2024-02-15',
    category: 'DIY Crafts',
    tags: ['air dry clay', 'home decor', 'gift idea', 'beginner friendly'],
    readTime: 4,
    seoTitle: 'Air-Dry Clay Cloud Dish Tutorial | Softlyflow',
    seoDescription: 'Make whimsical cloud-shaped trinket dishes with air-dry clay using this quick tutorial.',
  },
  {
    slug: 'beaded-phone-strap-world-tour',
    title: 'Global-Inspired Beaded Phone Strap',
    excerpt:
      'Design a trendy phone strap using beads inspired by destinations like Tokyo, Paris, and Marrakech.',
    content: `# Global-Inspired Beaded Phone Strap

![Colorful beaded phone strap draped over a smartphone](https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?auto=format&fit=crop&w=900&q=80)

Functional and photogenic, this strap brings together color theory and travel nostalgia.

## Supplies
- Strong nylon cord (0.8 mm)
- Mixed beads (glass, clay, pearls, letter beads)
- Crimp beads + lobster clasp
- Needle or beading wire

## Tutorial
1. Measure cord to 16 in, fold in half, and tie a loop for attaching to phone case.
2. Plan bead pattern inspired by a city palette (e.g., sakura pinks for Tokyo).
3. String beads on both strands for a thicker look, secure with crimp bead.
4. Attach lobster clasp to finish.

## Safety check
- Test strength by gently pulling before daily use.
- Avoid submerging in water to preserve bead coating.

## Variations
- Add evil-eye beads for protection.
- Mix letter beads to spell affirmations.`,
    date: '2024-02-18',
    category: 'Accessories',
    tags: ['beading', 'phone strap', 'travel inspired', 'fashion'],
    readTime: 4,
    seoTitle: 'DIY Beaded Phone Strap Tutorial | Softlyflow',
    seoDescription: 'Craft a global-inspired beaded phone strap with color palettes, stringing tips, and styling ideas.',
  },
  {
    slug: 'felt-matcha-dessert-pins',
    title: 'Matcha Dessert Felt Pins',
    excerpt:
      'Stitch adorable felt pins shaped like matcha cakes, parfaits, and roll cakes to dress up bags and jackets.',
    content: `# Matcha Dessert Felt Pins

![Felt dessert pins displayed on a linen cloth](https://images.unsplash.com/photo-1504753793650-d4a2b783c15f?auto=format&fit=crop&w=900&q=80)

Needle-and-thread therapy! These pins combine kawaii design with matcha hues for an irresistible accessory line.

## Materials
- Wool blend felt in matcha, cream, blush
- Embroidery floss
- Fabric glue
- Pin backs
- Printed template (downloadable PDF)

## Steps
1. Cut template shapes (base, cream, toppings).
2. Hand-stitch layers with blanket stitch.
3. Add sprinkle dots using French knots.
4. Glue pin back, press under a book until dry.

## Display idea
Pin onto kraft cards stamped with your logo for instant market-ready packaging.`,
    date: '2024-02-21',
    category: 'DIY Crafts',
    tags: ['felt crafts', 'matcha', 'pins', 'kawaii'],
    readTime: 3,
    seoTitle: 'Matcha Felt Pin Tutorial | Softlyflow',
    seoDescription: 'Create kawaii matcha dessert pins with felt layering, embroidery details, and packaging tips.',
  },
  {
    slug: 'journaling-morning-pages-kit',
    title: 'Morning Pages Journaling Kit',
    excerpt:
      'Assemble a calming journaling kit with prompts, printable trackers, and layout ideas that keep you consistent.',
    content: `# Morning Pages Journaling Kit

![Flatlay of journaling supplies with stickers and pens](https://images.unsplash.com/photo-1470173274384-c4e8e2f9a55d?auto=format&fit=crop&w=900&q=80)

Your morning ritual can feel like a creative retreat with the right setup.

## Kit essentials
- A5 dotted notebook
- Gel pens in earth tones
- Washi tape + sticker sheets
- Printable tracker from our Templates hub
- Essential oil roller for grounding

## Page structure (10 minutes)
1. **3-minute brain dump**: Write anything on your mind.
2. **Gratitude trio**: Note 3 sensory joys.
3. **Intention box**: One sentence for how you want to feel.
4. **Mini mood collage**: Add washi, sticker, or color swatch.

## Printable bundle
- Habit tracker
- Color palette swatches
- Playlist cards for linking songs to moods

## Tips for consistency
- Keep kit in a basket near sunlight.
- Pair with a morning beverage ritual.`,
    date: '2024-02-24',
    category: 'Aesthetic Life',
    tags: ['journaling', 'morning routine', 'printables', 'wellness'],
    readTime: 4,
    seoTitle: 'Morning Pages Journaling Kit | Softlyflow',
    seoDescription: 'Build a cozy journaling kit with prompts, printables, and sensory tips for your morning ritual.',
  },
  {
    slug: 'heirloom-ribbon-hair-bows',
    title: 'Heirloom Ribbon Hair Bows',
    excerpt:
      'Sew oversized ribbon hair bows that feel luxurious enough for bridal parties yet playful for everyday outfits.',
    content: `# Heirloom Ribbon Hair Bows

![Satin ribbon hair bows in soft colors](https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80)

Oversized bows are trending globally. Customize them with velvet, organza, or moiré ribbon.

## Materials
- 2.5 in wide double-faced ribbon (60 cm per bow)
- Needle + matching thread or fabric glue
- Alligator clip or French barrette
- Optional: freshwater pearls, charms

## Instructions
1. Fold ribbon ends to the center, overlap 1 cm.
2. Stitch or glue overlap to create a loop.
3. Pinch center, wrap with 6 cm ribbon strip, secure at back.
4. Add clip, then embellish with pearls or initials.

## Styling
- Pair with sleek ponytails or half-up styles.
- Offer monochrome sets for bridesmaids.

## Care
- Steam lightly to remove creases, store clipped to a hanger.`,
    date: '2024-02-26',
    category: 'Accessories',
    tags: ['hair accessories', 'sewing', 'fashion', 'gift idea'],
    readTime: 3,
    seoTitle: 'Ribbon Hair Bow Tutorial | Softlyflow',
    seoDescription: 'Create heirloom-quality ribbon hair bows with step-by-step sewing instructions and styling tips.',
  },
  {
    slug: 'stained-glass-suncatcher-mobile',
    title: 'Pastel Stained-Glass Style Suncatcher Mobile',
    excerpt:
      'Craft a dreamy window mobile using vellum, brass hoops, and transparent paint to scatter rainbows across your walls.',
    content: `# Pastel Stained-Glass Style Suncatcher Mobile

![Sunlight shining through pastel suncatchers](https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80)

No glass-cutting required—just lightweight materials that glow in the sun.

## Supplies
- Brass hoop (8 in)
- Fishing line
- Clear acetate or vellum sheets
- Glass paint or alcohol inks
- Gold leaf (optional)
- Suncatcher suction hook

## Process
1. Cut acetate into organic shapes (clouds, arches, droplets).
2. Paint translucent gradients, let dry 2 hours.
3. Add gold leaf fractals with adhesive for sparkle.
4. Punch tiny holes, string shapes at different lengths.
5. Tie to hoop, balance weights, hang near a bright window.

## Safety
- Keep away from direct heat sources.
- Use UV-resistant paint to prevent fading.

## Mood idea
Pair with sheer curtains and morning playlists for a serene nook.`,
    date: '2024-02-28',
    category: 'Home Decor',
    tags: ['suncatcher', 'window decor', 'painting', 'light play'],
    readTime: 5,
    seoTitle: 'DIY Pastel Suncatcher Mobile | Softlyflow',
    seoDescription: 'Assemble a pastel stained-glass inspired suncatcher mobile with acetate, paint, and brass hoops.',
  },
]

export function getAllArticles(): Article[] {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category)
}

export function getArticlesByTag(tag: string): Article[] {
  return articles.filter((article) => article.tags.includes(tag))
}

