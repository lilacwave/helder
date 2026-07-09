import { memo } from 'react'
import SkeletonBlock from './SkeletonBlock'

const HoursAndCTASkeleton = memo(function HoursAndCTASkeleton() {
  return (
    <section aria-hidden="true" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Hours */}
        <div>
          <SkeletonBlock className="mx-auto mb-6 h-4 w-20" />
          <div className="grid gap-6 sm:grid-cols-2">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-4 rounded-2xl border border-[#1e1e2a] bg-[#111118] px-8 py-10"
              >
                {/* Clock icon */}
                <SkeletonBlock className="h-8 w-8 rounded-lg" />
                <div className="text-center space-y-2">
                  <SkeletonBlock className="mx-auto h-3.5 w-28" />
                  <SkeletonBlock className="mx-auto h-10 w-40" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="rounded-3xl border border-[#1e1e2a] bg-[#111118] px-8 py-16 lg:px-16 lg:py-20 text-center space-y-6">
          <SkeletonBlock className="mx-auto h-10 w-full max-w-lg sm:h-12 lg:h-14" />
          <div className="mx-auto max-w-xl space-y-2">
            <SkeletonBlock className="mx-auto h-4 w-full lg:h-5" />
            <SkeletonBlock className="mx-auto h-4 w-4/5 lg:h-5" />
          </div>
          <SkeletonBlock className="mx-auto h-13 w-64 rounded-full" />
        </div>
      </div>
    </section>
  )
})

export default HoursAndCTASkeleton
