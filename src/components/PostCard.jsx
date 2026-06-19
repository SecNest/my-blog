import { Link } from 'react-router-dom'
import { Calendar, Tag } from 'lucide-react'

export default function PostCard({ post }) {
  return (
    <article className="p-6 rounded-xl transition hover:shadow-lg" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
      <Link to={`/post/${post.slug}`}>
        <h2 className="text-xl font-bold mb-2 hover:opacity-80 transition" style={{ color: 'var(--text-primary)' }}>
          {post.title}
        </h2>
      </Link>
      <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>{post.summary}</p>
      <div className="flex items-center justify-between text-sm" style={{ color: 'var(--text-secondary)' }}>
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {post.date}
        </span>
        <div className="flex items-center gap-2">
          <Tag size={14} />
          {post.tags.map(tag => (
            <Link
              key={tag}
              to={`/tags/${tag}`}
              className="px-2 py-0.5 rounded text-xs hover:opacity-80 transition"
              style={{ backgroundColor: 'var(--accent)', color: 'white' }}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}
