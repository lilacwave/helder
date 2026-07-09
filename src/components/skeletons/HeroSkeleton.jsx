import { memo } from 'react'
import SkeletonBlock from './SkeletonBlock'

const HeroSkeleton = memo(function HeroSkeleton() {
  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — text content */}
        <div className="space-y-8">
          {/* Badge */}
          <SkeletonBlock className="h-8 w-56 rounded-full" />

          {/* Heading lines */}
          <div className="space-y-3">
            <SkeletonBlock className="h-10 w-full sm:h-12 lg:h-14" />
            <SkeletonBlock className="h-10 w-3/4 sm:h-12 lg:h-14" />
          </div>

          {/* Paragraph lines */}
          <div className="space-y-2">
            <SkeletonBlock className="h-4 w-full lg:h-5" />
            <SkeletonBlock className="h-4 w-5/6 lg:h-5" />
            <SkeletonBlock className="h-4 w-4/6 lg:h-5" />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <SkeletonBlock className="h-12 w-44 rounded-full" />
            <SkeletonBlock className="h-12 w-40 rounded-full" />
          </div>
        </div>

        {/* Right — image */}
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:ml-auto lg:max-w-md">
          <SkeletonBlock className="h-[75vh] w-full rounded-3xl" />

          {/* Floating stat cards */}
          <div className="absolute -bottom-4 left-4 flex gap-3 sm:-bottom-6 sm:left-6">
            <SkeletonBlock className="h-[68px] w-[100px] rounded-2xl" />
            <SkeletonBlock className="h-[68px] w-[88px] rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
})

export default HeroSkeleton
