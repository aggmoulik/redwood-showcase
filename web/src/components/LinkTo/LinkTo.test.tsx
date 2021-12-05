import { render } from '@redwoodjs/testing/web'

import Link from './LinkTo'

describe('Link', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Link />)
    }).not.toThrow()
  })
})
