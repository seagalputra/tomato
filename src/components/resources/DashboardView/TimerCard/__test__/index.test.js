import React from 'react'
import { shallow } from 'enzyme'
import TimerCard from '..'

describe('TimerCard', () => {
  it('renders without crashing', () => {
    const mockData = {
      state: 'FOCUS',
      times: {
        minutes: '25',
        seconds: '00'
      }
    }

    const component = shallow(<TimerCard {...mockData} />)
    expect(component).toMatchSnapshot()
  })
})
