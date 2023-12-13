import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react'
import { httpMethods } from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage'
import toast from 'react-hot-toast'

type AuthContextValue = {
  accessToken: string | null
  isLoading: boolean
  signup: (email: string, password: string) => void
  login: (email: string, password: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue>({
  accessToken: null as never,
  isLoading: false,
  signup: () => {},
  login: () => {},
  logout: () => {},
})

const path = {
  LOGIN_USER: 'https://login-zazjbx7nka-uc.a.run.app/',
  ADD_USER: 'https://addappuser-zazjbx7nka-uc.a.run.app/',
}

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const navigator = useNavigate()

  const [accessToken, setAccessToken] = useLocalStorage<string | null>(
    'accessToken',
    null,
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signup = (email: string, password: string) => {
    setIsLoading(true)

    const data = {
      email,
      password,
    }

    fetch(path.ADD_USER, {
      method: httpMethods.POST,
      headers: {
        'Content-Type': 'application/json',
        authid: import.meta.env.VITE_API_ACCESS_TOKEN,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.appUserId) {
          // TODO: Show success msg
          navigator('/login')
          toast.success('Successfully registered! Please log in to continue')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
        toast.error('Error while registering')
      })
      .finally(() => setIsLoading(false))
  }

  const login = (email: string, password: string) => {
    setIsLoading(true)

    const data = {
      email,
      password,
    }

    fetch(path.LOGIN_USER, {
      method: httpMethods.POST,
      headers: {
        'Content-Type': 'application/json',
        authid: import.meta.env.VITE_API_ACCESS_TOKEN,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        const token = data.appUser.id ?? null
        setAccessToken(token)
        navigator('/recipes')
        toast.success('Login successful!')
      })
      .catch((error) => {
        console.error('Error:', error)
        toast.error('Invalid username or password')
      })
      .finally(() => setIsLoading(false))
  }

  const logout = () => {
    setAccessToken(null)
    toast.success("You're logged out")
  }

  const value = {
    accessToken,
    isLoading,
    signup,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextValue => {
  return useContext(AuthContext)
}
