import React, { Suspense, lazy } from 'react'

import Spinner from 'react-spinkit'
import NavigationBar from 'components/common/NavigationBar'
import Footer from 'components/common/Footer'

const DashboardView = lazy(() => import('..'))

export default {
  component: DashboardView,
  title: 'Dashboard View',
  excludeStories: /.*Data$/,
  decorators: [
    story => (
      <div className="flex flex-col min-h-screen">
        <NavigationBar />
        <main className="flex-grow">
          <Suspense
            fallback={
              <div className="text-center">
                <Spinner name="line-scale-pulse-out-rapid" />
              </div>
            }
          >
            {story()}
          </Suspense>
        </main>
        <Footer />
      </div>
    )
  ]
}

export const Default = () => <DashboardView />
