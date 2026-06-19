const posts = [
  {
    slug: 'hello-world',
    title: 'Hello World - 我的第一篇博客',
    date: '2026-06-20',
    tags: ['博客', '入门'],
    summary: '这是我的第一篇博客文章，记录博客搭建的过程和心得。',
    content: `
## 欢迎来到我的博客

这是我使用 **React + Vite + Tailwind CSS** 搭建的个人博客。

### 技术栈

- **React 19** - 前端框架
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **React Router** - 路由管理
- **React Markdown** - Markdown 渲染

### 功能特性

1. ✅ 文章列表与详情页
2. ✅ Markdown 支持
3. ✅ 标签分类系统
4. ✅ 搜索功能
5. ✅ 暗色模式
6. ✅ 评论系统

### 代码示例

\`\`\`javascript
function HelloWorld() {
  return <h1>Hello, World!</h1>
}
\`\`\`

> 博客是记录学习和思考的好地方，希望这里能成为我的知识沉淀之地。
    `
  },
  {
    slug: 'react-hooks-guide',
    title: 'React Hooks 完全指南',
    date: '2026-06-18',
    tags: ['React', '前端', '教程'],
    summary: '深入理解 React Hooks 的原理和最佳实践。',
    content: `
## 什么是 Hooks

Hooks 是 React 16.8 引入的新特性，让函数组件也能使用状态和其他 React 特性。

### useState

\`\`\`javascript
const [count, setCount] = useState(0)
\`\`\`

### useEffect

\`\`\`javascript
useEffect(() => {
  document.title = \`Count: \${count}\`
}, [count])
\`\`\`

### 自定义 Hook

\`\`\`javascript
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  return { count, increment, decrement }
}
\`\`\`

### 最佳实践

- 只在最顶层使用 Hooks
- 只在 React 函数中调用 Hooks
- 自定义 Hook 以 \`use\` 开头
    `
  },
  {
    slug: 'tailwind-css-tips',
    title: 'Tailwind CSS 实用技巧',
    date: '2026-06-15',
    tags: ['CSS', '前端', '教程'],
    summary: '分享一些 Tailwind CSS 的实用技巧和常见模式。',
    content: `
## 为什么选择 Tailwind

Tailwind CSS 是一个实用优先的 CSS 框架，直接在 HTML 中编写样式。

### 响应式设计

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- 响应式网格布局 -->
</div>
\`\`\`

### 暗色模式

\`\`\`html
<div class="bg-white dark:bg-gray-900 text-black dark:text-white">
  自动适配暗色模式
</div>
\`\`\`

### 常用组合

\`\`\`css
/* 卡片组件 */
.card {
  @apply bg-white rounded-lg shadow-md p-6;
}

/* 按钮组件 */
.btn-primary {
  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition;
}
\`\`\`

### 性能优化

Tailwind 只会生成你实际使用的 CSS，产物非常小。
    `
  },
  {
    slug: 'markdown-features',
    title: 'Markdown 语法大全',
    date: '2026-06-10',
    tags: ['Markdown', '教程'],
    summary: 'Markdown 常用语法速查手册。',
    content: `
## 基础语法

### 标题

\`\`\`markdown
# 一级标题
## 二级标题
### 三级标题
\`\`\`

### 强调

- **粗体**
- *斜体*
- ~~删除线~~

### 列表

1. 有序列表
2. 第二项
3. 第三项

- 无序列表
- 第二项

### 链接和图片

\`\`\`markdown
[链接文字](https://example.com)
![图片描述](image-url)
\`\`\`

### 引用

> 这是一段引用文字

### 代码

行内代码：\`code\`

代码块：

\`\`\`python
def hello():
    print("Hello, World!")
\`\`\`

### 表格

| 名称 | 类型 | 描述 |
|------|------|------|
| id | number | 唯一标识 |
| name | string | 名称 |
    `
  }
]

export function getAllPosts() {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug)
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
