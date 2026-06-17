import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import SportProgram from './components/SportProgram'
import PatriotProgram from './components/PatriotProgram'
import CareerProgram from './components/CareerProgram'
import HealthProgram from './components/HealthProgram'
import EducationProgram from './components/EducationProgram'
import StageProgram from './components/StageProgram'
import InteractiveProgram from './components/InteractiveProgram'
import PartnerPlatformsProgram from './components/PartnerPlatformsProgram'
import Speakers from './components/Speakers'
import Partners from './components/Partners'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ProgramImagesPreloader from './components/ProgramImagesPreloader'

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
      <ProgramImagesPreloader />
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <SportProgram />
      <PatriotProgram />
      <CareerProgram />
      <HealthProgram />
      <EducationProgram />
      <StageProgram />
      <InteractiveProgram />
      <PartnerPlatformsProgram />
      <Speakers />
      <Partners />
      <FAQ />
      <Footer />
    </div>
  )
}
