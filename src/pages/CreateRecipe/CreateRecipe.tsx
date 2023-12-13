import { useNavigate } from 'react-router-dom'
import RecipeForm, { SaveRecipeData } from '../../components/RecipeForm'
import useModifyRecipe from '../../hooks/useModifyRecipe'

export default function CreateRecipe() {
  const { saveRecipe, loading: saveLoading } = useModifyRecipe('add')
  const navigator = useNavigate()

  const handleCancel = () => {
    navigator('/recipes')
  }

  const handleSave = (recipe: SaveRecipeData) => {
    saveRecipe(recipe)
  }

  return (
    <RecipeForm
      isEditMode={false}
      onCancel={handleCancel}
      onSave={handleSave}
      loading={saveLoading}
    />
  )
}
