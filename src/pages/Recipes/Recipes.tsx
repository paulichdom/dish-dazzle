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
import { Filter, Grid, List, Plus } from 'react-feather'
import { useAuth } from '../../auth/AuthContext'

export default function Recipes() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [showList, setShowList] = useState(false)
  const [showMyRecipes, setShowMyRecipes] = useState(false)

  const { recipes } = useRecipes()
  const { accessToken } = useAuth()

  if (!recipes) return <LoadingSpinner message="Loading recipes ..." />

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query !== searchQuery) setCurrentPage(1)
  }

  console.log({ recipes, accessToken })

  const recipesPerPage = 9

  const myRecipes = recipes.filter((recipe) => {
    if (showMyRecipes) return recipe.authorId === accessToken
    return true
  })

  const hasMyRecipes = myRecipes.length > 0

  const filteredRecipes = myRecipes.filter((recipe: Recipe) =>
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
        <Search onSearch={handleSearch} isDisabled={!hasCurrentRecipes} />
        <ActionBarButton
          onClick={() => setShowMyRecipes((prevValue) => !prevValue)}
        >
          <Filter />
        </ActionBarButton>
        <ActionBarButton onClick={() => setShowList((prevValue) => !prevValue)}>
          {showList ? <Grid /> : <List />}
        </ActionBarButton>
        <ActionBarButton>
          <NavLink to={`/recipes/create`}>
            <Plus />
          </NavLink>
        </ActionBarButton>
      </ActionBar>
      {hasCurrentRecipes ? (
        showList ? (
          <RecipeList recipes={currentRecipes as Recipe[]} />
        ) : (
          <RecipeGrid recipes={currentRecipes as Recipe[]} />
        )
      ) : (
        <MessageContainer>
          {hasMyRecipes ? (
            `No results found for ${searchQuery}. Please try different keywords.`
          ) : (
            <>
              It looks like you haven't added any recipes yet!{' '}
              <CreateRecipeLink to={`/recipes/create`}>
                Start creating your culinary collection now.
              </CreateRecipeLink>
            </>
          )}
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

const ActionBarButton = styled(BaseButton)`
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

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const CreateRecipeLink = styled(Link)`
  color: inherit;
`

const MessageContainer = styled.div`
  padding: 20px;
  margin-top: 20px;
  background-color: #f9f5f1;
  border: 1px solid #e6e0db;
  border-radius: 6px;
  color: #333;
  text-align: center;
`
