import { useEffect, useState } from 'react'
import SocialCard from './components/social-card'
import {
  createSocialCategories,
  type SocialCategory,
} from '../../lib/data/social-categories'
import { loadSocialDataWithDynamicValues } from '../../lib/utils/social-loader'

function SocialPage() {
  const [socialCategories, setSocialCategories] = useState<SocialCategory[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const socialData = await loadSocialDataWithDynamicValues()
        const categories = createSocialCategories(socialData)
        setSocialCategories(categories)
      } catch (error) {
        console.error('Failed to load social data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  if (isLoading) {
    return (
      <div className="hero-section flex items-center justify-start min-h-screen">
        <div className="flex flex-col items-start w-full">
          <h1 className="text-4xl font-bold mb-2 mt-24">Social</h1>
          <p className="text-xl mb-8">
            You can find me on various platforms. Feel free to connect!
          </p>
          <div className="w-full">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900 dark:border-white"></div>
              <span className="text-lg">Loading social data...</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="hero-section flex items-center justify-start min-h-screen">
      <div className="flex flex-col items-start w-full">
        <h1 className="text-4xl font-bold mb-2 mt-24">Social</h1>
        <p className="text-xl mb-8">
          You can find me on various platforms. Feel free to connect!
        </p>

        <div className="w-full space-y-12">
          {socialCategories.map((category) => (
            <div key={category.id} className="w-full">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">
                {category.name}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.items.map((social) => (
                  <SocialCard key={social.id} social={social} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SocialPage
