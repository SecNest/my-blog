export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm" style={{ borderTop: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
      <p>&copy; {new Date().getFullYear()} My Blog. Built with React + Vite.</p>
    </footer>
  )
}
