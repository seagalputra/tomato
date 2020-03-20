import React, { Suspense, lazy } from 'react'

import NavigationBar from 'components/common/NavigationBar'

const DashboardView = lazy(() => import('..'))

export default {
  component: DashboardView,
  title: 'DashboardView',
  excludeStories: /.*Data$/,
  decorators: [
    story => (
      <>
        <NavigationBar />
        <Suspense fallback={<div>Loading...</div>}>{story()}</Suspense>
      </>
    )
  ]
}

export const Default = () => <DashboardView />
