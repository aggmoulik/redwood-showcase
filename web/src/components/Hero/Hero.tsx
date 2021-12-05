import { routes } from '@redwoodjs/router'
import React from 'react'
import LinkTo from '../LinkTo/LinkTo'

const Hero = () => {
  return (
    <div className="container p-5">
      <div className="flex">
        <div className="bg-primary flex flex-col w-1/2 items-start p-5">
          <div className="font-bold text-5xl p-5">
            Amazing products in production built with RedwoodJS
          </div>
          <div className="p-5 pt-0 text-lg font-mediums">
            Discover and share the process, makers, and stories behind products.
          </div>
          <LinkTo
            style={{ fontWeight: 700, fontSize: '18px' }}
            name={'Showcase your project'}
            linkTo={routes.newProject()}
          />
        </div>

        <div className=" w-1/2 flex">
          {/* <div className="items-end"> */}
          <img
            src="device.svg"
            className="rounded-3xl relative left-40"
            alt="Device"
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
