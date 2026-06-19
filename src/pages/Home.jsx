import { Link } from 'react-router-dom'
import { getAllPosts, categories } from '../utils/posts'
import PostCard from '../components/PostCard'

export default function Home() {
  const posts = getAllPosts()
  const latestPosts = posts.slice(0, 5)

  return (
    <div>
      <section className="text-center py-12 mb-8 rounded-2xl" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          SecNest's Blog
        </h1>
        <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
          网络安全知识库 · 攻防对抗 · 工具手册
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/knowledge"
            className="px-6 py-2 rounded-lg font-medium transition hover:opacity-80"
            style={{ backgroundColor: 'var(--accent)', color: 'white' }}
          >
            进入知识库
          </Link>
          <Link
            to="/tools"
            className="px-6 py-2 rounded-lg font-medium transition hover:opacity-80"
            style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
          >
            工具手册
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>分类概览</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/knowledge/${cat.children[0]?.id}`}
              className="p-4 rounded-xl text-center transition hover:shadow-lg"
              style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <div className="font-medium" style={{ color: 'var(--text-primary)' }}>{cat.name}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>{cat.children.length} 篇</div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>最新文章</h2>
        <div className="flex flex-col gap-4">
          {latestPosts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}
