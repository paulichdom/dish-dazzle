import styled from "styled-components";
import { Recipe } from "../../mocks/recipes";
import RecipeCard from "../RecipeCard";
import { faker } from "@faker-js/faker";

type RecipeGridProps = {
  recipes: Recipe[];
};

export default function RecipeGrid(props: RecipeGridProps) {
  const { recipes } = props;
  console.log({ recipes });
  return (
    <GridLayout>
      {recipes.map(({ title, tags }, index) => (
        <RecipeCard
          key={index}
          imageUrl={faker.image.urlLoremFlickr({
            category: "food",
          })}
          recipeName={title}
          tags={tags}
        />
      ))}
    </GridLayout>
  );
}

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  //grid-template-rows: 300px;
  gap: 1rem;
`;
