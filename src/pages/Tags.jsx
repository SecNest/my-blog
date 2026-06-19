import { getAllTags } from '../utils/posts'
import TagList from '../components/TagList'

export default function Tags() {
  const tags = getAllTags()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>标签</h1>
      <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>按标签浏览文章</p>
      <TagList tags={tags} />
    </div>
  )
}
