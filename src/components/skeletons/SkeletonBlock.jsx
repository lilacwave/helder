import { memo } from 'react'

const SkeletonBlock = memo(function SkeletonBlock({ className = '' }) {
  return <div className={`skeleton-shimmer rounded-lg ${className}`} />
})

export default SkeletonBlock
