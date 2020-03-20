import React from 'react'
import { action } from '@storybook/addon-actions'

import TimerCard from '..'

export default {
  component: TimerCard,
  title: 'Timer Card',
  decorators: [story => <div style={{ padding: '2rem' }}>{story()}</div>],
  excludeStories: /.*Data$/
}

export const timerData = {
  state: 'FOCUS'
}

export const actionsData = {
  onStart: action('Start Timer'),
  onStop: action('Stop Timer')
}

export const Focus = () => <TimerCard {...timerData} {...actionsData} />

export const LongBreak = () => (
  <TimerCard {...timerData} state="LONG_BREAK" {...actionsData} />
)

export const ShortBreak = () => (
  <TimerCard {...timerData} state="SHORT_BREAK" {...actionsData} />
)
