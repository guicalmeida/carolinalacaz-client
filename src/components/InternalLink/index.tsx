import { useTheme } from 'hooks/theme'
import { ReactNode } from 'react'
import * as S from './styles'

type ILinkProps = {
  page: string
  useDark: boolean
  children: ReactNode
}

const InternalLink = ({ children, page, useDark }: ILinkProps) => {
  const { turnDark, turnLight } = useTheme()
  const handleToDark = () => {
    turnDark()
  }
  const handleToLight = () => {
    turnLight()
  }
  return (
    <S.InternalLink
      href={page}
      onClick={useDark ? handleToDark : handleToLight}
    >
      {children}
    </S.InternalLink>
  )
}

export default InternalLink
