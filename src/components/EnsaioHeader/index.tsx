import EnsTitle from 'components/EnsTitle'
import { ReactNode } from 'react'
import * as S from './styles'

type EnsaioProps = {
  titulo: string
  ano: number
  cidade: string
  children: ReactNode
}

const EnsaioHeader = ({ titulo, ano, cidade, children }: EnsaioProps) => {
  return (
    <S.Container>
      <EnsTitle>{titulo}</EnsTitle>
      <S.Subtitle>
        {ano},{cidade}
      </S.Subtitle>
      <S.Description>{children}</S.Description>
    </S.Container>
  )
}

export default EnsaioHeader
