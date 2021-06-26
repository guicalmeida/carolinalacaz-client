import Foto from 'components/Foto'
import { EnsaioUnitProps } from 'types/api'
import * as S from './styles'

const MosaicoEnsaio = ({ EnsaioUnit }: EnsaioUnitProps) => {
  console.log(EnsaioUnit)

  return (
    <S.Container>
      {EnsaioUnit.galeria?.map((foto) => {
        return <Foto url={foto.url} key={foto.name} />
      })}
    </S.Container>
  )
}

export default MosaicoEnsaio
