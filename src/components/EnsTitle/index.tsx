import { ReactChild } from 'react'
import * as S from './styles'

type TitleProps = {
  children: ReactChild
}

const EnsTitle = ({ children }: TitleProps) => {
  return <S.EnsTitle>{children}</S.EnsTitle>
}

export default EnsTitle
