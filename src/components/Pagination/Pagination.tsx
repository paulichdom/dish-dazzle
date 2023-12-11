import React from 'react'
import styled from 'styled-components'

type PaginationProps = {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <PageNumber
          key={number}
          isActive={number === currentPage}
          onClick={() => onPageChange(number)}
        >
          {number}
        </PageNumber>
      ))}
    </PaginationContainer>
  )
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const PageNumber = styled.button<{ isActive: boolean }>`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  background-color: ${(props) => (props.isActive ? '#007bff' : '#fff')};
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`

export default Pagination
