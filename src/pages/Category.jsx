import { useParams } from 'react-router-dom'
import { getPostsBySubcategory, getCategoryById } from '../utils/posts'
import PostCard from '../components/PostCard'
import Sidebar from '../components/Sidebar'

export default function Category() {
  const { subcategoryId } = useParams()
  const posts = getPostsBySubcategory(subcategoryId)
  const catInfo = getCategoryById(subcategoryId)

  return (
    <div className="flex gap-8">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          {catInfo?.parent?.icon} {catInfo?.name || subcategoryId}
        </h1>
        {catInfo?.parent && (
          <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
            {catInfo.parent.name}
          </p>
        )}

        {posts.length > 0 ? (
          <div className="flex flex-col gap-4">
            {posts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-xl" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>该分类暂无文章</p>
            <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>内容持续更新中...</p>
          </div>
        )}
      </div>
    </div>
  )
}
