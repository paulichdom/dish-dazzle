import { useState, ChangeEvent, useEffect } from 'react'
import styled from 'styled-components'

type SearchInputProps = {
  onSearch: (query: string) => void
  isDisabled: boolean
}

export default function SearchInput({
  onSearch,
  isDisabled,
}: SearchInputProps) {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(inputValue)
    }, 300)

    return () => clearTimeout(timer)
  }, [inputValue, onSearch])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <StyledInput
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Search recipes..."
      disabled={isDisabled}
    />
  )
}

const StyledInput = styled.input`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 320px;
`
