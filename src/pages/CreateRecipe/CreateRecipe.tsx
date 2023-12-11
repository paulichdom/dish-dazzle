import { useNavigate } from 'react-router-dom'
import RecipeForm from '../../components/RecipeForm'

export default function CreateRecipe() {
  const navigator = useNavigate()

  const handleCancel = () => {
    navigator('/recipes')
  }
  return (
    <RecipeForm isEditMode={false} onCancel={handleCancel} onSave={() => {}} />
  )
}
