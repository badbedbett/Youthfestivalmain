import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import SportProgram from './components/SportProgram'
import PatriotProgram from './components/PatriotProgram'
import CareerProgram from './components/CareerProgram'
import Speakers from './components/Speakers'
import Partners from './components/Partners'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

// MARKER-MAKE-KIT-INVOKED
export default function App() {
  return (
    <div
      style={{
        background: '#FFFFFF',
        minHeight: '100vh',
        overflowX: 'hidden',
        fontFamily: '"Inter", sans-serif',
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <SportProgram />
      <PatriotProgram />
      <CareerProgram />
      <Speakers />
      <Partners />
      <FAQ />
      <Footer />
    </div>
  )
}
