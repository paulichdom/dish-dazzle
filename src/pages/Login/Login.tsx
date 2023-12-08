import styled from 'styled-components'
import LoginForm from '../../components/LoginForm'

export default function Login() {
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
