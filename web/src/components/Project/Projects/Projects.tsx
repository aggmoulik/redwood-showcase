import { routes } from '@redwoodjs/router'

const ProjectsList = ({ projects }) => {
  return (
    <div className="grid gap-8 md:grid-cols-3 grid-cols-2 mt-12">
      {projects.map((project, index) => (
        <a
          key={index}
          href={routes.project({
            id: project.id,
          })}
          target="_blank"
          rel="noreferrer"
          className="h-full"
        >
          <div className="flex flex-col h-full rounded overflow-hidden shadow-lg ">
            <div className="relative flex-shrink-0 pb-2/3 bg-secondary bg-opacity-75">
              <div className="absolute inset-0 w-full h-full object-cover">
                <img
                  className="absolute w-full h-full object-cover"
                  src="https://learn.redwoodjs.com/img/logo.svg"
                  alt="Sunset in the mountains"
                />
              </div>
            </div>
            <div className="text-primary bg-secondary p-4 sm:p-6 h-full flex flex-col justify-between border-t-5 border-dark-300">
              <h1 className="font-bold text-xl">{project.title}</h1>
              <p className="break-all flex-1 my-4 leading-5 line-clamp-2">
                {project.description}
              </p>

              <div className="flex justify-between items-center">
                <div className="text-sm flex flex-wrap">
                  {project.tags.map((tag, index) => {
                    return (
                      <a
                        key={index}
                        href="/"
                        className="text-sm font-semibold mr-2"
                      >
                        #{tag}
                      </a>
                    )
                  })}
                  {project.tags.map((tag, index) => {
                    return (
                      <a
                        key={index}
                        href="/"
                        className="text-sm font-semibold mr-2"
                      >
                        #{tag}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default ProjectsList
