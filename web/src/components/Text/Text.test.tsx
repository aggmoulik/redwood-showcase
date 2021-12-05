import { render } from '@redwoodjs/testing/web'

import Text from './Text'

describe('Text', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Text />)
    }).not.toThrow()
  })
})
