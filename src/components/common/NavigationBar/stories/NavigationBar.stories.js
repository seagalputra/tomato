import React from 'react'

import NavigationBar from '..'

export default {
  component: NavigationBar,
  title: 'Navigation Bar',
  excludeStories: /.*Data$/
}

export const Default = () => <NavigationBar />
