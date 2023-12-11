import { useNavigate } from 'react-router-dom'
import { RecipeWithoutId } from '../components/RecipeForm'
import { httpMethods, useFetch } from './useFetch'

const API_PATHS = {
    ADD_RECIPE: 'https://addrecipe-zazjbx7nka-uc.a.run.app/',
    EDIT_RECIPE: 'https://editrecipe-zazjbx7nka-uc.a.run.app/',
}

type OnSaveResponse = {
    message: string
    recipeId: string
}

export type SaveRecipe = {
    saveRecipe: (body: { recipe: RecipeWithoutId }) => void
    recipeId: string
}

export default function useSaveRecipe(): SaveRecipe {
    const navigator = useNavigate()

    const { state, action: saveRecipe } = useFetch<OnSaveResponse>(
        API_PATHS.ADD_RECIPE,
        {
            method: httpMethods.POST,
            immediate: false,
            onCompleted: () => navigator('/recipes'),
        },
    )

    return {
        saveRecipe,
        recipeId: state.data?.recipeId as string,
    }
}
