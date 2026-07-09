import { memo } from 'react'
import SkeletonBlock from './SkeletonBlock'

const MethodologySkeleton = memo(function MethodologySkeleton() {
  return (
    <section
      aria-hidden="true"
      className="section-border px-5 py-20 lg:px-8 lg:py-28 bg-[#111118]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left — text + checklist */}
        <div>
          {/* Label */}
          <SkeletonBlock className="mb-3 h-4 w-28" />
          {/* Heading */}
          <SkeletonBlock className="mb-8 h-9 w-64 sm:h-10" />

          {/* Checklist items */}
          <div className="space-y-4">
            {[1, 0.85, 0.9, 0.75, 0.8].map((ratio, i) => (
              <div key={i} className="flex items-start gap-3">
                <SkeletonBlock className="mt-0.5 h-5 w-5 shrink-0 rounded-full" />
                <SkeletonBlock
                  className="h-4 lg:h-5"
                  style={{ width: `${ratio * 100}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right — data panel */}
        <div className="rounded-2xl border border-[#1e1e2a] bg-[#0a0a0f] p-6 lg:p-8">
          {/* Panel header */}
          <div className="mb-6 flex items-center justify-between">
            <div className="space-y-2">
              <SkeletonBlock className="h-3 w-24" />
              <SkeletonBlock className="h-6 w-44" />
            </div>
            <SkeletonBlock className="h-6 w-12 rounded-full" />
          </div>

          {/* 3 stats */}
          <div className="mb-6 grid grid-cols-3 gap-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-xl border border-[#1e1e2a] bg-[#111118] p-4 text-center"
              >
                <SkeletonBlock className="mx-auto mb-1 h-7 w-14" />
                <SkeletonBlock className="mx-auto h-3 w-10" />
              </div>
            ))}
          </div>

          {/* Chart placeholder */}
          <SkeletonBlock className="h-[120px] w-full rounded-xl" />
        </div>
      </div>
    </section>
  )
})

export default MethodologySkeleton
