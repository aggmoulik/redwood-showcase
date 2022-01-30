import { render } from '@redwoodjs/testing/web'

import SocialMediaLinks from './SocialMediaLinks'

describe('SocialMediaLinks', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SocialMediaLinks />)
    }).not.toThrow()
  })
})
