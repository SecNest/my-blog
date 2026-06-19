import { ExternalLink, Shield, Code, Terminal } from 'lucide-react'

export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>关于我</h1>

      <div className="prose max-w-3xl">
        <p>
          你好！我是一名网络安全从业者，专注于渗透测试和红队攻防。
          这个博客是我整理安全知识、记录学习过程的地方。
        </p>

        <h2>技术方向</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose my-6">
          <div className="p-4 rounded-xl text-center" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <Shield size={32} className="mx-auto mb-2" style={{ color: 'var(--accent)' }} />
            <div className="font-medium" style={{ color: 'var(--text-primary)' }}>渗透测试</div>
            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Web / 内网 / 移动端</div>
          </div>
          <div className="p-4 rounded-xl text-center" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <Terminal size={32} className="mx-auto mb-2" style={{ color: 'var(--accent)' }} />
            <div className="font-medium" style={{ color: 'var(--text-primary)' }}>红队攻防</div>
            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>C2 / 横向移动 / 提权</div>
          </div>
          <div className="p-4 rounded-xl text-center" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <Code size={32} className="mx-auto mb-2" style={{ color: 'var(--accent)' }} />
            <div className="font-medium" style={{ color: 'var(--text-primary)' }}>安全开发</div>
            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>工具开发 / 自动化</div>
          </div>
        </div>

        <h2>关于本站</h2>
        <p>
          本站使用 React + Vite + Tailwind CSS 构建，部署在 GitHub Pages。
          内容涵盖网络安全基础知识、渗透测试工具、攻防对抗技术等。
        </p>

        <h2>联系我</h2>
        <div className="flex gap-4 not-prose">
          <a href="https://github.com/openxuhao" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:opacity-80 transition" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <ExternalLink size={18} />
            GitHub
          </a>
          <a href="mailto:987435269@qq.com" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:opacity-80 transition" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <ExternalLink size={18} />
            Email
          </a>
        </div>
      </div>
    </div>
  )
}
