import { useNavigate } from 'react-router-dom'
import { SaveRecipeData, UpdateRecipeData } from '../components/RecipeForm'
import { httpMethods, useFetch } from './useFetch'
import toast from 'react-hot-toast'

const API_PATHS = {
  ADD_RECIPE: 'https://addrecipe-zazjbx7nka-uc.a.run.app/',
  EDIT_RECIPE: 'https://editrecipe-zazjbx7nka-uc.a.run.app/',
  DELETE_RECIPE: 'https://deleterecipe-zazjbx7nka-uc.a.run.app/',
}

export type SaveRecipe = (body: SaveRecipeData) => void
export type EditRecipe = (body: UpdateRecipeData) => void
export type DeleteRecipe = (body?: unknown) => void

export type ModifyRecipeValue = {
  saveRecipe: SaveRecipe
  editRecipe: EditRecipe
  deleteRecipe: DeleteRecipe
  loading: boolean
  error: Error | undefined
}

export type ModifyRecipeMethod = 'add' | 'edit' | 'delete'

export default function useModifyRecipe(
  method: ModifyRecipeMethod,
  recipeId: string | undefined = '',
): ModifyRecipeValue {
  const navigator = useNavigate()

  const { state: saveState, action: saveRecipe } = useFetch<{
    message: string
    recipeId: string
  }>(API_PATHS.ADD_RECIPE, {
    method: httpMethods.POST,
    immediate: false,
    onCompleted: () => {
      navigator('/recipes')
      toast.success('Recipe successfully added!')
    },
    skip: method !== 'add',
  })

  const { loading: saveLoading, error: saveError } = saveState

  const { state: editState, action: editRecipe } = useFetch<{
    message: string
  }>(API_PATHS.EDIT_RECIPE, {
    method: httpMethods.PATCH,
    immediate: false,
    onCompleted: () => {
      if (recipeId) navigator(`/recipes/${recipeId}`)
      toast.success('Recipe successfully updated!')
    },
    skip: method !== 'edit',
  })

  const { loading: editLoading, error: editError } = editState

  const { state: deleteState, action: deleteRecipe } = useFetch<{
    message: string
  }>(API_PATHS.DELETE_RECIPE, {
    searchParams: {
      recipeId,
    },
    method: httpMethods.DELETE,
    immediate: false,
    onCompleted: () => {
      navigator('/recipes')
      toast.success('Recipe successfully deleted!')
    },
    skip: method !== 'delete',
  })

  const { loading: deleteLoading, error: deleteError } = deleteState

  const loading = saveLoading || editLoading || deleteLoading
  const error = saveError || editError || deleteError

  return {
    saveRecipe,
    editRecipe,
    deleteRecipe,
    loading,
    error,
  }
}
