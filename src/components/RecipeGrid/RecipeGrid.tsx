import styled from 'styled-components'
import { Recipe } from '../../mocks/recipes'
import RecipeCard from '../RecipeCard'
import { faker } from '@faker-js/faker'
import { Link } from 'react-router-dom'

type RecipeGridProps = {
  recipes: Recipe[]
}

export default function RecipeGrid(props: RecipeGridProps) {
  const { recipes } = props
  return (
    <GridLayout>
      {recipes.map(({ id, title, tags }, index) => (
        <Link key={index} to={`/recipes/${id}`}>
          <RecipeCard
            recipeId={id}
            imageUrl={faker.image.urlLoremFlickr({
              category: 'food',
            })}
            recipeName={title}
            tags={tags}
          />
        </Link>
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
