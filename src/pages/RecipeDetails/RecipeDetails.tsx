import { useParams } from "react-router-dom";
import RecipeItemDetail from "../../components/RecipeItemDetail";
import { Recipe, recipes } from "../../mocks/recipes";
import PageLayout from "../../components/PageLayout";

export default function RecipeDetails() {
    const params = useParams()

    const recipe = recipes.find(recipe => recipe.id === params.id)
    return (
        <PageLayout>
            <RecipeItemDetail recipe={recipe as Recipe} />
        </PageLayout>
    )
}