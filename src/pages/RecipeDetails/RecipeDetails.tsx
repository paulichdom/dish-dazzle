import { useParams } from 'react-router-dom'
import RecipeItemDetail from '../../components/RecipeItemDetail'
import useRecipes, { Recipe } from '../../hooks/useRecipes'

export default function RecipeDetails() {
  const params = useParams()

  const { recipe } = useRecipes(params?.id)

  if (!recipe) return <p>Loading ...</p>

  return <RecipeItemDetail recipe={recipe as Recipe} />
}
