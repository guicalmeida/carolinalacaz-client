import { ReactNode } from 'react'
import * as S from './styles'

type TextCorridoProps = {
  children: ReactNode
}

const TextoCorrido = ({ children }: TextCorridoProps) => {
  return <S.TextoCorrido>{children}</S.TextoCorrido>
}

export default TextoCorrido
