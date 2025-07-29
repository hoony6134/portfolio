import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

import Header from '../components/header'
import Footer from '../components/footer'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Header />
      <div className="mx-0 md:mx-12 lg:mx-24 xl:mx-48">
        <Outlet />
      </div>
      <Footer />
    </>
  ),
})
