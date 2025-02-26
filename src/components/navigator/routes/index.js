import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Spinner from 'react-spinkit'
import NavigationBar from 'components/common/NavigationBar'
import Footer from 'components/common/Footer'

const DashboardView = lazy(() => import('../../../views/DashboardView'))

const Routes = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <main className="flex-grow">
        <Suspense
          fallback={
            <div className="text-center">
              <Spinner name="line-scale-pulse-out-rapid" />
            </div>
          }
          className="flex flex-col min-h-screen"
        >
          <Switch>
            <Route exact path="/" component={DashboardView} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </div>
  </Router>
)

export default Routes
