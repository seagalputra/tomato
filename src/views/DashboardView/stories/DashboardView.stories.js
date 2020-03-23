import React, { Suspense, lazy } from 'react'

import NavigationBar from 'components/common/NavigationBar'
import Footer from 'components/common/Footer'

const DashboardView = lazy(() => import('..'))

export default {
  component: DashboardView,
  title: 'DashboardView',
  excludeStories: /.*Data$/,
  decorators: [
    story => (
      <div className="flex flex-col min-h-screen">
        <NavigationBar />
        <main className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>{story()}</Suspense>
        </main>
        <Footer />
      </div>
    )
  ]
}

export const Default = () => <DashboardView />
