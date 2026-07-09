import { memo } from 'react'
import SkeletonBlock from './SkeletonBlock'

const PerformanceLabSkeleton = memo(function PerformanceLabSkeleton() {
  return (
    <section aria-hidden="true" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-12 text-center space-y-3">
          <SkeletonBlock className="mx-auto h-4 w-28" />
          <SkeletonBlock className="mx-auto h-10 w-80 max-w-full sm:h-12" />
        </div>

        {/* 4 cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#1e1e2a] bg-[#111118] p-6 text-center"
            >
              {/* Icon */}
              <SkeletonBlock className="mx-auto mb-4 h-14 w-14 rounded-2xl" />
              {/* Title */}
              <SkeletonBlock className="mx-auto mb-2 h-5 w-3/4" />
              {/* Description */}
              <div className="space-y-1.5">
                <SkeletonBlock className="mx-auto h-3.5 w-full" />
                <SkeletonBlock className="mx-auto h-3.5 w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default PerformanceLabSkeleton
