import RecipeGrid from '../../components/RecipeGrid'
import useRecipes, { Recipe } from '../../hooks/useRecipes'

export default function Recipes() {
  const { recipes } = useRecipes()

  if (!recipes) return <p>Loading ...</p>

  return <RecipeGrid recipes={recipes as Recipe[]} />
}
