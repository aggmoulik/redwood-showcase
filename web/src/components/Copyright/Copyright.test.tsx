import { render } from '@redwoodjs/testing/web'

import Copyright from './Copyright'

describe('Copyright', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Copyright />)
    }).not.toThrow()
  })
})
