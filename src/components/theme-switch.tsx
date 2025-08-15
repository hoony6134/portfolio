import { IconShadow, IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from '../lib/contexts/theme-context'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  const themes = [
    { key: 'light' as const, icon: IconSun, label: 'Light' },
    { key: 'dark' as const, icon: IconMoon, label: 'Dark' },
    { key: 'system' as const, icon: IconShadow, label: 'System' },
  ]

  const currentThemeIndex = themes.findIndex((t) => t.key === theme)

  const handleToggle = () => {
    const nextIndex = (currentThemeIndex + 1) % themes.length
    setTheme(themes[nextIndex].key)
  }

  const currentTheme = themes[currentThemeIndex]
  const Icon = currentTheme.icon

  return (
    <button
      onClick={handleToggle}
      className="relative p-2 transition-all duration-200"
      title={`Current theme: ${currentTheme.label}. Click to switch.`}
      aria-label={`Switch theme. Current: ${currentTheme.label}`}
    >
      <Icon
        size={18}
        className="text-gray-600 dark:text-gray-300 transition-colors duration-200"
      />
    </button>
  )
}
