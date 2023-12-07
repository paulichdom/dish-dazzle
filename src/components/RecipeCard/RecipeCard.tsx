import styled, { css } from "styled-components";

type RecipeCardProps = {
  imageUrl: string;
  recipeName: string;
  tags: string[];
};

export default function RecipeCard({
  imageUrl,
  recipeName,
  tags,
}: RecipeCardProps) {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={recipeName} />
      <CardContent>
        <RecipeName>{recipeName}</RecipeName>
        <TagsContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
      </CardContent>
    </CardContainer>
  );
}

const scaleOnHover = css`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  ${scaleOnHover}
`;

const CardImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const RecipeName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  color: #333;
  font-size: 0.8rem;
  padding: 4px 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
`;
