import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Philosophy from './components/Philosophy.jsx'
import Services from './components/Services.jsx'
import Work from './components/Work.jsx'
import Skills from './components/Skills.jsx'
import Process from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Services />
        <Work />
        <Skills />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
