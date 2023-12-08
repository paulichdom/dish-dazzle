import styled from 'styled-components'

export default function Error() {
  return (
    <ErrorContainer>
      <h1>Oops!</h1>
      <ErrorMessage>Sorry, an unexpected error has occurred.</ErrorMessage>
    </ErrorContainer>
  )
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`

const ErrorMessage = styled.p`
  margin: 12px 0;
  font-size: 16px;
  color: #333;
`
