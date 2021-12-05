import React from 'react'
import Features from 'src/components/Features/Features'
import LinkTo from 'src/components/LinkTo'

const projectFeatures = [
  {
    name: 'What?',
    icon: '',
    description: '',
  },
  {
    name: 'Why RedwoodJS?',
    icon: '',
    description: '',
  },
  {
    name: 'Favourite Features ?',
    icon: '',
    description: '',
  },
]

const Project = ({ project }) => {
  return (
    <>
      <div className="rw-segment">
        <div className="rw-segment-header flex justify-center items-center">
          {/* <h2 className="rw-heading rw-heading-secondary capitalize">
            {project.title}
          </h2> */}
          <LinkTo name={'Visit Website'} linkTo={project.website} />
        </div>
        <div className="container">
          <div className="flex flex-col">
            <div className="flex">
              <h1 className="text-4xl font-extrabold">{project.title}</h1>
              <div className="rounded-full py-3 px-6 bg-green-500 ml-6 text-white font-bold">
                Production
              </div>
            </div>
            <Features features={projectFeatures} />
            <div className="flex">
              <div className="w-1/2">
                {/* Copied timeline */}
                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                  {/* Two */}
                  <div className="flex flex-row-reverse md:contents">
                    {/* Right */}
                    <div className="text-secondary col-start-1 col-end-5 p-4 ml-auto text-xl font-extrabold">
                      2nd Nov 2021
                    </div>
                    {/* Timeline line */}
                    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                      <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                      </div>
                      <div className="w-6 h-6 absolute rounded-full bg-blue-500 shadow top-0"></div>
                    </div>
                    {/* Left */}
                    <div className="text-secondary col-start-6 col-end-10 p-4 my-4 mr-auto -mt-1">
                      <h3
                        className="font-semibold text-lg mb-1 px-6 py-3 bg-green-600 rounded-xl text-white"
                        style={{ width: 'fit-content' }}
                      >
                        Lorem ipsum
                      </h3>
                      <p className="leading-tight text-justify mt-5 text-base font-extrabold">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Vitae, facilis.
                      </p>
                    </div>
                  </div>
                  {/* One */}
                  <div className="flex md:contents">
                    <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                      <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                      </div>
                      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                    </div>
                    <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                      <h3 className="font-semibold text-lg mb-1">
                        Lorem ipsum
                      </h3>
                      <p className="leading-tight text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Vitae, facilis.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Copied timeline ends */}
              </div>

              <div className="w-1/2"></div>
            </div>
          </div>
        </div>
        {/* <div className="flex mt-12 text-secondary">
          <div className="space-y-16 p-8 w-2/3 flex flex-col bg-primary rounded-xl">
            <div>
              <h2 className="text-3xl mb-2 font-semibold">Description</h2>
              <div className="max-w-prose break-words leading-7">
                <p>
                  Better YouTube Live is a browser extension that allows YouTube
                  Live viewers and chatters to customise Youtube Live UI,
                  specifically the chat, in many ways, thus enhancing their
                  viewing/chatting experience.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-2">
              {project.tags.map((tag, index) => {
                return (
                  <div
                    key={index}
                    className="text-sm rounded-md mr-2 mb-2 px-4 py-2 bg-secondary text-primary"
                  >
                    <p>#{tag}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="w-1/3  ml-8">
            <div className="p-8 bg-primary rounded-xl">
              <h2 className="text-3xl mb-2 font-semibold">Author</h2>
              <div className="flex flex-col space-y-1">
                <a
                  href={`https://github.com/${project.github}`}
                  target="_blank"
                  className="inline-flex"
                  rel="noreferrer"
                >
                  <img
                    alt="Github"
                    width="20px"
                    height="20px"
                    className="mr-2"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMTE2MyAxNjU3LjY5NyA1Ni42OTMgNTYuNjkzIiBoZWlnaHQ9IjU2LjY5M3B4IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSItMTE2MyAxNjU3LjY5NyA1Ni42OTMgNTYuNjkzIiB3aWR0aD0iNTYuNjkzcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0xMTM0LjY1OTgsMTY2Mi45MTYzYy0xMy42MDEsMC0yNC42MywxMS4wMjY3LTI0LjYzLDI0LjYyOTkgICBjMCwxMC44ODIxLDcuMDU3MywyMC4xMTQ0LDE2Ljg0MzUsMjMuMzcxM2MxLjIzMDgsMC4yMjc5LDEuNjgyOS0wLjUzNDUsMS42ODI5LTEuMTg0OWMwLTAuNTg3LTAuMDIyNy0yLjUyNzYtMC4wMzM0LTQuNTg1NyAgIGMtNi44NTIxLDEuNDkwMS04LjI5NzktMi45MDYtOC4yOTc5LTIuOTA2Yy0xLjEyMDUtMi44NDY3LTIuNzM0Ny0zLjYwMzktMi43MzQ3LTMuNjAzOSAgIGMtMi4yMzQ5LTEuNTI4NywwLjE2ODUtMS40OTcyLDAuMTY4NS0xLjQ5NzJjMi40NzMsMC4xNzM3LDMuNzc1NSwyLjUzODUsMy43NzU1LDIuNTM4NWMyLjE5NjcsMy43NjUxLDUuNzYxOCwyLjY3NjUsNy4xNjc1LDIuMDQ3MiAgIGMwLjIyMTEtMS41OTE3LDAuODU5MS0yLjY3ODYsMS41NjM3LTMuMjkzNmMtNS40NzA3LTAuNjIyNi0xMS4yMjE4LTIuNzM0Ny0xMS4yMjE4LTEyLjE3MjJjMC0yLjY4ODgsMC45NjIzLTQuODg2MSwyLjUzOC02LjYxMSAgIGMtMC4yNTU3LTAuNjIwNi0xLjA5ODktMy4xMjU1LDAuMjM4Ni02LjUxODNjMCwwLDIuMDY4NC0wLjY2MTYsNi43NzQ3LDIuNTI1YzEuOTY0OC0wLjU0NTgsNC4wNzE5LTAuODE5NSw2LjE2NS0wLjgyOSAgIGMyLjA5MywwLjAwOTUsNC4yMDE3LDAuMjgzMiw2LjE3LDAuODI5YzQuNzAxMi0zLjE4NjYsNi43NjY1LTIuNTI1LDYuNzY2NS0yLjUyNWMxLjM0MDYsMy4zOTI4LDAuNDk3NCw1Ljg5NzcsMC4yNDE3LDYuNTE4MyAgIGMxLjU3OTMsMS43MjQ5LDIuNTM0OCwzLjkyMjEsMi41MzQ4LDYuNjExYzAsOS40NjAyLTUuNzYxOCwxMS41NDI4LTExLjI0NjUsMTIuMTUyN2MwLjg4MzQsMC43NjQ0LDEuNjcwNCwyLjI2MzIsMS42NzA0LDQuNTYxICAgYzAsMy4yOTU1LTAuMDI4Miw1Ljk0NzktMC4wMjgyLDYuNzU5MmMwLDAuNjU1NiwwLjQ0MzIsMS40MjM2LDEuNjkxNSwxLjE4MThjOS43ODEyLTMuMjYwNSwxNi44Mjk2LTEyLjQ4OTYsMTYuODI5Ni0yMy4zNjgyICAgQy0xMTEwLjAyOTksMTY3My45NDMtMTEyMS4wNTc0LDE2NjIuOTE2My0xMTM0LjY1OTgsMTY2Mi45MTYzeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTS0xMTQ5Ljk2MTEsMTY5OC4yNzkzYy0wLjA1NDIsMC4xMjI3LTAuMjQ2OSwwLjE1OTMtMC40MjIyLDAuMDc1M2MtMC4xNzg4LTAuMDgwNC0wLjI3ODgtMC4yNDczLTAuMjIxMS0wLjM3ICAgYzAuMDUzLTAuMTI2LDAuMjQ1Ny0wLjE2MSwwLjQyNDItMC4wNzY5Qy0xMTUwLjAwMTMsMTY5Ny45ODgyLTExNDkuODk5MywxNjk4LjE1NjYtMTE0OS45NjExLDE2OTguMjc5M0wtMTE0OS45NjExLDE2OTguMjc5M3ogICAgTS0xMTUwLjI2NDIsMTY5OC4wNTQ3Ii8+PHBhdGggZD0iTS0xMTQ4Ljk2MzQsMTY5OS4zOTIyYy0wLjExNzQsMC4xMDg2LTAuMzQ3MywwLjA1ODEtMC41MDMxLTAuMTEzOWMtMC4xNjEzLTAuMTcxOC0wLjE5MTItMC40MDE2LTAuMDcyLTAuNTExOCAgIGMwLjEyMTEtMC4xMDg4LDAuMzQzOC0wLjA1NzksMC41MDUsMC4xMTM5Qy0xMTQ4Ljg3MjEsMTY5OS4wNTQxLTExNDguODQwNywxNjk5LjI4MTktMTE0OC45NjM0LDE2OTkuMzkyMkwtMTE0OC45NjM0LDE2OTkuMzkyMnogICAgTS0xMTQ5LjE5ODQsMTY5OS4xNCIvPjxwYXRoIGQ9Ik0tMTE0Ny45OTIyLDE3MDAuODEwNWMtMC4xNTEsMC4xMDUxLTAuMzk3OSwwLjAwNjctMC41NTA1LTAuMjEyM2MtMC4xNTEtMC4yMTkxLTAuMTUxLTAuNDgxOSwwLjAwMzUtMC41ODcyICAgYzAuMTUyNi0wLjEwNTEsMC4zOTYtMC4wMTA0LDAuNTUwNSwwLjIwNjhDLTExNDcuODM4MSwxNzAwLjQ0MDYtMTE0Ny44MzgxLDE3MDAuNzAzNC0xMTQ3Ljk5MjIsMTcwMC44MTA1TC0xMTQ3Ljk5MjIsMTcwMC44MTA1eiAgICBNLTExNDcuOTkyMiwxNzAwLjgxMDUiLz48cGF0aCBkPSJNLTExNDYuNjYxOSwxNzAyLjE4MTJjLTAuMTM1MSwwLjE0ODktMC40MjI3LDAuMTA4Ni0wLjYzMjktMC4wOTQ1Yy0wLjIxNTUtMC4xOTg0LTAuMjc1My0wLjQ4MDMtMC4xNDAzLTAuNjI5MyAgIGMwLjEzNzEtMC4xNDksMC40MjYzLTAuMTA3MiwwLjYzODEsMC4wOTQ0Qy0xMTQ2LjU4MzEsMTcwMS43NTAxLTExNDYuNTE4MiwxNzAyLjAzMzctMTE0Ni42NjE5LDE3MDIuMTgxMkwtMTE0Ni42NjE5LDE3MDIuMTgxMnogICAgTS0xMTQ2LjY2MTksMTcwMi4xODEyIi8+PHBhdGggZD0iTS0xMTQ0LjgyNjUsMTcwMi45NzY5Yy0wLjA1OTcsMC4xOTI3LTAuMzM2NSwwLjI4MDQtMC42MTU0LDAuMTk4NGMtMC4yNzg4LTAuMDg0NS0wLjQ2MDgtMC4zMTAzLTAuNDA0Ny0wLjUwNTEgICBjMC4wNTc3LTAuMTk0MywwLjMzNjEtMC4yODU1LDAuNjE2OS0wLjE5NzlDLTExNDQuOTUxMiwxNzAyLjU1NjMtMTE0NC43Njg4LDE3MDIuNzgwNS0xMTQ0LjgyNjUsMTcwMi45NzY5TC0xMTQ0LjgyNjUsMTcwMi45NzY5eiAgICBNLTExNDQuODI2NSwxNzAyLjk3NjkiLz48cGF0aCBkPSJNLTExNDIuODEwNywxNzAzLjEyNDNjMC4wMDY3LDAuMjAzMS0wLjIyOTksMC4zNzE2LTAuNTIyNiwwLjM3NTJjLTAuMjk0NCwwLjAwNjctMC41MzMtMC4xNTc3LTAuNTM2MS0wLjM1NzcgICBjMC0wLjIwNTIsMC4yMzEzLTAuMzcxNywwLjUyNTgtMC4zNzY4Qy0xMTQzLjA1MDksMTcwMi43NTk0LTExNDIuODEwNywxNzAyLjkyMjctMTE0Mi44MTA3LDE3MDMuMTI0M0wtMTE0Mi44MTA3LDE3MDMuMTI0M3ogICAgTS0xMTQyLjgxMDcsMTcwMy4xMjQzIi8+PHBhdGggZD0iTS0xMTQwLjkzNTEsMTcwMi44MDUyYzAuMDM1LDAuMTk4LTAuMTY4NiwwLjQwMTUtMC40NTk0LDAuNDU1N2MtMC4yODU5LDAuMDUyNi0wLjU1MDQtMC4wNzAxLTAuNTg3LTAuMjY2NSAgIGMtMC4wMzU0LTAuMjAzMSwwLjE3MTYtMC40MDY2LDAuNDU3My0wLjQ1OTJDLTExNDEuMjMzLDE3MDIuNDg0Ni0xMTQwLjk3MjIsMTcwMi42MDM2LTExNDAuOTM1MSwxNzAyLjgwNTJMLTExNDAuOTM1MSwxNzAyLjgwNTJ6ICAgIE0tMTE0MC45MzUxLDE3MDIuODA1MiIvPjwvZz48L3N2Zz4="
                  ></img>
                  {project.github}
                </a>
                <a
                  href={`https://twitter.com/${project.twitter}`}
                  target="_blank"
                  className="inline-flex"
                  rel="noreferrer"
                >
                  <img
                    alt="twitter h"
                    width="20px"
                    height="20px"
                    className="mr-2"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU2LjY5MyA1Ni42OTMiIGhlaWdodD0iNTYuNjkzcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1Ni42OTMgNTYuNjkzIiB3aWR0aD0iNTYuNjkzcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik01Mi44MzcsMTUuMDY1Yy0xLjgxMSwwLjgwNS0zLjc2LDEuMzQ4LTUuODA1LDEuNTkxYzIuMDg4LTEuMjUsMy42ODktMy4yMyw0LjQ0NC01LjU5MmMtMS45NTMsMS4xNTktNC4xMTUsMi02LjQxOCwyLjQ1NCAgYy0xLjg0My0xLjk2NC00LjQ3LTMuMTkyLTcuMzc3LTMuMTkyYy01LjU4MSwwLTEwLjEwNiw0LjUyNS0xMC4xMDYsMTAuMTA3YzAsMC43OTEsMC4wODksMS41NjIsMC4yNjIsMi4zMDMgIGMtOC40LTAuNDIyLTE1Ljg0OC00LjQ0NS0yMC44MzMtMTAuNTZjLTAuODcsMS40OTItMS4zNjgsMy4yMjgtMS4zNjgsNS4wODJjMCwzLjUwNiwxLjc4NCw2LjYsNC40OTYsOC40MTIgIGMtMS42NTYtMC4wNTMtMy4yMTUtMC41MDgtNC41NzgtMS4yNjVjLTAuMDAxLDAuMDQyLTAuMDAxLDAuMDg1LTAuMDAxLDAuMTI4YzAsNC44OTYsMy40ODQsOC45OCw4LjEwOCw5LjkxICBjLTAuODQ4LDAuMjMtMS43NDEsMC4zNTQtMi42NjMsMC4zNTRjLTAuNjUyLDAtMS4yODUtMC4wNjMtMS45MDItMC4xODJjMS4yODcsNC4wMTUsNS4wMTksNi45MzgsOS40NDEsNy4wMTkgIGMtMy40NTksMi43MTEtNy44MTYsNC4zMjctMTIuNTUyLDQuMzI3Yy0wLjgxNSwwLTEuNjItMC4wNDgtMi40MTEtMC4xNDJjNC40NzQsMi44NjksOS43ODYsNC41NDEsMTUuNDkzLDQuNTQxICBjMTguNTkxLDAsMjguNzU2LTE1LjQsMjguNzU2LTI4Ljc1NmMwLTAuNDM4LTAuMDA5LTAuODc1LTAuMDI4LTEuMzA5QzQ5Ljc2OSwxOC44NzMsNTEuNDgzLDE3LjA5Miw1Mi44MzcsMTUuMDY1eiIvPjwvc3ZnPg=="
                  ></img>
                  {project.twitter}
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Project
