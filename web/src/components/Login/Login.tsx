import { useAuth } from '@redwoodjs/auth'
import Text from 'src/components/Text'
import Button from '../Button/Button'

const Login = () => {
  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  const signUpWithGitHub = async () => {
    console.log('I was called')
    const data = await logIn({
      provider: 'github',
    })
    console.log('does supabase auth called', data)
  }

  return (
    <div className="container flex justify-center items-center h-screen p-5">
      <div className="w-1/2 justify-center items-center">
        <Text
          classes="font-bold	text-5xl p-2.5"
          name={'Share your Story with RedwoodJS'}
        ></Text>
        <Text
          classes="p-2.5"
          name={
            'Collaborate, get awareness, engage, it will only take a few moments of your time.'
          }
        ></Text>
      </div>
      <div className="w-1/2 justify-center items-center">
        <Text
          classes="font-bold	text-5xl p-2.5"
          name={'Glad to have you here!'}
        ></Text>
        <div className="p-2.5">
          <Button
            name={'Connect with GitHub'}
            onClick={signUpWithGitHub}
          ></Button>
        </div>
      </div>
    </div>
  )
}

export default Login
