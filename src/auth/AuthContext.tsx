import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react'
import { httpMethods } from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

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

  const [accessToken, setAccessToken] = useState<string | null>(null)
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
          navigator('/login')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
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
      })
      .catch((error) => {
        console.error('Error:', error)
      })
      .finally(() => setIsLoading(false))
  }

  const logout = () => {
    setAccessToken(null)
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
