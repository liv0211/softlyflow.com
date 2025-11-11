import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Softlyflow - A gentle guide to self-improvement in the AI era.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Softlyflow</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            <strong>Softlyflow</strong> is a gentle guide to self-improvement in the AI era.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Our mission is to help people discover how artificial intelligence can enhance their daily lives. 
            We believe that AI technology, when used thoughtfully, can be a powerful tool for personal growth, 
            productivity, and well-being.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Do</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We create practical, accessible content that explores the intersection of AI and everyday life. 
            From productivity tips to wellness strategies, we provide actionable insights that help you 
            make the most of AI technology in your personal journey of self-improvement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Approach</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We take a gentle, thoughtful approach to exploring AI. Our content is designed to be:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>Practical:</strong> Real-world applications you can use today</li>
            <li><strong>Accessible:</strong> Clear explanations for everyone, regardless of technical background</li>
            <li><strong>Ethical:</strong> We consider the implications and encourage responsible use of AI</li>
            <li><strong>Human-centered:</strong> Technology as a tool to enhance, not replace, human experience</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Join Our Community</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Whether you're new to AI or already exploring its possibilities, we welcome you to join us 
            on this journey. Together, we can discover how artificial intelligence can help us live 
            better, more fulfilling lives.
          </p>
        </div>
      </div>
    </div>
  )
}

