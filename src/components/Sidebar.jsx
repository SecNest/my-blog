import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { categories } from '../utils/posts'

export default function Sidebar() {
  const [openSections, setOpenSections] = useState(() => {
    const initial = {}
    categories.forEach(c => { initial[c.id] = true })
    return initial
  })
  const location = useLocation()

  const toggle = (id) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <aside className="w-64 shrink-0 hidden lg:block">
      <nav className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4" style={{ scrollbarWidth: 'thin' }}>
        {categories.map(cat => (
          <div key={cat.id} className="mb-3">
            <button
              onClick={() => toggle(cat.id)}
              className="flex items-center gap-2 w-full text-left font-medium py-1.5 hover:opacity-80 transition text-sm"
              style={{ color: 'var(--text-primary)' }}
            >
              <span>{cat.icon}</span>
              <span className="flex-1">{cat.name}</span>
              {openSections[cat.id] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </button>
            {openSections[cat.id] && (
              <ul className="ml-5 mt-0.5">
                {cat.children.map(child => (
                  <li key={child.id}>
                    <Link
                      to={`/knowledge/${child.id}`}
                      className={`block py-1 text-sm transition hover:opacity-80 ${
                        location.pathname === `/knowledge/${child.id}` ? 'font-medium' : ''
                      }`}
                      style={{
                        color: location.pathname === `/knowledge/${child.id}` ? 'var(--accent)' : 'var(--text-secondary)'
                      }}
                    >
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
