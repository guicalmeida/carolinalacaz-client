import EnsTitle from 'components/EnsTitle'
import { EnsaioUnitProps } from 'types/api'
import * as S from './styles'

const EnsaioHeader = ({ EnsaioUnit }: EnsaioUnitProps) => {
  return (
    <S.Container>
      <EnsTitle>{EnsaioUnit.Nome}</EnsTitle>
      <S.Subtitle>
        {EnsaioUnit.Cidade.Cidade}, {EnsaioUnit.Ano.Ano}
      </S.Subtitle>
      <S.Description>{EnsaioUnit.descricao_curta}</S.Description>
    </S.Container>
  )
}

export default EnsaioHeader
