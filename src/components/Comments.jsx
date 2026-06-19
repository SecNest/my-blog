import { useEffect, useRef } from 'react'
import { useTheme } from '../hooks/useTheme'

export default function Comments({ slug }) {
  const ref = useRef(null)
  const { dark } = useTheme()

  useEffect(() => {
    if (!ref.current) return

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', '')
    script.setAttribute('data-repo-id', '')
    script.setAttribute('data-category', 'Announcements')
    script.setAttribute('data-category-id', '')
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', dark ? 'dark' : 'light')
    script.setAttribute('data-lang', 'zh-CN')
    script.crossOrigin = 'anonymous'
    script.async = true

    ref.current.innerHTML = ''
    ref.current.appendChild(script)
  }, [slug, dark])

  return (
    <section className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
      <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>评论</h3>
      <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
        评论基于 GitHub Discussions，请先登录 GitHub 账号。
      </p>
      <div ref={ref} />
    </section>
  )
}
