import React from 'react'
import { action } from '@storybook/addon-actions'

import TimerCard from '..'

export default {
  component: TimerCard,
  title: 'Timer Card',
  excludeStories: /.*Data$/
}

export const timerData = {
  state: 'FOCUS',
  times: {
    minutes: '25',
    seconds: '00'
  }
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
