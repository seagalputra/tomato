import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavigationBar from 'components/common/NavigationBar'

const DashboardView = lazy(() => import('../../../views/DashboardView'))

const Routes = () => (
  <Router>
    <NavigationBar />
    <Suspense
      fallback={
        <div className="text-center mt-3 text-base font-bold">Loading...</div>
      }
    >
      <Switch>
        <Route exact path="/" component={DashboardView} />
      </Switch>
    </Suspense>
  </Router>
)

export default Routes
