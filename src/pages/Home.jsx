import { useParams } from 'react-router-dom'
import { getAllPosts, getPostsByTag } from '../utils/posts'
import PostCard from '../components/PostCard'

export default function Home() {
  const { tag } = useParams()
  const posts = tag ? getPostsByTag(tag) : getAllPosts()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
        {tag ? `#${tag}` : '最新文章'}
      </h1>
      <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
        {tag ? `标签为 "${tag}" 的文章` : '欢迎来到我的博客'}
      </p>
      <div className="flex flex-col gap-4">
        {posts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
