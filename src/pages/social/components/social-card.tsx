import {
  IconChevronRight,
  IconRosetteDiscountCheckFilled,
} from '@tabler/icons-react'
import type { SocialItem } from '../../../lib/data/social-data'

interface SocialCardProps {
  social: SocialItem
}

const getTextColorClass = (style?: string): string => {
  switch (style) {
    case 'stack-overflow':
      return 'text-[#F48024]'
    case 'github':
      return 'text-[#24292e] dark:text-[#e1e4e8]'
    default:
      return 'text-gray-700 dark:text-gray-300'
  }
}

function SocialCard({ social }: SocialCardProps) {
  const IconComponent = social.icon

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full max-w-sm mx-auto"
    >
      <div className="relative">
        {/* Gradient border */}
        <div
          className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 ease-out
                      bg-gradient-to-br ${social.gradientClasses} p-[2px]`}
        />

        <div
          className="relative bg-white dark:bg-neutral-800 p-6 rounded-xl border-2 border-neutral-200 dark:border-neutral-700 
                       shadow-lg hover:shadow-2xl dark:hover:shadow-2xl 
                       transition-all duration-300 ease-out
                       hover:scale-[1.03] hover:-translate-y-2
                       group-hover:border-transparent"
        >
          {/* Icon */}
          <div
            className="flex items-center justify-center w-14 h-14 rounded-full mb-4
                          bg-neutral-100 dark:bg-neutral-700
                          transition-all duration-300 relative"
          >
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${social.gradientClasses} 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
            <IconComponent
              size={28}
              className="relative z-10 text-neutral-600 dark:text-neutral-300 group-hover:text-white transition-colors duration-300"
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
                {social.name}
              </h3>
              {social.verified && (
                <IconRosetteDiscountCheckFilled
                  size={24}
                  className="text-blue-500 dark:text-sky-500"
                />
              )}
            </div>
            <div className="text-neutral-600 dark:text-neutral-400 font-medium text-sm flex items-center gap-1">
              <span>{social.username}</span>
              {social.additionalValue && (
                <>
                  <span className="mx-1">·</span>
                  <span
                    className={`font-semibold ${social.additionalValue.className || getTextColorClass(social.additionalValue.style)}`}
                  >
                    {social.additionalValue.value}{' '}
                    {social.additionalValue.label}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Arrow indicator */}
          <div
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 
                          transition-all duration-300 ease-out
                          transform translate-x-2 group-hover:translate-x-0"
          >
            <div
              className={`w-6 h-6 rounded-full bg-gradient-to-br ${social.gradientClasses} 
                           flex items-center justify-center`}
            >
              <IconChevronRight size={18} color="white" />
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default SocialCard
