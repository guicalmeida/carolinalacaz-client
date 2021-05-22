import Link from 'next/link'
import * as S from './styles'

export type FotoProps = {
  titulo: string
  estudio?: string
  cidade: string
  ano: number
  imgSrc: string
  projectLink?: string
}

export type MosaicoProps = {
  fotos: FotoProps[]
}

const Foto = ({
  projectLink,
  titulo,
  ano,
  cidade,
  estudio,
  imgSrc
}: FotoProps) => {
  return (
    <Link href={projectLink ? projectLink : ''}>
      <S.FotoContainer>
        <S.Overlay>
          <S.FichaTecnica>
            <S.Titulo>{titulo}</S.Titulo>
            <i>
              <S.Texto id="estudio">{estudio}</S.Texto>
            </i>
            <S.Dados>
              <S.Texto id="cidade">{cidade}</S.Texto> <p> · </p>
              <S.Texto id="ano">{ano}</S.Texto>
            </S.Dados>
          </S.FichaTecnica>
        </S.Overlay>
        <S.Foto src={imgSrc} />
      </S.FotoContainer>
    </Link>
  )
}

export const Mosaico = ({ fotos }: MosaicoProps) => {
  return (
    <S.Container>
      {fotos.map((foto) => {
        return (
          <Foto
            titulo={foto.titulo}
            ano={foto.ano}
            cidade={foto.cidade}
            estudio={foto.estudio}
            imgSrc={foto.imgSrc}
            projectLink={foto.projectLink}
            key={foto.titulo}
          />
        )
      })}
    </S.Container>
  )
}
