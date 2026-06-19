import { useState, useEffect, useMemo } from 'react'

export default function TOC({ content }) {
  const headings = useMemo(() => {
    const matches = content.match(/^#{1,3}\s+.+$/gm) || []
    return matches.map(h => {
      const level = h.match(/^#+/)[0].length
      const text = h.replace(/^#+\s+/, '')
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
      return { level, text, id }
    })
  }, [content])

  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    headings.forEach(h => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="sticky top-20 w-56 shrink-0 hidden xl:block">
      <p className="text-sm font-medium mb-3" style={{ color: 'var(--text-primary)' }}>目录</p>
      <ul>
        {headings.map(h => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block text-sm py-1 transition hover:opacity-80 ${
                activeId === h.id ? 'font-medium' : ''
              }`}
              style={{
                color: activeId === h.id ? 'var(--accent)' : 'var(--text-secondary)',
                paddingLeft: `${(h.level - 1) * 12}px`
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
