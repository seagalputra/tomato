import React from 'react'

import DashboardView from '..'

export default {
  component: DashboardView,
  title: 'DashboardView',
  excludeStories: /.*Data$/
}

export const Default = () => <DashboardView />
