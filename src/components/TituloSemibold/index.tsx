import { ReactNode } from 'react'
import * as S from './styles'

type TSProps = {
  children: ReactNode
}

const TituloSemibold = ({ children }: TSProps) => {
  return <S.TituloSemibold>{children}</S.TituloSemibold>
}

export default TituloSemibold
