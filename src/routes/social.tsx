import { createFileRoute } from '@tanstack/react-router'
import SocialPage from '@/pages/social/social-page'

export const Route = createFileRoute('/social')({
  component: SocialPage,
})
