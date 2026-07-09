import { memo } from 'react'
import SkeletonBlock from './SkeletonBlock'

const WhyTrainSkeleton = memo(function WhyTrainSkeleton() {
  return (
    <section aria-hidden="true" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section header — left aligned */}
        <div className="mb-12 max-w-2xl space-y-3">
          <SkeletonBlock className="h-4 w-28" />
          <SkeletonBlock className="h-9 w-72 max-w-full sm:h-10" />
        </div>

        {/* 3x2 cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex gap-4 rounded-2xl border border-[#1e1e2a] bg-[#111118] p-6"
            >
              {/* Icon */}
              <SkeletonBlock className="h-12 w-12 shrink-0 rounded-xl" />
              <div className="flex-1 space-y-2">
                {/* Title */}
                <SkeletonBlock className="h-5 w-3/4" />
                {/* Description */}
                <SkeletonBlock className="h-3.5 w-full" />
                <SkeletonBlock className="h-3.5 w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default WhyTrainSkeleton
