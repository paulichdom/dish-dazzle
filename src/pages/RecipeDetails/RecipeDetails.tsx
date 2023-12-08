import { useParams } from 'react-router-dom'
import RecipeItemDetail from '../../components/RecipeItemDetail'
import { Recipe, recipes } from '../../mocks/recipes'

export default function RecipeDetails() {
  const params = useParams()

  const recipe = recipes.find((recipe) => recipe.id === params.id)
  return <RecipeItemDetail recipe={recipe as Recipe} />
}
