import {useAuthenticator} from '@aws-amplify/ui-react'
import Login from './Login'

const AuthWall: React.FC = ({children}) => {
  const {user} = useAuthenticator()
  return user ? (children as unknown as JSX.Element) : <Login />
}

export default AuthWall
