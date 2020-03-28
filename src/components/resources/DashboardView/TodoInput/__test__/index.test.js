import React from 'react'
import { shallow } from 'enzyme'
import TodoInput from '..'

describe('TodoInput', () => {
  it('renders without crashing', () => {
    const component = shallow(<TodoInput />)
    expect(component).toMatchSnapshot()
  })
})
