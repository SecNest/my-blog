import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { searchPosts } from '../utils/posts'

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    const value = e.target.value
    setQuery(value)
    if (value.trim()) {
      setResults(searchPosts(value))
    } else {
      setResults([])
    }
  }

  const handleSelect = (slug) => {
    setQuery('')
    setResults([])
    setSearchOpen(false)
    navigate(`/post/${slug}`)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'color-mix(in srgb, var(--bg-primary) 85%, transparent)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold" style={{ color: 'var(--accent)' }}>
          SecNest's Blog
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:opacity-70 transition">首页</Link>
          <Link to="/knowledge" className="hover:opacity-70 transition">知识库</Link>
          <Link to="/tools" className="hover:opacity-70 transition">工具手册</Link>
          <Link to="/about" className="hover:opacity-70 transition">关于</Link>
        </nav>

        <div className="flex items-center gap-3">
          {searchOpen ? (
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="搜索文章..."
                className="px-3 py-1.5 rounded-lg text-sm outline-none w-48"
                style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                autoFocus
              />
              {results.length > 0 && (
                <div className="absolute top-full mt-1 w-full rounded-lg shadow-lg overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border)' }}>
                  {results.map(post => (
                    <button
                      key={post.slug}
                      onClick={() => handleSelect(post.slug)}
                      className="block w-full text-left px-3 py-2 text-sm hover:opacity-80 transition"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {post.title}
                    </button>
                  ))}
                </div>
              )}
              <button onClick={() => { setSearchOpen(false); setQuery(''); setResults([]) }} className="ml-2">
                <X size={18} />
              </button>
            </div>
          ) : (
            <button onClick={() => setSearchOpen(true)} className="p-1.5 rounded-lg hover:opacity-70 transition">
              <Search size={18} />
            </button>
          )}
          <ThemeToggle />
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-1.5">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-3" style={{ borderTop: '1px solid var(--border)' }}>
          <Link to="/" onClick={() => setMenuOpen(false)} className="py-2 hover:opacity-70">首页</Link>
          <Link to="/knowledge" onClick={() => setMenuOpen(false)} className="py-2 hover:opacity-70">知识库</Link>
          <Link to="/tools" onClick={() => setMenuOpen(false)} className="py-2 hover:opacity-70">工具手册</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="py-2 hover:opacity-70">关于</Link>
        </nav>
      )}
    </header>
  )
}
