import styled from 'styled-components'
import RecipeCard from '../RecipeCard'
import { faker } from '@faker-js/faker'
import { Link } from 'react-router-dom'
import { Recipe } from '../../hooks/useRecipes'

type RecipeGridProps = {
  recipes: Recipe[]
}

export default function RecipeGrid(props: RecipeGridProps) {
  const { recipes } = props
  return (
    <GridLayout>
      {recipes.map(({ id, title, tags }, index) => (
        <NavLink key={index} to={`/recipes/${id}`}>
          <RecipeCard
            recipeId={id}
            imageUrl={faker.image.urlLoremFlickr({
              category: 'food',
            })}
            recipeName={title}
            tags={tags}
          />
        </NavLink>
      ))}
    </GridLayout>
  )
}

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  //grid-template-rows: 300px;
  gap: 1rem;
`

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`
