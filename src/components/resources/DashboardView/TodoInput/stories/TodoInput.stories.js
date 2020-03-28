import React from 'react'

import TodoInput from '..'

export default {
  component: TodoInput,
  title: 'Todo Input',
  decorators: [story => <div className="p-4">{story()}</div>],
  excludeStories: /.*Data$/
}

export const Default = () => <TodoInput />
