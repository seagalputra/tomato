import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from '..'

export default {
  component: Button,
  title: 'Button',
  decorators: [story => <div style={{ padding: '2rem' }}>{story()}</div>],
  excludeStories: /.*Data$/
}

export const actionsData = {
  onClick: action('Click Button!')
}

export const buttonData = {
  variant: 'primary',
  isDisabled: false
}

export const Primary = () => (
  <Button {...buttonData} {...actionsData}>
    Start
  </Button>
)

export const Secondary = () => (
  <Button {...buttonData} variant="secondary" {...actionsData}>
    Stop
  </Button>
)

export const Disabled = () => (
  <Button {...buttonData} isDisabled {...actionsData}>
    Start
  </Button>
)
