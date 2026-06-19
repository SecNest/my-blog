export const categories = [
  {
    id: 'network',
    name: '计算机网络',
    icon: '🌐',
    children: [
      { id: 'tcp-ip', name: 'TCP/IP 基础' },
      { id: 'http-https', name: 'HTTP/HTTPS 协议' },
      { id: 'dns', name: 'DNS 解析原理' },
      { id: 'wireshark', name: 'Wireshark 抓包' },
    ]
  },
  {
    id: 'linux',
    name: 'Linux 系统',
    icon: '🐧',
    children: [
      { id: 'linux-commands', name: '常用命令速查' },
      { id: 'linux-users', name: '用户与权限管理' },
      { id: 'linux-process', name: '进程与服务管理' },
      { id: 'linux-network', name: '网络配置管理' },
    ]
  },
  {
    id: 'websec',
    name: 'Web 安全',
    icon: '🔒',
    children: [
      { id: 'sqli', name: 'SQL 注入' },
      { id: 'xss', name: 'XSS 跨站脚本' },
      { id: 'upload', name: '文件上传漏洞' },
      { id: 'rce', name: '命令执行漏洞' },
      { id: 'csrf', name: 'CSRF 请求伪造' },
      { id: 'xxe', name: 'XXE 注入' },
    ]
  },
  {
    id: 'attack-defense',
    name: '攻防对抗',
    icon: '⚔️',
    children: [
      { id: 'recon', name: '信息收集' },
      { id: 'privesc', name: '权限提升' },
      { id: 'persistence', name: '权限维持' },
      { id: 'lateral', name: '横向移动' },
      { id: 'anti-forensics', name: '反溯源' },
    ]
  },
  {
    id: 'domain',
    name: '域渗透',
    icon: '🏢',
    children: [
      { id: 'domain-basic', name: '域环境基础' },
      { id: 'domain-recon', name: '域信息收集' },
      { id: 'domain-attack', name: '域控攻击' },
      { id: 'domain-techniques', name: '常见攻击手法' },
    ]
  },
  {
    id: 'ir',
    name: '应急响应',
    icon: '🚨',
    children: [
      { id: 'ir-process', name: '事件处理流程' },
      { id: 'ir-linux', name: 'Linux 应急响应' },
      { id: 'ir-windows', name: 'Windows 应急响应' },
    ]
  },
  {
    id: 'tools',
    name: '工具手册',
    icon: '🛠️',
    children: [
      { id: 'nmap', name: 'Nmap' },
      { id: 'burpsuite', name: 'BurpSuite' },
      { id: 'sqlmap', name: 'SQLmap' },
      { id: 'nuclei', name: 'Nuclei' },
      { id: 'cobaltstrike', name: 'CobaltStrike' },
      { id: 'wireshark-tool', name: 'Wireshark' },
    ]
  },
]

