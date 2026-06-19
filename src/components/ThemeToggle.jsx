import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { dark, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      className="p-1.5 rounded-lg hover:opacity-70 transition"
      title={dark ? '切换到浅色模式' : '切换到暗色模式'}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
