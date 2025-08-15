import { ExternalLink } from 'lucide-react'
import type { PressData } from '@/lib/data/press/press-data'

interface PressCardProps {
  press: PressData
}

const categoryLabels = {
  research: 'Research',
  award: 'Award',
  interview: 'Interview',
  feature: 'Feature',
  other: 'Other',
}

const categoryStyles = {
  research: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  award:
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  interview:
    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  feature:
    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  other:
    'bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300',
}

function PressCard({ press }: PressCardProps) {
  return (
    <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between mb-3">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryStyles[press.category]}`}
        >
          {categoryLabels[press.category]}
        </span>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {press.date}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
        {press.title}
      </h3>

      <div className="flex items-center mb-3">
        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
          {press.source}
        </span>
        <span className="mx-2 text-neutral-400">|</span>
        <span className="text-sm text-neutral-500 dark:text-neutral-500">
          {press.author}
        </span>
      </div>

      <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
        {press.excerpt.length > 120
          ? `${press.excerpt.substring(0, 120)}...`
          : press.excerpt}
      </p>

      <a
        href={press.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-200"
      >
        See press
        <ExternalLink className="ml-1 h-4 w-4" />
      </a>
    </div>
  )
}

export default PressCard
