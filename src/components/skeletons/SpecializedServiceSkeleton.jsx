import { memo } from 'react'
import SkeletonBlock from './SkeletonBlock'

const SpecializedServiceSkeleton = memo(function SpecializedServiceSkeleton() {
  return (
    <section aria-hidden="true" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left — image */}
        <SkeletonBlock className="aspect-square w-full rounded-2xl" />

        {/* Right — text + numbered list */}
        <div>
          {/* Label */}
          <SkeletonBlock className="mb-3 h-4 w-40" />
          {/* Heading */}
          <div className="mb-6 space-y-2">
            <SkeletonBlock className="h-9 w-full sm:h-10" />
            <SkeletonBlock className="h-9 w-3/4 sm:h-10" />
          </div>
          {/* Paragraph */}
          <div className="mb-8 space-y-2">
            <SkeletonBlock className="h-4 w-full" />
            <SkeletonBlock className="h-4 w-5/6" />
            <SkeletonBlock className="h-4 w-2/3" />
          </div>

          {/* Numbered list */}
          <div className="space-y-4">
            {[0.95, 0.85, 0.9, 0.8, 0.75, 0.7].map((ratio, i) => (
              <div key={i} className="flex items-start gap-4">
                <SkeletonBlock className="h-8 w-8 shrink-0 rounded-full" />
                <SkeletonBlock
                  className="mt-1 h-4"
                  style={{ width: `${ratio * 100}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default SpecializedServiceSkeleton
