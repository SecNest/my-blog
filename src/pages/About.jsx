import { ExternalLink, Mail } from 'lucide-react'

export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>关于我</h1>

      <div className="prose">
        <p>
          你好！欢迎来到我的个人博客。这里是我记录技术学习、思考和生活的地方。
        </p>

        <h2>关于这个博客</h2>
        <p>
          这个博客使用以下技术栈构建：
        </p>
        <ul>
          <li><strong>React 19</strong> - 前端框架</li>
          <li><strong>Vite</strong> - 构建工具</li>
          <li><strong>Tailwind CSS</strong> - 样式框架</li>
          <li><strong>React Router</strong> - 路由管理</li>
          <li><strong>React Markdown</strong> - Markdown 渲染</li>
        </ul>

        <h2>联系我</h2>
        <div className="flex gap-4 not-prose">
          <a href="https://github.com" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:opacity-80 transition" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <ExternalLink size={18} />
            GitHub
          </a>
          <a href="mailto:hello@example.com" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:opacity-80 transition" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <Mail size={18} />
            Email
          </a>
        </div>
      </div>
    </div>
  )
}
