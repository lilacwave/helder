import { useState, useEffect, useCallback } from 'react'
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
import PageSkeleton from './components/skeletons/PageSkeleton'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showSkeleton, setShowSkeleton] = useState(true)

  const handleLoad = useCallback(() => {
    // Start fade-out
    setIsLoading(false)
    // Remove skeleton from DOM after fade transition completes
    const timer = setTimeout(() => setShowSkeleton(false), 600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const minDelay = new Promise((r) => setTimeout(r, 1500))
    const pageLoad = new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve()
        return
      }
      window.addEventListener('load', resolve, { once: true })
    })

    // Wait for BOTH: minimum delay AND page fully loaded
    Promise.all([minDelay, pageLoad]).then(handleLoad)

    // Fallback: max 6s loading time
    const fallback = setTimeout(handleLoad, 6000)

    return () => clearTimeout(fallback)
  }, [handleLoad])

  return (
    <>
      {/* Skeleton — visible while loading */}
      {showSkeleton && (
        <div
          className={isLoading ? 'skeleton-fade-enter' : 'skeleton-fade-exit'}
          aria-hidden="true"
        >
          <PageSkeleton />
        </div>
      )}

      {/* Real content — always rendered for SEO, revealed after load */}
      <div
        className="min-h-svh bg-[#0a0a0f] text-white"
        aria-busy={isLoading}
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-in',
          position: isLoading ? 'absolute' : 'relative',
          visibility: isLoading ? 'hidden' : 'visible',
          width: '100%',
        }}
      >
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
    </>
  )
}
