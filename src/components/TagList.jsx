import { Link } from 'react-router-dom'
import { Tag } from 'lucide-react'

export default function TagList({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <Link
          key={tag}
          to={`/tags/${tag}`}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm transition hover:opacity-80"
          style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
        >
          <Tag size={14} />
          {tag}
        </Link>
      ))}
    </div>
  )
}
