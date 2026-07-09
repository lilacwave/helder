import { memo } from 'react'
import HeroSkeleton from './HeroSkeleton'
import ResultsSkeleton from './ResultsSkeleton'
import AboutSkeleton from './AboutSkeleton'
import MethodologySkeleton from './MethodologySkeleton'
import PerformanceLabSkeleton from './PerformanceLabSkeleton'
import WhyTrainSkeleton from './WhyTrainSkeleton'
import SpecializedServiceSkeleton from './SpecializedServiceSkeleton'
import SupportSkeleton from './SupportSkeleton'
import HoursAndCTASkeleton from './HoursAndCTASkeleton'
import FooterSkeleton from './FooterSkeleton'

const PageSkeleton = memo(function PageSkeleton() {
  return (
    <div
      className="min-h-svh bg-[#0a0a0f] text-white"
      aria-hidden="true"
      role="presentation"
    >
      {/* Navbar skeleton */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1e1e2a]/80 bg-[#0a0a0f]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="skeleton-shimmer h-9 w-28 rounded-md sm:h-10" />
          <div className="hidden items-center gap-8 lg:flex">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="skeleton-shimmer h-4 w-16 rounded" />
            ))}
          </div>
          <div className="skeleton-shimmer hidden h-10 w-36 rounded-full lg:block" />
        </nav>
      </header>

      <main>
        <HeroSkeleton />
        <ResultsSkeleton />
        <AboutSkeleton />
        <MethodologySkeleton />
        <PerformanceLabSkeleton />
        <WhyTrainSkeleton />
        <SpecializedServiceSkeleton />
        <SupportSkeleton />
        <HoursAndCTASkeleton />
      </main>

      <FooterSkeleton />
    </div>
  )
})

export default PageSkeleton
