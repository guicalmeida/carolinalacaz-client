import { PremioProps } from 'types/api'
import * as S from './styles'

const Premios = ({ premio }: PremioProps) => {
  return (
    <S.Container>
      {premio.itens.map((premio) => {
        return (
          <S.PremioWrapper key={premio.nome}>
            <S.PremioTitulo>
              {premio.nome} - {premio.ano.ano}
            </S.PremioTitulo>
            <S.PremioDesc>{premio.descricao}</S.PremioDesc>
          </S.PremioWrapper>
        )
      })}
    </S.Container>
  )
}

export default Premios
