'use client'
import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return

    // TODO: Replace with your Mailchimp / ConvertKit endpoint
    // Free options: Mailchimp (mailchimp.com), ConvertKit (kit.com), Brevo (brevo.com)
    // All have free tiers up to 500–1000 subscribers
    //
    // Example Mailchimp form action URL:
    // https://xxxxx.us1.list-manage.com/subscribe/post?u=XXXX&id=XXXX
    //
    // For now, simulate success
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="bg-cream-dark border-y border-stone-200/60 py-14 px-6">
      <div className="max-w-xl mx-auto text-center">
        <span className="text-accent text-lg mb-3 block">✦</span>
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-3">
          50 bio ideas, straight to your inbox.
        </h2>
        <p className="font-sans font-light text-ink-muted text-sm leading-relaxed mb-8">
          Get our free starter pack — 50 aesthetic bio ideas sorted by vibe, plus new caption drops every week. No spam, unsubscribe anytime.
        </p>

        {status === 'success' ? (
          <div className="flex items-center justify-center gap-2 text-sm font-sans font-light text-accent">
            <svg width="16" height="16" viewBox="0 0 15 15" fill="none">
              <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55530 4.54530 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
            </svg>
            You're in — check your inbox ✦
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 bg-white border border-stone-200 rounded-sm text-sm font-sans font-light text-ink placeholder-stone-400 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-accent text-cream text-xs font-sans font-light tracking-widest uppercase rounded-sm hover:bg-accent/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs font-sans font-light text-stone-400 mt-4">
          Free forever · No spam · Unsubscribe anytime
        </p>
      </div>
    </section>
  )
}
