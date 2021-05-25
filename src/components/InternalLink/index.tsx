import { useTheme } from 'hooks/theme'
import Link from 'next/link'
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
    <Link href={page}>
      <S.InternalLink onClick={useDark ? handleToDark : handleToLight}>
        {children}
      </S.InternalLink>
    </Link>
  )
}

export default InternalLink
