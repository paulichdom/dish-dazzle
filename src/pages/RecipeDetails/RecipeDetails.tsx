import { useParams } from 'react-router-dom'
import RecipeItemDetail from '../../components/RecipeItemDetail'
import useRecipes, { Recipe } from '../../hooks/useRecipes'
import useModifyRecipe from '../../hooks/useModifyRecipe'
import LoadingSpinner from '../../components/LoadingSpinner'

export default function RecipeDetails() {
  const params = useParams()

  const { recipe } = useRecipes(params?.id)

  const { deleteRecipe, loading: deleteLoading } = useModifyRecipe('delete', params.id)

  const handleDelete = () => {
    deleteRecipe()
  }

  if (!recipe) return <LoadingSpinner message='Loading recipe ...' />

  return <RecipeItemDetail recipe={recipe as Recipe} onDelete={handleDelete} loading={deleteLoading} />
}
