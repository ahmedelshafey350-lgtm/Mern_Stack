import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Loader from './components/Loader'
import NotFound from './components/NotFound'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import { ContactPage, EducationPage, ExperiencePage, SkillsPage } from './pages/Simple'
import useTheme from './hooks/useTheme'
import { nav } from './data/site'

const titles = Object.fromEntries(nav.map(([to, l]) => [to, to === '/' ? 'Ahmed Elshafey | MERN Stack Developer & Mechatronics Engineering Student' : `${l} | Ahmed Elshafey`]))

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, toggleTheme] = useTheme()
  const location = useLocation()
  useEffect(() => { const t = setTimeout(() => setLoading(false), 900); return () => clearTimeout(t) }, [])
  useEffect(() => {
    window.scrollTo(0, 0) // scroll restoration on navigation
    document.title = titles[location.pathname] || 'Ahmed Elshafey'
  }, [location.pathname])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <a href="#main" className="sr-only z-[60] rounded bg-accent px-3 py-2 text-on-accent focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Skip to content</a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main" className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