export const posts = [
  // 计算机网络
  {
    slug: 'tcp-ip-basics',
    title: 'TCP/IP 基础',
    date: '2026-06-18',
    category: 'network',
    subcategory: 'tcp-ip',
    tags: ['网络', 'TCP', 'IP', '基础'],
    summary: 'TCP/IP 四层模型、三次握手、四次挥手详解。',
    content: `
## TCP/IP 四层模型

| 层 | 协议 |
|---|---|
| 应用层 | HTTP, FTP, DNS, SMTP |
| 传输层 | TCP, UDP |
| 网络层 | IP, ICMP, ARP |
| 网络接口层 | Ethernet, Wi-Fi |

## 三次握手

1. **SYN** → 客户端发送连接请求
2. **SYN+ACK** → 服务端确认并回复
3. **ACK** → 客户端确认，连接建立

## 四次挥手

1. **FIN** → 主动方请求关闭
2. **ACK** → 被动方确认
3. **FIN** → 被动方请求关闭
4. **ACK** → 主动方确认，连接关闭

## 常见端口

\`\`\`
21 - FTP
22 - SSH
23 - Telnet
25 - SMTP
53 - DNS
80 - HTTP
443 - HTTPS
3306 - MySQL
3389 - RDP
\`\`\`
    `
  },
  {
    slug: 'http-https-protocol',
    title: 'HTTP/HTTPS 协议详解',
    date: '2026-06-15',
    category: 'network',
    subcategory: 'http-https',
    tags: ['网络', 'HTTP', 'HTTPS', '协议'],
    summary: 'HTTP 请求方法、状态码、HTTPS 加密原理。',
    content: `
## HTTP 请求方法

- **GET** - 获取资源
- **POST** - 提交数据
- **PUT** - 更新资源
- **DELETE** - 删除资源
- **OPTIONS** - 查询支持的方法

## 常见状态码

| 状态码 | 含义 |
|--------|------|
| 200 | 成功 |
| 301 | 永久重定向 |
| 302 | 临时重定向 |
| 403 | 禁止访问 |
| 404 | 未找到 |
| 500 | 服务器错误 |

## HTTPS 加密流程

1. 客户端发起 HTTPS 请求
2. 服务端返回证书（公钥）
3. 客户端验证证书合法性
4. 客户端生成随机密钥，用公钥加密发送
5. 服务端用私钥解密得到随机密钥
6. 双方使用随机密钥进行对称加密通信
    `
  },
  // Web 安全
  {
    slug: 'sql-injection',
    title: 'SQL 注入完全指南',
    date: '2026-06-20',
    category: 'websec',
    subcategory: 'sqli',
    tags: ['Web安全', 'SQL注入', '渗透测试'],
    summary: 'SQL 注入原理、分类、检测方法、利用技巧和防御方案。',
    content: `
## 什么是 SQL 注入

SQL 注入是通过在输入参数中插入恶意 SQL 语句，使数据库执行非预期操作的攻击方式。

## 注入分类

### 按注入点分类
- **数字型**：\`WHERE id = 1 AND 1=1\`
- **字符型**：\`WHERE name = 'admin' AND '1'='1'\`
- **搜索型**：\`WHERE name LIKE '%test%' AND '1'='1'\`

### 按技术分类
- **联合查询注入**（UNION）
- **报错注入**（Error-based）
- **布尔盲注**（Boolean-based）
- **时间盲注**（Time-based）
- **堆叠注入**（Stacked Queries）

## 常见检测语句

\`\`\`sql
' OR 1=1 --
' OR '1'='1
" OR "1"="1
' UNION SELECT 1,2,3 --
\`\`\`

## 利用流程

1. 判断注入点
2. 判断字段数
3. 判断回显位置
4. 获取数据库信息
5. 获取表名
6. 获取字段名
7. 获取数据

## SQLmap 使用

\`\`\`bash
# 基本使用
sqlmap -u "http://target/?id=1" --dbs

# POST 注入
sqlmap -u "http://target/login" --data="user=admin&pass=123" --dbs

# 带 Cookie
sqlmap -u "http://target/?id=1" --cookie="session=xxx" --dbs
\`\`\`

## 防御方案

- 使用参数化查询（Prepared Statements）
- 输入验证和过滤
- 最小权限原则
- WAF 防护
    `
  },
  {
    slug: 'xss-attack',
    title: 'XSS 跨站脚本攻击',
    date: '2026-06-12',
    category: 'websec',
    subcategory: 'xss',
    tags: ['Web安全', 'XSS', '前端安全'],
    summary: 'XSS 攻击类型、Payload 构造和防御措施。',
    content: `
## XSS 类型

### 反射型 XSS
恶意脚本通过 URL 参数传入，服务器直接返回。

\`\`\`
http://target/search?q=<script>alert(1)</script>
\`\`\`

### 存储型 XSS
恶意脚本存储在服务器，其他用户访问时触发。

### DOM 型 XSS
前端 JavaScript 直接操作 DOM 导致的漏洞。

## 常见 Payload

\`\`\`javascript
<script>alert(1)</script>
<img src=x onerror=alert(1)>
<svg onload=alert(1)>
javascript:alert(1)
\`\`\`

## 绕过技巧

- 大小写混合：\`<ScRiPt>\`
- 双写：\`<scrscriptipt>\`
- 编码：\`&#60;script&#62;\`
- 事件处理器：\`onmouseover=alert(1)\`

## 防御方案

- HTML 实体编码
- CSP（Content Security Policy）
- HttpOnly Cookie
- 输入验证
    `
  },
  // 攻防对抗
  {
    slug: 'recon-methods',
    title: '信息收集方法论',
    date: '2026-06-10',
    category: 'attack-defense',
    subcategory: 'recon',
    tags: ['渗透测试', '信息收集', ' reconnaissance'],
    summary: '渗透测试信息收集阶段的完整方法和工具。',
    content: `
## 信息收集分类

### 被动信息收集
- **WHOIS 查询**
- **子域名枚举**：subfinder, amass, oneforAll
- **DNS 记录查询**：dig, nslookup
- **搜索引擎**：Google Hacking, Shodan, FOFA
- **证书透明度**：crt.sh

### 主动信息收集
- **端口扫描**：Nmap, Masscan
- **服务识别**
- **操作系统探测**
- **漏洞扫描**：Nuclei, Xray

## 常用工具

\`\`\`bash
# 子域名枚举
subfinder -d target.com -o subdomains.txt

# Nmap 扫描
nmap -sV -sC -p- target.com

# 目录扫描
dirsearch -u http://target.com/

# 漏洞扫描
nuclei -u http://target.com/ -t cves/
\`\`\`

## Google Hacking

\`\`\`
site:target.com filetype:php
intitle:"index of" "parent directory"
inurl:admin login
\`\`\`
    `
  },
  {
    slug: 'windows-privesc',
    title: 'Windows 权限提升',
    date: '2026-06-08',
    category: 'attack-defense',
    subcategory: 'privesc',
    tags: ['渗透测试', '权限提升', 'Windows'],
    summary: 'Windows 环境下的常见提权方法和工具。',
    content: `
## 提权方法

### 1. 系统漏洞提权
\`\`\`powershell
# 查看系统补丁
systeminfo | findstr KB

# 使用 watson/WinPEAS 检查可利用漏洞
\`\`\`

### 2. 服务配置提权
\`\`\`powershell
# 查找可写路径的服务
sc qc <service_name>
icacls "C:\\path\\to\\service.exe"
\`\`\`

### 3. 计划任务提权
\`\`\`powershell
# 列出计划任务
schtasks /query /fo LIST /v

# 查找可修改的计划任务
\`\`\`

### 4. AlwaysInstallElevated
\`\`\`powershell
# 检查注册表
reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated
\`\`\`

### 5. Token 模拟
\`\`\`powershell
# potato 系列
JuicyPotato.exe -l 1337 -p cmd.exe -a "/c whoami" -t *
\`\`\`

## 工具
- WinPEAS
- PowerUp
- SharpUp
- Seatbelt
    `
  },
  // 工具手册
  {
    slug: 'nmap-guide',
    title: 'Nmap 使用指南',
    date: '2026-06-05',
    category: 'tools',
    subcategory: 'nmap',
    tags: ['工具', 'Nmap', '扫描'],
    summary: 'Nmap 端口扫描工具的完整使用指南。',
    content: `
## 基本用法

\`\`\`bash
# 快速扫描
nmap target.com

# 全端口扫描
nmap -p- target.com

# 服务版本检测
nmap -sV target.com

# 操作系统探测
nmap -O target.com

# 使用脚本
nmap --script vuln target.com
\`\`\`

## 常用参数

| 参数 | 说明 |
|------|------|
| -sS | TCP SYN 扫描 |
| -sT | TCP 连接扫描 |
| -sU | UDP 扫描 |
| -sV | 版本检测 |
| -O | 操作系统探测 |
| -A | 全面扫描 |
| -p | 指定端口 |
| -T4 | 速度模板 |
| --script | 使用脚本 |

## 输出格式

\`\`\`bash
nmap -oN output.txt target.com
nmap -oX output.xml target.com
nmap -oG output.gnmap target.com
\`\`\`
    `
  },
  {
    slug: 'burpsuite-guide',
    title: 'BurpSuite 使用指南',
    date: '2026-06-01',
    category: 'tools',
    subcategory: 'burpsuite',
    tags: ['工具', 'BurpSuite', '抓包'],
    summary: 'BurpSuite 抓包工具的核心模块和使用技巧。',
    content: `
## 核心模块

### Proxy（代理）
- 拦截 HTTP/HTTPS 请求
- 修改请求/响应内容
- 历史记录查看

### Intruder（入侵者）
- 自动化参数爆破
- 支持多种攻击模式：
  - Sniper：逐个参数
  - Battering ram：相同值
  - Pitchfork：多组对应值
  - Cluster bomb：全组合

### Repeater（重放器）
- 手动修改并重发请求
- 测试漏洞 Payload

### Decoder（解码器）
- URL/Base64/Hex 等编码解码

## 常用技巧

1. **抓包改包**：Proxy → Intercept
2. **爆破密码**：Intruder → Positions/Payloads
3. **测试漏洞**：Repeater → 修改参数
4. **绕过 WAF**：修改 Headers、编码 Payload
    `
  },
  // 应急响应
  {
    slug: 'ir-process',
    title: '应急响应事件处理流程',
    date: '2026-05-28',
    category: 'ir',
    subcategory: 'ir-process',
    tags: ['应急响应', '安全运营', '事件处理'],
    summary: '安全事件应急响应的标准处理流程。',
    content: `
## 应急响应流程

### 1. 准备阶段
- 建立应急响应团队
- 准备工具和环境
- 制定响应预案

### 2. 检测阶段
- 确认安全事件
- 评估影响范围
- 事件分级分类

### 3. 抑制阶段
- 隔离受影响系统
- 阻断攻击路径
- 保存证据

### 4. 根除阶段
- 分析攻击手法
- 清除恶意程序
- 修复漏洞

### 5. 恢复阶段
- 恢复系统服务
- 验证系统安全
- 监控异常行为

### 6. 总结阶段
- 编写事件报告
- 复盘改进措施
- 更新安全策略

## 常用工具

- **流量分析**：Wireshark, tcpdump
- **日志分析**：ELK, Splunk
- **恶意文件**：VirusTotal, 微步在线
- **系统排查**：Autoruns, Process Explorer
    `
  },
  // 域渗透
  {
    slug: 'domain-environment',
    title: '域环境基础知识',
    date: '2026-05-25',
    category: 'domain',
    subcategory: 'domain-basic',
    tags: ['域渗透', 'Active Directory', 'Windows'],
    summary: 'Windows 域环境的基本概念和架构。',
    content: `
## 域的基本概念

### 什么是域
域是 Windows 网络中共享统一目录数据库的计算机集合。

### 域控制器（DC）
- 存储 Active Directory 数据库
- 处理身份验证
- 管理域内资源

### 域内常见组
- **Domain Admins** - 域管理员
- **Enterprise Admins** - 企业管理员
- **Domain Users** - 域用户
- **Domain Controllers** - 域控制器

## 常用协议

| 协议 | 用途 |
|------|------|
| LDAP | 目录访问 |
| Kerberos | 身份认证 |
| NTLM | 身份认证 |
| SMB | 文件共享 |
| RPC | 远程调用 |

## 域内信息收集

\`\`\`powershell
# 查看当前域
net config workstation

# 查看域用户
net user /domain

# 查看域组
net group /domain

# 查看域控
nltest /dclist:domain.com

# DNS 记录
nslookup -type=SRV _ldap._tcp.dc._msdcs.domain.com
\`\`\`
    `
  },
]

export function getAllPosts() {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug)
}

export function getPostsByCategory(categoryId) {
  return posts.filter(p => p.category === categoryId)
}

export function getPostsBySubcategory(subcategoryId) {
  return posts.filter(p => p.subcategory === subcategoryId)
}

export function getAllTags() {
  const tags = new Set()
  posts.forEach(p => p.tags.forEach(t => tags.add(t)))
  return Array.from(tags)
}

export function getPostsByTag(tag) {
  return posts.filter(p => p.tags.includes(tag))
}

export function searchPosts(query) {
  const lower = query.toLowerCase()
  return posts.filter(p =>
    p.title.toLowerCase().includes(lower) ||
    p.summary.toLowerCase().includes(lower) ||
    p.content.toLowerCase().includes(lower)
  )
}

export function getCategoryById(id) {
  for (const cat of categories) {
    if (cat.id === id) return cat
    const sub = cat.children?.find(c => c.id === id)
    if (sub) return { ...sub, parent: cat }
  }
  return null
}
