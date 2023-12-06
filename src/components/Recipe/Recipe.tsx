import styled from 'styled-components';

const RecipeComponent = ({ recipe }: { recipe: Recipe }) => {
  const { title, dateCreated, authorId, instructions, tags } = recipe;

  return (
    <RecipeCardWrapper>
      <RecipeTitle>{title}</RecipeTitle>
      <RecipeDetails>
        <p>Date Created: {dateCreated}</p>
        <p>Author ID: {authorId}</p>
        <RecipeInstructions>
          <p>Instructions:</p>
          <ul>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </RecipeInstructions>
        <RecipeTags>Tags: {tags.join(', ')}</RecipeTags>
      </RecipeDetails>
    </RecipeCardWrapper>
  );
};

export default RecipeComponent;

const RecipeCardWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RecipeTitle = styled.h2`
  color: #333;
`;

const RecipeDetails = styled.div`
  margin-top: 8px;
`;

const RecipeInstructions = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const RecipeTags = styled.div`
  margin-top: 8px;
  color: #666;
`;

export type Recipe = {
  title: string;
  dateCreated: string;
  authorId: string;
  instructions: string[];
  tags: string[];
};
