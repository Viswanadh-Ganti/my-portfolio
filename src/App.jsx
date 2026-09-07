import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Project'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Resume />
      </main>
    </div>
  )
}

export default App
