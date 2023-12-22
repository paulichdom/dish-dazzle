import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useRecipes, { Recipe } from '../../hooks/useRecipes'
import { BaseButton, Column, Row } from '../../components/Layout'
import RecipeGrid from '../../components/RecipeGrid'
import Search from '../../components/Search'
import Pagination from '../../components/Pagination'
import LoadingSpinner from '../../components/LoadingSpinner'
import RecipeList from '../../components/RecipeList'
import { Grid, List, Plus } from 'react-feather'

export default function Recipes() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [showList, setShowList] = useState(false)

  const { recipes } = useRecipes()

  if (!recipes) return <LoadingSpinner message="Loading recipes ..." />

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query !== searchQuery) setCurrentPage(1)
  }

  const recipesPerPage = 9
  const filteredRecipes = recipes.filter((recipe: Recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = filteredRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe,
  )
  const hasCurrentRecipes = currentRecipes.length > 0

  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <Container>
      <ActionBar>
        <Search onSearch={handleSearch} />
        <ToggleListBtn onClick={() => setShowList((prevValue) => !prevValue)}>
          {showList ? <Grid /> : <List />}
        </ToggleListBtn>
        <AddButton>
          <NavLink to={`/recipes/create`}>
            <Plus />
          </NavLink>
        </AddButton>
      </ActionBar>
      {hasCurrentRecipes ? (
        showList ? (
          <RecipeList recipes={currentRecipes as Recipe[]} />
        ) : (
          <RecipeGrid recipes={currentRecipes as Recipe[]} />
        )
      ) : (
        <MessageContainer>
          No results found for "{searchQuery}". Please try different keywords.
        </MessageContainer>
      )}
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
`

const AddButton = styled(BaseButton)`
  color: #9aa0a6;
  border: 1px solid #9aa0a6;
  background-color: white;
  max-height: 46px;
  transition: all 0.3s ease;

  &:hover {
    color: #5f6368;
    border-color: #5f6368;
    background-color: #f8f9fa;
  }

  &:active {
    color: #202124;
    border-color: #202124;
    background-color: #e8eaed;
  }
`

const ToggleListBtn = styled(AddButton)``

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const MessageContainer = styled.div`
  padding: 20px;
  margin-top: 20px;
  background-color: #ffefef;
  border: 1px solid #ffcccc;
  border-radius: 4px;
  color: #666;
  text-align: center;
`
