import { useLocation, useNavigate } from 'react-router-dom'
import RecipeForm, { UpdateRecipeData } from '../../components/RecipeForm'
import useModifyRecipe from '../../hooks/useModifyRecipe'

export default function EditRecipe() {
  const navigator = useNavigate()
  const { state } = useLocation()

  const { recipe } = state
  const { editRecipe, loading: updateLoading } = useModifyRecipe(
    'edit',
    recipe.id,
  )

  const handleCancel = () => {
    navigator(`/recipes/${recipe.id}`)
  }

  const handleUpdate = (recipe: UpdateRecipeData) => {
    editRecipe(recipe)
  }

  return (
    <RecipeForm
      isEditMode={true}
      onCancel={handleCancel}
      onUpdate={handleUpdate}
      recipe={recipe}
      loading={updateLoading}
    />
  )
}
