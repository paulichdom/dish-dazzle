import styled from 'styled-components'
import { Column } from '../Layout'
import { Recipe } from '../../hooks/useRecipes'
import RecipeListItem from '../RecipeListItem/RecipeListItem'
import { Link } from 'react-router-dom'
import { faker } from '@faker-js/faker'

type RecipeListProps = {
  recipes: Recipe[]
}

export default function RecipeList({ recipes }: RecipeListProps) {
  return (
    <Container>
      {recipes.map((recipe) => (
        <NavLink key={recipe.id} to={`/recipes/${recipe.id}`}>
          <RecipeListItem
            recipe={recipe}
            imageUrl={faker.image.urlLoremFlickr({
              category: 'food',
            })}
          />
        </NavLink>
      ))}
    </Container>
  )
}

const Container = styled(Column)`
  border-radius: 6px;
  border: 1px solid #9aa0a6;
  overflow: hidden;

  & a:not(:last-of-type) {
    border-bottom: 1px solid #9aa0a6;
  }
`

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    background-color: #e8eaed;
  }
`
