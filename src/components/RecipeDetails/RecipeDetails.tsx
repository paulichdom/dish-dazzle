import styled from "styled-components";
import { Recipe } from "../Recipe";

const RecipeDetailsPage = ({ recipe }: { recipe: Recipe }) => {
  const { title, dateCreated, instructions, tags } = recipe;
  const imageUrl = "https://source.unsplash.com/random";
  const formattedDate = new Date(dateCreated).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Placeholder Lorem Ipsum text for the description
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Container>
      <HeaderContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <InfoContainer>
          <InfoLabel>Date Created:</InfoLabel>
          <InfoValue>{formattedDate}</InfoValue>
        </InfoContainer>
      </HeaderContainer>
      <RecipeImage src={imageUrl} alt={title} />
      <DetailsContainer>
        <TagsContainer>
          <TagsLabel>Tags:</TagsLabel>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
        <InstructionsContainer>
          <InstructionsLabel>Instructions:</InstructionsLabel>
          <ul>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </InstructionsContainer>
      </DetailsContainer>
      <CTAContainer>
        <EditButton>Edit</EditButton>
        <DeleteButton>Delete</DeleteButton>
      </CTAContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  justify-self: center;
  gap: 16px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 8px;
  gap: 16px;
`;

const RecipeImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0px 8px;
`;

const Title = styled.h1``;

const Description = styled.p``;

const InfoContainer = styled.div``;

const InfoLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const InfoValue = styled.span`
  font-style: italic;
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0px 8px;
  gap: 16px;
`;

const EditButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TagsContainer = styled.div`
`;

const TagsLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
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

const InstructionsContainer = styled.div`
`;

const InstructionsLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

export default RecipeDetailsPage;