import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/ThemeProvider'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Knowledge from './pages/Knowledge'
import Category from './pages/Category'
import Post from './pages/Post'
import Tools from './pages/Tools'
import Tags from './pages/Tags'
import About from './pages/About'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <Header />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/knowledge/:subcategoryId" element={<Category />} />
            <Route path="/post/:slug" element={<Post />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/tags/:tag" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
