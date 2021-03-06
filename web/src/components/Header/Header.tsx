import { useAuth } from '@redwoodjs/auth'
import { routes } from '@redwoodjs/router'
import LinkTo from 'src/components/LinkTo'
import Text from 'src/components/Text'
import Button from '../Button/Button'

const Header = () => {
  const { isAuthenticated, logOut } = useAuth()
  return (
    <div className="w-full flex items-center justify-between ">
      <a
        href={routes.projects()}
        className="flex items-center text-2xl font-bold tracking-tight"
      >
        <img
          className="w-16 h-16 sm:w-24 sm:h-24"
          src="https://learn.redwoodjs.com/img/logo.svg"
          alt="RedwoodJS pinecone logo"
        />
        <h1 className="ml-2">Redwood JS </h1>
      </a>

      <Text name="Made with RedwoodJS" classes="text-2xl font-black" />

      {!isAuthenticated ? (
        <LinkTo name={'Submit a Project'} linkTo={routes.newProject()} />
      ) : (
        <Button
          name={'Log Out'}
          onClick={async () => {
            await logOut()
          }}
        />
      )}
    </div>
  )
}

export default Header
