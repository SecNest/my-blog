import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'
import { getPostBySlug } from '../utils/posts'
import Comments from '../components/Comments'

export default function Post() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p style={{ color: 'var(--text-secondary)' }}>文章不存在</p>
        <Link to="/" className="inline-block mt-4" style={{ color: 'var(--accent)' }}>
          返回首页
        </Link>
      </div>
    )
  }

  return (
    <article>
      <Link to="/" className="inline-flex items-center gap-1 mb-6 hover:opacity-70 transition" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        返回
      </Link>

      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Tag size={14} />
            {post.tags.map(tag => (
              <Link key={tag} to={`/tags/${tag}`} className="hover:opacity-80 transition" style={{ color: 'var(--accent)' }}>
                {tag}
              </Link>
            )).reduce((prev, curr) => [prev, ', ', curr])}
          </span>
        </div>
      </header>

      <div className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      <Comments slug={slug} />
    </article>
  )
}
