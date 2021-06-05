import { PremioProps } from 'types/api'
import * as S from './styles'

const Premios = ({ premio }: PremioProps) => {
  return (
    <S.Container>
      {premio.Premio.map((premio) => {
        return (
          <S.PremioWrapper key={premio.Titulo}>
            <S.PremioTitulo>
              {premio.Titulo} - {premio.ano.Ano}
            </S.PremioTitulo>
            <S.PremioDesc>{premio.Descricao}</S.PremioDesc>
          </S.PremioWrapper>
        )
      })}
    </S.Container>
  )
}

export default Premios
