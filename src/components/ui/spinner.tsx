import { cn } from '../../lib/utils/cn'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Spinner({ size = 'md', className }: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  }

  return (
    <div className={cn('relative', sizeClasses[size], className)}>
      <div className="absolute inset-0">
        <div className="w-full h-full rounded-full border-2 border-gray-200 dark:border-gray-700"></div>
        <div className="absolute inset-0 w-full h-full rounded-full border-2 border-transparent border-t-blue-500 animate-spin"></div>
      </div>
    </div>
  )
}

export function AppleSpinner({ size = 'md', className }: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  }

  return (
    <div className={cn('relative inline-block', sizeClasses[size], className)}>
      <div className="absolute inset-0">
        <div className="w-full h-full rounded-full border-2 border-gray-200 dark:border-gray-600 opacity-30"></div>
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full rounded-full border-2 border-transparent border-t-blue-500 dark:border-t-blue-400 animate-spin"></div>
        </div>
      </div>
    </div>
  )
}
