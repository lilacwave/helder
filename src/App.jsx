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

export default function App() {
  return (
    <div className="min-h-svh bg-[#0a0a0f] text-white">
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
    </div>
  )
}
