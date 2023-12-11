import { ReactNode } from 'react'
import styled from 'styled-components'

type ButtonProps = {
  variant: 'fill' | 'outline' | 'ghost'
  size: 'small' | 'medium' | 'large'
  disabled?: boolean
  isLoading?: boolean
  children: ReactNode
  onClick?: () => void
}

type Sizes = {
  [key in ButtonProps['size']]: {
    [key: string]: unknown
  }
}

const SIZES: Sizes = {
  small: {
    '--borderRadius': '2px',
    '--fontSize': `${16 / 16}rem`,
    '--padding': '6px 12px',
  },
  medium: {
    '--borderRadius': '2px',
    '--fontSize': `${18 / 16}rem`,
    '--padding': '14px 20px',
  },
  large: {
    '--borderRadius': '4px',
    '--fontSize': `${21 / 16}rem`,
    '--padding': '18px 32px',
  },
}

export default function Button({ variant, size, children }: ButtonProps) {
  const styles = SIZES[size]

  let Component
  if (variant === 'fill') {
    Component = FillButton
  } else if (variant === 'outline') {
    Component = OutlinelButton
  } else if (variant === 'ghost') {
    Component = GhostButton
  } else {
    throw new Error(`Unrecognised Button variant: ${variant}`)
  }

  return <Component style={styles}>{children}</Component>
}

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: none;
  border: 2px solid transparent;

  &:focus {
    outline-color: hsl(240deg 100% 60%);
    outline-offset: 4px;
  }
`

const FillButton = styled(ButtonBase)`
  background-color: hsl(240deg 100% 60%);
  color: white;

  &:hover {
    background-color: hsl(235deg 100% 62%);
  }
`

const OutlinelButton = styled(ButtonBase)`
  background-color: white;
  color: hsl(240deg 100% 60%);
  border: 2px solid currentColor;

  &:hover {
    background-color: hsl(235deg 85% 97%);
  }
`

const GhostButton = styled(ButtonBase)`
  color: hsl(240deg 10% 50%);
  background-color: transparent;

  &:focus {
    outline-color: hsl(240deg 10% 50%);
  }

  &:hover {
    background: hsl(240deg 10% 50% / 0.15);
    color: hsl(0deg 0% 0%);
  }
`
