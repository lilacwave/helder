import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Results from './components/Results'
import About from './components/About'
import Methodology from './components/Methodology'
import PerformanceLab from './components/PerformanceLab'
import WhyTrain from './components/WhyTrain'
import SpecializedService from './components/SpecializedService'
import Support from './components/Support'
import HoursAndCTA from './components/HoursAndCTA'
import Footer from './components/Footer'
import SEO from './components/SEO'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-svh bg-[#0a0a0f] text-white">
      <SEO
        title="Treino personalizado para performance, força e longevidade"
        description="Descubra um treino personalizado e orientado por ciência para melhorar performance, força, mobilidade e qualidade de vida com acompanhamento especializado."
      />
      <Navbar />
      <main>
        <Hero />
        <Results />
        <About />
        <Methodology />
        <PerformanceLab />
        <WhyTrain />
        <SpecializedService />
        <Support />
        <HoursAndCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
