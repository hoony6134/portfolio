import { useEffect, useState } from 'react'
import {
  IconChevronRight,
  IconRosetteDiscountCheckFilled,
} from '@tabler/icons-react'
import type { SocialItem } from '@/lib/data/social/social-data'
import { AppleSpinner } from '@/components/ui/spinner'
import {
  loadStackOverflowData,
  loadGithubData,
  loadRedditData,
  loadInstagramData,
  loadSolvedacData,
  loadBojData,
} from '@/lib/utils/social-loader'

interface SocialCardProps {
  social: SocialItem
}

const getTextColorClass = (style?: string): string => {
  switch (style) {
    case 'stack-overflow':
      return 'text-[#F48024]'
    case 'github':
      return 'text-[#24292e] dark:text-[#e1e4e8]'
    case 'reddit':
      return 'text-[#FF4500]'
    case 'instagram':
      return 'text-[#C13584]'
    case 'solvedac':
      return 'text-[#18CE3B]'
    case 'boj':
      return 'text-[#0076C0]'
    default:
      return 'text-gray-700 dark:text-gray-300'
  }
}

function SocialCard({ social }: SocialCardProps) {
  const [socialData, setSocialData] = useState<SocialItem>(social)
  const [isLoading, setIsLoading] = useState(false)
  const [tierColor, setTierColor] = useState<string | null>(null)
  const IconComponent = social.icon

  useEffect(() => {
    const loadDynamicData = async () => {
      // 동적 데이터가 필요한 항목들만 로딩
      if (
        (social.id === 'solved.ac' && !socialData.additionalValue) ||
        (social.id === 'boj' && !socialData.additionalValue) ||
        (!social.additionalValue &&
          (social.id === 'stackoverflow' ||
            social.id === 'github' ||
            social.id === 'reddit' ||
            social.id === 'instagram'))
      ) {
        setIsLoading(true)
        try {
          let additionalValue = null

          switch (social.id) {
            case 'stackoverflow':
              const stackOverflowReputation = await loadStackOverflowData()
              if (stackOverflowReputation !== null) {
                additionalValue = {
                  label: 'Reputation',
                  value: stackOverflowReputation,
                  style: 'stack-overflow' as const,
                }
              }
              break
            case 'github':
              const githubData = await loadGithubData()
              if (githubData?.public_repos !== undefined) {
                additionalValue = {
                  label: 'Repos',
                  value: githubData.public_repos,
                  style: 'github' as const,
                }
              }
              break
            case 'reddit':
              const redditKarma = await loadRedditData()
              if (redditKarma !== null) {
                additionalValue = {
                  label: 'Karma',
                  value: redditKarma,
                  style: 'reddit' as const,
                }
              }
              break
            case 'instagram':
              const instagramData = await loadInstagramData()
              if (instagramData?.followers !== undefined) {
                additionalValue = {
                  label: 'Followers',
                  value: instagramData.followers,
                  style: 'instagram' as const,
                }
              }
              break
            case 'solved.ac':
              const solvedacData = await loadSolvedacData()
              if (solvedacData?.tierName) {
                additionalValue = {
                  label: '',
                  value: solvedacData.tierName,
                  style: 'solvedac' as const,
                  className: `font-bold`,
                }
                // tierColor state 설정
                setTierColor(solvedacData.tierColor)
              }
              break
            case 'boj':
              const bojData = await loadBojData()
              if (bojData?.displayText) {
                additionalValue = {
                  label: '',
                  value: bojData.displayText,
                  style: 'boj' as const,
                  className: 'font-bold text-[#0076C0]',
                }
              }
              break
          }

          if (additionalValue) {
            setSocialData((prev) => ({
              ...prev,
              additionalValue,
            }))
          }
        } catch (error) {
          console.error(`Failed to load ${social.id} data:`, error)
        } finally {
          setIsLoading(false)
        }
      }
    }

    loadDynamicData()
  }, [social.id, social.additionalValue])

  return (
    <a
      href={socialData.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full max-w-sm mx-auto"
    >
      <div className="relative">
        {/* Gradient border */}
        <div
          className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 ease-out
                      bg-gradient-to-br ${socialData.gradientClasses} p-[2px]`}
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
              className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          bg-gradient-to-br ${socialData.gradientClasses}`}
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
                {socialData.name}
              </h3>
              {socialData.verified && (
                <IconRosetteDiscountCheckFilled
                  size={24}
                  className="text-blue-500 dark:text-sky-500"
                />
              )}
            </div>
            <div className="text-neutral-600 dark:text-neutral-400 font-medium text-sm flex items-center gap-1">
              <span>{socialData.username}</span>
              {isLoading &&
                (social.id === 'stackoverflow' ||
                  social.id === 'github' ||
                  social.id === 'reddit' ||
                  social.id === 'solved.ac' ||
                  social.id === 'boj') && (
                  <>
                    <span className="mx-1">·</span>
                    <AppleSpinner size="sm" className="text-neutral-500" />
                  </>
                )}
              {socialData.additionalValue && !isLoading && (
                <>
                  <span className="mx-1">·</span>
                  <span
                    className={`font-semibold ${socialData.additionalValue.className || getTextColorClass(socialData.additionalValue.style)}`}
                    style={
                      social.id === 'solved.ac' && tierColor
                        ? {
                            color: tierColor,
                          }
                        : undefined
                    }
                  >
                    {socialData.additionalValue.value}{' '}
                    {socialData.additionalValue.label}
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
              className={`w-6 h-6 rounded-full flex items-center justify-center
                          bg-gradient-to-br ${socialData.gradientClasses}`}
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
