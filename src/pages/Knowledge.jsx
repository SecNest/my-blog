import { Link } from 'react-router-dom'
import { categories } from '../utils/posts'
import Sidebar from '../components/Sidebar'

export default function Knowledge() {
  return (
    <div className="flex gap-8">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>知识库</h1>
        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>网络安全攻防知识体系</p>

        <div className="flex flex-col gap-8">
          {categories.map(cat => (
            <section key={cat.id}>
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <span>{cat.icon}</span>
                {cat.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.children.map(child => (
                  <Link
                    key={child.id}
                    to={`/knowledge/${child.id}`}
                    className="p-4 rounded-lg transition hover:shadow-md"
                    style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
                  >
                    <div className="font-medium" style={{ color: 'var(--text-primary)' }}>{child.name}</div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
