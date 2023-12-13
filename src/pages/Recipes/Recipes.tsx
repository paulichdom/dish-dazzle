import styled from 'styled-components'
import { BaseButton, Column, Row } from '../../components/Layout'
import RecipeGrid from '../../components/RecipeGrid'
import useRecipes, { Recipe } from '../../hooks/useRecipes'
import Search from '../../components/Search'
import Pagination from '../../components/Pagination'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../../components/LoadingSpinner'

export default function Recipes() {
  const [currentPage, setCurrentPage] = useState(1)

  const { recipes } = useRecipes()

  if (!recipes) return <LoadingSpinner message="Loading recipes ..." />

  const handleSearch = (query: string) => {
    console.log('Search query:', query)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const totalPages = 10

  return (
    <Container>
      <ActionBar>
        <Search onSearch={handleSearch} />
        <AddButton>
          <NavLink to={`/recipes/create`}>Add recipe</NavLink>
        </AddButton>
      </ActionBar>
      <RecipeGrid recipes={recipes as Recipe[]} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Container>
  )
}

const Container = styled(Column)`
  gap: 32px;
`

const ActionBar = styled(Row)`
  gap: 16px;
  justify-content: flex-end;
  align-items: baseline;
`

const AddButton = styled(BaseButton)`
  color: #4285f4;
  border-color: #4285f4;
  max-height: 46px;

  &:hover {
    color: #357ae8;
    border-color: #789fde;
    background-color: #e8f4f8;
  }
`

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`
