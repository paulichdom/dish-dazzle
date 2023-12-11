import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Recipe } from '../../hooks/useRecipes'
import { XCircle } from 'react-feather'
import { BaseButton } from '../Layout'

type ModalProps = {
  recipe?: Recipe
  isEditMode: boolean
  onSave: (recipe: Recipe) => void
  onCancel: () => void
}

const Modal: React.FC<ModalProps> = ({
  recipe,
  isEditMode,
  onSave,
  onCancel,
}) => {
  const [title, setTitle] = useState('')
  const [instructions, setInstructions] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [instructionInput, setInstructionInput] = useState('')
  const [tagInput, setTagInput] = useState('')

  useEffect(() => {
    if (isEditMode && recipe) {
      setTitle(recipe.title)
      setInstructions(recipe.instructions)
      setTags(recipe.tags)
    }
  }, [isEditMode, recipe])

  const handleAddInstruction = () => {
    setInstructions([...instructions, instructionInput])
    setInstructionInput('')
  }

  const handleRemoveInstruction = (index: number) => {
    setInstructions(instructions.filter((_, idx) => idx !== index))
  }

  const handleAddTag = () => {
    setTags([...tags, tagInput])
    setTagInput('')
  }

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, idx) => idx !== index))
  }

  const handleSaveClick = () => {
    if (recipe) {
      onSave({ ...recipe, title, instructions, tags })
    } else {
      onSave({
        id: '',
        title,
        dateCreated: '',
        authorId: '',
        instructions,
        tags,
      })
    }
  }

  return (
    <ModalContainer>
      <ModalHeader>{isEditMode ? 'Edit Recipe' : 'Create Recipe'}</ModalHeader>
      <div>
        <label>Title:</label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <ListContainer>
        <label>Instructions:</label>
        {instructions.map((instruction, index) => (
          <ListItem key={index}>
            {instruction}
            <RemoveButton onClick={() => handleRemoveInstruction(index)}>
              <XCircle />
            </RemoveButton>
          </ListItem>
        ))}
        <Input
          type="text"
          value={instructionInput}
          onChange={(e) => setInstructionInput(e.target.value)}
        />
        <Button onClick={handleAddInstruction}>Add Instruction</Button>
      </ListContainer>
      <ListContainer>
        <label>Tags:</label>
        {tags.map((tag, index) => (
          <ListItem key={index}>
            {tag}
            <RemoveButton onClick={() => handleRemoveTag(index)}>
              <XCircle />
            </RemoveButton>
          </ListItem>
        ))}
        <Input
          type="text"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
        />
        <Button onClick={handleAddTag}>Add Tag</Button>
      </ListContainer>
      <CTAContainer>
        <Button onClick={handleSaveClick}>
          {isEditMode ? 'Update' : 'Save'}
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </CTAContainer>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 500px;
  margin: 40px auto;
`

const ModalHeader = styled.h3`
  margin-bottom: 20px;
  color: #333;
`

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
`

const Button = styled(BaseButton)`
  color: #4285f4;
  border-color: #4285f4;
  max-height: 46px;

  &:hover {
    color: #357ae8;
    border-color: #789fde;
    background-color: #e8f4f8;
  }
`

const ListContainer = styled.div`
  margin-bottom: 20px;
`

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
`

const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #ff4d4f;
  cursor: pointer;
`

const CTAContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 16px;
`

export default Modal
