import React from 'react'
import { shallow } from 'enzyme'
import TimerCard from '..'

describe('TimerCard', () => {
  it('renders without crashing', () => {
    const mockData = {
      state: 'FOCUS',
      timer: 1500
    }

    const component = shallow(<TimerCard {...mockData} />)
    expect(component).toMatchSnapshot()
  })
})
