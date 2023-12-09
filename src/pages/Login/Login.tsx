import styled from 'styled-components'
import LoginForm from '../../components/LoginForm'
import { useAuth } from '../../auth/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigator = useNavigate()
  const { accessToken } = useAuth()

  useEffect(() => {
    if (accessToken) navigator('/recipes')
  }, [navigator, accessToken])

  return (
    <Container>
      <LoginForm />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`
