import { memo } from 'react'
import SkeletonBlock from './SkeletonBlock'

const SupportSkeleton = memo(function SupportSkeleton() {
  return (
    <section aria-hidden="true" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-12 text-center space-y-3">
          <SkeletonBlock className="mx-auto h-4 w-20" />
          <SkeletonBlock className="mx-auto h-10 w-96 max-w-full sm:h-12" />
        </div>

        {/* 4x2 cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#1e1e2a] bg-[#111118] p-5"
            >
              {/* Icon */}
              <SkeletonBlock className="mb-3 h-5 w-5 rounded-md" />
              {/* Title */}
              <SkeletonBlock className="mb-1 h-4 w-3/4" />
              {/* Description */}
              <SkeletonBlock className="h-3 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default SupportSkeleton
