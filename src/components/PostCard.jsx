import { Link } from 'react-router-dom'
import { Calendar, Tag } from 'lucide-react'
import { getCategoryById } from '../utils/posts'

export default function PostCard({ post }) {
  const catInfo = getCategoryById(post.subcategory || post.category)

  return (
    <article className="p-6 rounded-xl transition hover:shadow-lg" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
      <Link to={`/post/${post.slug}`}>
        <h2 className="text-xl font-bold mb-2 hover:opacity-80 transition" style={{ color: 'var(--text-primary)' }}>
          {post.title}
        </h2>
      </Link>
      <p className="mb-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{post.summary}</p>
      <div className="flex items-center justify-between text-sm" style={{ color: 'var(--text-secondary)' }}>
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {post.date}
        </span>
        <div className="flex items-center gap-2">
          {catInfo && (
            <span className="px-2 py-0.5 rounded text-xs" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
              {catInfo.parent?.name || catInfo.name || post.category}
            </span>
          )}
          {post.tags.slice(0, 2).map(tag => (
            <Link
              key={tag}
              to={`/tags/${tag}`}
              className="flex items-center gap-1 px-2 py-0.5 rounded text-xs hover:opacity-80 transition"
              style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border)' }}
            >
              <Tag size={10} />
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}
