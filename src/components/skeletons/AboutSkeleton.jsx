import { memo } from 'react'
import SkeletonBlock from './SkeletonBlock'

const AboutSkeleton = memo(function AboutSkeleton() {
  return (
    <section aria-hidden="true" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left — text content */}
        <div className="space-y-6">
          {/* Label */}
          <SkeletonBlock className="h-4 w-16" />

          {/* Heading */}
          <div className="space-y-2">
            <SkeletonBlock className="h-10 w-48 lg:h-12" />
            <SkeletonBlock className="h-10 w-56 lg:h-12" />
          </div>

          {/* Paragraph 1 */}
          <div className="space-y-2">
            <SkeletonBlock className="h-4 w-full lg:h-5" />
            <SkeletonBlock className="h-4 w-5/6 lg:h-5" />
            <SkeletonBlock className="h-4 w-4/5 lg:h-5" />
            <SkeletonBlock className="h-4 w-3/4 lg:h-5" />
          </div>

          {/* Paragraph 2 */}
          <div className="space-y-2">
            <SkeletonBlock className="h-4 w-full" />
            <SkeletonBlock className="h-4 w-2/3" />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3">
            <SkeletonBlock className="h-7 w-16 rounded-full" />
            <SkeletonBlock className="h-7 w-20 rounded-full" />
            <SkeletonBlock className="h-7 w-18 rounded-full" />
          </div>
        </div>

        {/* Right — 2x2 credential cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#1e1e2a] bg-[#111118] p-6"
            >
              {/* Icon */}
              <SkeletonBlock className="mb-4 h-7 w-7 rounded-md" />
              {/* Title */}
              <SkeletonBlock className="mb-2 h-5 w-3/4" />
              {/* Description */}
              <div className="space-y-1.5">
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

export default AboutSkeleton
