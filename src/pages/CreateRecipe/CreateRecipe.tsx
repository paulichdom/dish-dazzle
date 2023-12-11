import { useNavigate } from 'react-router-dom'
import RecipeForm, { RecipeWithoutId } from '../../components/RecipeForm'
import useSaveRecipe from '../../hooks/useSaveRecipe'

export default function CreateRecipe() {
  const { saveRecipe } = useSaveRecipe()
  const navigator = useNavigate()

  const handleCancel = () => {
    navigator('/recipes')
  }

  const handleSave = (recipe: { recipe: RecipeWithoutId }) => {
    saveRecipe(recipe)
  }

  return (
    <RecipeForm isEditMode={false} onCancel={handleCancel} onSave={handleSave} />
  )
}
