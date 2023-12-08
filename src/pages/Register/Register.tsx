import styled from 'styled-components'
import RegisterForm from '../../components/RegisterForm'

export default function Register() {
  return (
    <Container>
      <RegisterForm />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`
