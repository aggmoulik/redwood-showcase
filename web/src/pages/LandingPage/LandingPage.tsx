// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Hero from 'src/components/Hero/Hero'
import ProjectsCell from 'src/components/Project/ProjectsCell'

const LandingPage = () => {
  return (
    <>
      <MetaTags
        title="Landing"
        // description="Landing description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <Hero />
      <div className="container p-5">
        <div className="flex flex-col">
          <div>
            <h1 className="text-4xl font-bold">All</h1>
          </div>
        <ProjectsCell />
        </div>
      </div>
      {/* <h1>LandingPage</h1>
      <p>
        Find me in <code>./web/src/pages/LandingPage/LandingPage.tsx</code>
      </p>
      <p>
        My default route is named <code>landing</code>, link to me with `
        <Link to={routes.landing()}>Landing</Link>`
      </p> */}
    </>
  )
}

export default LandingPage
