/**
 * Simple Markdown to HTML converter
 * This is a basic implementation for rendering article content
 * For production, consider using a library like 'marked' or 'remark'
 */

export function markdownToHtml(markdown: string): string {
  let html = markdown

  // Process lists first (before headers to avoid conflicts)
  // Convert markdown lists to HTML
  const lines = html.split('\n')
  const processedLines: string[] = []
  let inList = false
  let listItems: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    const isListItem = /^[-*]\s+(.+)$/.test(line) || /^\d+\.\s+(.+)$/.test(line)

    if (isListItem) {
      if (!inList) {
        inList = true
        listItems = []
      }
      const content = line.replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, '')
      listItems.push(`<li>${content}</li>`)
    } else {
      if (inList) {
        processedLines.push(`<ul>${listItems.join('')}</ul>`)
        inList = false
        listItems = []
      }
      processedLines.push(line)
    }
  }

  if (inList && listItems.length > 0) {
    processedLines.push(`<ul>${listItems.join('')}</ul>`)
  }

  html = processedLines.join('\n')

  // Headers (process after lists)
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')

  // Bold (process before italic to avoid conflicts)
  // Replace **text** with <strong>text</strong>
  html = html.replace(/\*\*([^*]+?)\*\*/gim, '<strong>$1</strong>')

  // Italic (single asterisks that aren't part of bold)
  // Replace *text* with <em>text</em>, but only if not already processed as bold
  html = html.replace(/(?<!\*)\*([^*\n]+?)\*(?!\*)/gim, '<em>$1</em>')

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')

  // Paragraphs (lines that don't start with HTML tags and aren't empty)
  html = html.split('\n').map((line) => {
    const trimmed = line.trim()
    if (!trimmed) return ''
    if (trimmed.startsWith('<')) return trimmed
    return `<p>${trimmed}</p>`
  }).join('\n')

  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/gim, '')
  html = html.replace(/\n{3,}/gim, '\n\n')

  return html
}

