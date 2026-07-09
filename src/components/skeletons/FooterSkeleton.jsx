import { memo } from 'react'
import SkeletonBlock from './SkeletonBlock'

const FooterSkeleton = memo(function FooterSkeleton() {
  return (
    <footer
      aria-hidden="true"
      className="border-t border-[#1e1e2a] px-5 py-10 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Logo */}
        <SkeletonBlock className="h-9 w-28 sm:h-10 rounded-md" />

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {[0, 1, 2, 3].map((i) => (
            <SkeletonBlock key={i} className="h-10 w-10 rounded-full" />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <SkeletonBlock className="h-3 w-64" />
        <SkeletonBlock className="h-3 w-24" />
      </div>
    </footer>
  )
})

export default FooterSkeleton
