import React from 'react'

import Button from '..'

export default {
  component: Button,
  title: 'Button',
  decorators: [story => <div style={{ padding: '2rem' }}>{story()}</div>],
  excludeStories: /.*Data$/
}

export const Primary = () => <Button variant="primary">Button</Button>

export const Secondary = () => <Button variant="secondary">Button</Button>

export const Disabled = () => <Button isDisabled>Button</Button>
