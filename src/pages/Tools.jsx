import { ExternalLink } from 'lucide-react'

const tools = [
  {
    name: 'Nmap',
    category: '端口扫描',
    description: '网络探测和安全审计工具，支持端口扫描、服务识别、OS探测。',
    url: 'https://nmap.org/',
    usage: 'nmap -sV -sC target.com'
  },
  {
    name: 'BurpSuite',
    category: 'Web抓包',
    description: 'Web应用安全测试平台，集成代理、扫描器、入侵者等模块。',
    url: 'https://portswigger.net/burp',
    usage: '配置浏览器代理 127.0.0.1:8080'
  },
  {
    name: 'SQLmap',
    category: 'SQL注入',
    description: '自动化SQL注入检测和利用工具。',
    url: 'https://sqlmap.org/',
    usage: 'sqlmap -u "http://target/?id=1" --dbs'
  },
  {
    name: 'Nuclei',
    category: '漏洞扫描',
    description: '基于模板的快速漏洞扫描器。',
    url: 'https://nuclei.projectdiscovery.io/',
    usage: 'nuclei -u http://target.com -t cves/'
  },
  {
    name: 'CobaltStrike',
    category: '红队C2',
    description: '商业级渗透测试和红队操作平台。',
    url: 'https://www.cobaltstrike.com/',
    usage: '团队服务器 + 客户端连接'
  },
  {
    name: 'Wireshark',
    category: '流量分析',
    description: '网络协议分析器，支持深度包检测。',
    url: 'https://www.wireshark.org/',
    usage: '选择网卡 → 开始捕获 → 过滤规则'
  },
  {
    name: 'Fscan',
    category: '内网扫描',
    description: '快速内网扫描工具，支持端口探测、漏洞检测。',
    url: 'https://github.com/shadow1ng/fscan',
    usage: 'fscan -h 192.168.1.0/24'
  },
  {
    name: 'Subfinder',
    category: '信息收集',
    description: '子域名枚举工具，被动收集。',
    url: 'https://github.com/projectdiscovery/subfinder',
    usage: 'subfinder -d target.com -o subdomains.txt'
  },
  {
    name: 'Dirsearch',
    category: '目录扫描',
    description: 'Web目录和文件暴力枚举工具。',
    url: 'https://github.com/maurosoria/dirsearch',
    usage: 'dirsearch -u http://target.com/'
  },
]

export default function Tools() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>工具手册</h1>
      <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>渗透测试和安全研究常用工具</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map(tool => (
          <div
            key={tool.name}
            className="p-5 rounded-xl transition hover:shadow-lg"
            style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{tool.name}</h3>
              <span className="px-2 py-0.5 rounded text-xs" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                {tool.category}
              </span>
            </div>
            <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>{tool.description}</p>
            <div className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
              <code className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--bg-primary)' }}>
                {tool.usage}
              </code>
            </div>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 text-sm hover:opacity-70 transition"
              style={{ color: 'var(--accent)' }}
            >
              <ExternalLink size={12} />
              官方网站
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
