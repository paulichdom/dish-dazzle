import RecipeGrid from '../../components/RecipeGrid'
import { recipes } from '../../mocks/recipes'

export default function Recipes() {
  return <RecipeGrid recipes={recipes} />
}
