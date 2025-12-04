import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Softlyflow is a global aesthetic DIY and lifestyle studio sharing cozy crafts, mindful rituals, and heartfelt templates for English-speaking makers.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-500 mb-4">About Softlyflow</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            A cozy corner for global makers who love beauty, craft, and gentle living
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Softlyflow is a digital studio dedicated to aesthetic DIY tutorials, warm handmade projects, and slow
            lifestyle rituals. We celebrate the joy of creating by hand—and we share it in English so makers everywhere
            can feel at home here.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="bg-primary-50/60 border border-primary-100 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our heartbeat</h2>
            <p className="text-gray-700 leading-relaxed">
              We believe beautiful routines can be simple, handmade objects can tell stories, and creativity belongs in
              everyday life—not just special occasions. Softlyflow curates timeless craft ideas, printable templates,
              baking rituals, journaling prompts, and room styling notes that feel soothing, modern, and globally
              inclusive.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What we create</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>DIY tutorials:</strong> Crochet, clay, embroidery, candles, paper art, and beyond—always
                beginner-friendly and camera-ready.
              </li>
              <li>
                <strong>Mindful lifestyle guides:</strong> Journaling systems, morning rituals, aesthetic planning, and
                sensory tips for slow days.
              </li>
              <li>
                <strong>Digital templates:</strong> Printable checklists, recipe cards, pattern PDFs, and mini workbooks
                you can use or resell.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Creative philosophy</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Warm & approachable</h3>
              <p className="text-gray-700">
                Every guide is written with kindness and clarity so you can learn at your own pace, wherever you are in
                the world.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global aesthetic</h3>
              <p className="text-gray-700">
                We blend influences from Tokyo coffee shops, Parisian flea markets, Seoul stationery aisles, and
                Scandinavian homes to keep things fresh yet timeless.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainable mindset</h3>
              <p className="text-gray-700">
                We champion reusable materials, thoughtful gifting, and templates that help you craft smarter, not
                harder.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community energy</h3>
              <p className="text-gray-700">
                Softlyflow is built for sharing. Teach a workshop, sell finished pieces, or simply pass a tutorial to a
                friend—our guides are made to travel.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-white border border-gray-200 rounded-2xl p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Come create with us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you are a weekend crafter, a market seller, or someone who loves tending to a beautiful home, you
            belong here. Brew a cup of something comforting, open a tutorial, and let’s fill your days with soft color,
            handmade textures, and cozy intention.
          </p>
          <p className="text-primary-600 font-medium">#softlyflowmakers worldwide — and growing.</p>
        </div>
      </div>
    </div>
  )
}

