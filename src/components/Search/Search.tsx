import React, { useState, ChangeEvent, KeyboardEvent } from 'react'
import styled from 'styled-components'

type SearchInputProps = {
  onSearch: (query: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(inputValue)
    }
  }

  return (
    <StyledInput
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
      placeholder="Search recipes..."
    />
  )
}

const StyledInput = styled.input`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 320px;
`

export default SearchInput
