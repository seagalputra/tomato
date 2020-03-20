import React from 'react'
import { shallow } from 'enzyme'
import Button from '..'

describe('Button', () => {
  it('renders without crashing', () => {
    const component = shallow(<Button>This is Button</Button>)
    expect(component).toMatchSnapshot()
  })
})
