import { Link } from 'react-router-dom'
import { faker } from '@faker-js/faker'
import styled from 'styled-components'
import { Recipe } from '../../hooks/useRecipes'
import RecipeCard from '../RecipeCard'

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
  gap: 1rem;
`

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`
