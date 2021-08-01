import EnsTitle from 'components/EnsTitle'
import { EnsaioUnitProps } from 'types/api'
import * as S from './styles'
import parse from 'html-react-parser'

const EnsaioHeader = ({ EnsaioUnit }: EnsaioUnitProps) => {
  return (
    <S.Container>
      <EnsTitle>{EnsaioUnit?.nome ? EnsaioUnit.nome : ''}</EnsTitle>
      <S.Subtitle>
        {EnsaioUnit?.cidade?.nome ? EnsaioUnit.cidade.nome : ''}
        {EnsaioUnit?.ano?.ano ? ', ' + EnsaioUnit.ano.ano : ''}
      </S.Subtitle>
      <S.Description>
        {EnsaioUnit?.descricaoCurta
          ? parse(`${EnsaioUnit.descricaoCurta}`)
          : ''}
      </S.Description>
    </S.Container>
  )
}

export default EnsaioHeader
