import { EnsaioUnitProps } from 'types/api'
import * as S from './styles'

export type MosaicoEnsaioProps = {
  fotos: {
    imgSrc: string
  }[]
}
const MosaicoEnsaio = ({ EnsaioUnit }: EnsaioUnitProps) => {
  return (
    <S.Container>
      {EnsaioUnit.Galeria.map((foto) => {
        return (
          <S.Foto src={'http://localhost:1337' + foto.url} key={foto.name} />
        )
      })}
    </S.Container>
  )
}

export default MosaicoEnsaio
