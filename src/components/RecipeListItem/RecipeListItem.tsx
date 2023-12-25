import styled from 'styled-components'
import { BaseButton, Row } from '../Layout'
import { Recipe } from '../../hooks/useRecipes'
import { Calendar, MoreHorizontal, Tag as TagIcon } from 'react-feather'
import toast from 'react-hot-toast'

type RecipeListItemProps = {
  recipe: Recipe
  imageUrl: string
}

export default function RecipeListItem({
  recipe,
  imageUrl,
}: RecipeListItemProps) {
  return (
    <Container>
      <TitleWrapper>
        <Image src={imageUrl} alt={recipe.title} />
        <Text>{recipe.title}</Text>
      </TitleWrapper>
      <Section>
        <Calendar />
        <Text>May 10, 2023</Text>
      </Section>
      <Section>
        <TagIcon />
        {recipe.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Section>
      <ButtonContainer>
        <MoreButton
          onClick={(event) => {
            event.preventDefault()
            toast.success('New feature comming soon ...')
          }}
        >
          <MoreHorizontal />
        </MoreButton>
      </ButtonContainer>
    </Container>
  )
}

const Container = styled(Row)`
  padding: 16px 32px;
  gap: 64px;
  align-items: center;
  justify-content: space-between;
`

const Image = styled.img`
  min-height: 50px;
  min-width: 50px;
  max-height: 50px;
  max-width: 50px;
  border-radius: 50%;
  object-fit: cover;
`

const TitleWrapper = styled(Row)`
  align-items: center;
  gap: 32px;
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Text = styled.div`
  color: #333;
  font-weight: 600;
`
const Section = styled(Row)`
  color: grey;
  gap: 8px;
  width: 200px;
  flex-wrap: wrap;
`

const MoreButton = styled(BaseButton)`
  background-color: inherit;
  border: none;
  padding: 4px 8px;

  &:hover {
    background-color: #f8f9fa;
  }
`
const ButtonContainer = styled(Row)`
  flex-direction: row-reverse;
`
const Tag = styled.span`
  background-color: #f0f0f0;
  color: #333;
  font-size: 0.8rem;
  padding: 4px 8px;
  border-radius: 4px;
`
