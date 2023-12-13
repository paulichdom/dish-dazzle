import React, { useState, ChangeEvent, useEffect, /* KeyboardEvent */ } from 'react'
import styled from 'styled-components'

type SearchInputProps = {
  onSearch: (query: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(inputValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue, onSearch]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <StyledInput
      type="text"
      value={inputValue}
      onChange={handleInputChange}
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
