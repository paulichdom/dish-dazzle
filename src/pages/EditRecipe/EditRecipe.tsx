import { useLocation, useNavigate } from 'react-router-dom'
import RecipeForm, { UpdateRecipeData } from '../../components/RecipeForm'

export default function EditRecipe() {
  const navigator = useNavigate()
  const { state } = useLocation()

  const { recipe } = state

  const handleCancel = () => {
    navigator(`/recipes/${recipe.id}`)
  }

  const handleUpdate = (recipe: { recipe: UpdateRecipeData }) => {
    console.log({ recipe })
  }

  return (
    <RecipeForm
      isEditMode={true}
      onCancel={handleCancel}
      onUpdate={handleUpdate}
      recipe={recipe}
    />
  )
}
