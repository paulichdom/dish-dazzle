import { useFetch } from './useFetch'

const API_PATHS = {
  GET_ALL_RECIPES: 'https://getrecipes-zazjbx7nka-uc.a.run.app/',
  GET_RECIPE: 'https://getrecipe-zazjbx7nka-uc.a.run.app/',
}

export type Recipe = {
  id: string
  title: string
  dateCreated: string
  authorId: string
  instructions: string[]
  tags: string[]
}

export type RecipesInfo = {
  loading: boolean
  recipe: Recipe | undefined
  recipes: Recipe[] | undefined
  error: Error | undefined
}

export default function useRecipes(recipeId?: string): RecipesInfo {
  const { state: recipeState } = useFetch<{ recipe: Recipe }>(
    API_PATHS.GET_RECIPE,
    {
      searchParams: {
        recipeId: recipeId as string,
      },
      immediate: true,
      skip: !recipeId,
    },
  )

  const {
    loading: recipeLoading,
    data: recipeData,
    error: recipeError,
  } = recipeState

  const { state: recipesState } = useFetch<{ recipes: Recipe[] }>(
    API_PATHS.GET_ALL_RECIPES,
    {
      immediate: true,
      skip: !!recipeId,
    },
  )

  const {
    loading: recipesLoading,
    data: recipesData,
    error: recipesError,
  } = recipesState

  const loading = recipeLoading || recipesLoading
  const recipe = recipeData?.recipe
  const recipes = recipesData?.recipes
  const error = recipeError || recipesError

  return {
    loading,
    recipe,
    recipes,
    error,
  }
}
