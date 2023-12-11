import { useLocation, useNavigate } from 'react-router-dom'
import RecipeForm from '../../components/RecipeForm'

export default function EditRecipe() {
  const navigator = useNavigate()
  const { state } = useLocation()

  const { recipe } = state;

  const handleCancel = () => {
    navigator(`/recipes/${recipe.id}`)
  }

  return (
    <RecipeForm
      isEditMode={true}
      onCancel={handleCancel}
      onSave={() => { }}
      recipe={recipe}
    />
  )
}
