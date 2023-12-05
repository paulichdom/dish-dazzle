import './App.css'
import styled from 'styled-components'

function App() {
  return (
    <Wrapper>Hi there!</Wrapper>
  )
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;