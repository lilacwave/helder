import { memo } from 'react'
import SkeletonBlock from './SkeletonBlock'

const ResultsSkeleton = memo(function ResultsSkeleton() {
  return (
    <section
      aria-hidden="true"
      className="section-border px-5 py-20 lg:px-8 lg:py-28 bg-[#111118]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mx-auto mb-12 max-w-2xl text-center space-y-3">
          <SkeletonBlock className="mx-auto h-4 w-24" />
          <SkeletonBlock className="mx-auto h-10 w-full sm:h-12" />
          <SkeletonBlock className="mx-auto h-10 w-3/4 sm:h-12" />
        </div>

        {/* 3 cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-[#1e1e2a] bg-[#111118]"
            >
              {/* Image placeholder */}
              <SkeletonBlock className="aspect-[4/5] w-full rounded-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default ResultsSkeleton
