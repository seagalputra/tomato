import React from 'react'
import { shallow } from 'enzyme'
import TimerCard from '..'

describe('TimerCard', () => {
  it('renders without crashing', () => {
    const state = 'FOCUS'

    const component = shallow(<TimerCard state={state} />)
    expect(component).toMatchSnapshot()
  })
})
