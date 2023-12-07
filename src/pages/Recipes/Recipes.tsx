import PageLayout from '../../components/PageLayout';
import RecipeGrid from '../../components/RecipeGrid';
import { recipes } from '../../mocks/recipes';

export default function Recipes() {
  return (
    <PageLayout>
      <RecipeGrid recipes={recipes} />
    </PageLayout>
  );
}
