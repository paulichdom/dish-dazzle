import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../../auth/AuthContext'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const { login, isLoading } = useAuth()

  const validateEmail = (value: string) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    return isValidEmail
  }

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()

    setEmailError('')
    setPasswordError('')

    if (!email.trim()) {
      setEmailError('Email is required.')
      return
    }

    if (!validateEmail(email)) {
      setEmailError('Invalid email format.')
      return
    }

    if (!password.trim()) {
      setPasswordError('Password is required.')
      return
    }

    login(email, password)
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title>Log in with email</Title>
        <Label>
          <LabelText>Email:</LabelText>
          <Input
            type="email"
            placeholder="email@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ErrorMessage>{emailError}</ErrorMessage>
        </Label>
        <Label>
          <LabelText>Password:</LabelText>
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </Label>
        <ErrorMessage>{passwordError}</ErrorMessage>
        <LoginButton type="submit" disabled={isLoading} isLoading={isLoading}>
          {isLoading ? <LoadingSpinner /> : 'Log In'}
        </LoginButton>
        <SignUpLinkContainer>
          <SignUpText>
            Don't have an account?
            <SignUpLink to="/register">Join now</SignUpLink>
          </SignUpText>
        </SignUpLinkContainer>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

const Title = styled.h2`
  padding-bottom: 16px;
`

const Form = styled.form`
  width: max-content;
  margin: 16px auto;
  border: 1px dotted silver;
  border-radius: 2px;
  padding: 26px 32px 32px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 16px;
`

const LabelText = styled.span`
  display: block;
  margin-bottom: 4px;
  color: #333;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
`

const Input = styled.input`
  display: block;
  width: 325px;
  border: 1px solid black;
  border-bottom-width: 2px;
  padding: 6px 8px;
  margin-top: 4px;
  border-radius: 2px 2px 3px 3px;

  &:focus {
    outline: 3px auto blue;
    outline-offset: 2px;
    border-color: transparent;
  }
`

const LoginButton = styled.button<{ isLoading: boolean }>`
  display: block;
  margin-top: 40px;
  width: 100%;
  background: black;
  color: white;
  padding: 8px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 3px;
  cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};

  &:focus {
    outline: 3px auto blue;
    background: blue;
    outline-offset: 2px;
  }
`

const LoadingSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #fff;
  width: 20px;
  height: 20px;
  margin-right: auto;
  margin-left: auto;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const SignUpLinkContainer = styled.div`
  padding: 16px 0px 0px;
`

const SignUpText = styled.span`
  font-size: 14px;
`

const SignUpLink = styled(Link)`
  font-size: 14px;
  padding-left: 4px;
  color: inherit;
`

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 4px;
`
