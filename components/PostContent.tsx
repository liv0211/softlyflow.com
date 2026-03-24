'use client'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CopyButton from './CopyButton'

interface Props { content: string }

export default function PostContent({ content }: Props) {
  return (
    <div className="prose-softly">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          li({ children, ...props }) {
            const textContent = extractText(children)
            const isCopyable = textContent.length > 5 && textContent.length < 200

            return (
              <li {...props} className="flex items-start justify-between gap-3 py-1.5 group">
                <span className="flex-1 leading-relaxed">{children}</span>
                {isCopyable && (
                  <CopyButton
                    text={textContent}
                    // Always visible on mobile (no hover), fade-in on desktop hover
                    className="shrink-0 mt-0.5 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                  />
                )}
              </li>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

function extractText(children: React.ReactNode): string {
  if (typeof children === 'string') return children
  if (Array.isArray(children)) return children.map(extractText).join('')
  if (children && typeof children === 'object' && 'props' in (children as any)) {
    return extractText((children as any).props?.children ?? '')
  }
  return ''
}
