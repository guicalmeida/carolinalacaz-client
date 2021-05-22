import * as S from './styles'

type PremioProps = {
  titulo: string
  descricao: string
}

type PremiosProps = {
  premios: PremioProps[]
}

const Premio = ({ titulo, descricao }: PremioProps) => {
  return (
    <S.PremioWrapper>
      <S.PremioTitulo>{titulo}</S.PremioTitulo>
      <S.PremioDesc>{descricao}</S.PremioDesc>
    </S.PremioWrapper>
  )
}

const Premios = ({ premios }: PremiosProps) => {
  return (
    <S.Container>
      {premios.map((premio) => {
        return (
          <Premio
            descricao={premio.descricao}
            titulo={premio.titulo}
            key={premio.titulo}
          />
        )
      })}
    </S.Container>
  )
}

export default Premios
