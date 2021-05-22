import * as S from './styles'

export type EnsaioFotosProps = {
  imgSrc: string
}

export type MosaicoEnsaioPrios = {
  fotos: EnsaioFotosProps[]
}

const EnsaioFoto = ({ imgSrc }: EnsaioFotosProps) => {
  return <S.Foto src={imgSrc} />
}

const MosaicoEnsaio = ({ fotos }: MosaicoEnsaioPrios) => {
  return (
    <S.Container>
      {fotos.map((foto) => {
        return <EnsaioFoto imgSrc={foto.imgSrc} key={foto.imgSrc} />
      })}
    </S.Container>
  )
}

export default MosaicoEnsaio
