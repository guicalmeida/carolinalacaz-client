import * as S from './styles'

export type PicProps = {
  titulo?: string
  cidade?: string
  ano?: number
  imgSrc?: string
}

type MasonryProps = {
  fotos: PicProps[]
  overlay: boolean
}

export type OverlayProps = {
  overlay: boolean
}

const ProjectPic = ({ imgSrc }: PicProps) => {
  return <S.Pic src={imgSrc} loading="lazy" />
}

export const Masonry = ({ fotos, overlay }: MasonryProps) => {
  return (
    <div>
      <S.MasonryGrid
        breakpointCols={2}
        className="masonryGrid"
        columnClassName="MasonryColumn"
      >
        {fotos.map((foto) => {
          return (
            <S.PicWrapper key={foto.titulo} overlay={overlay}>
              <ProjectPic imgSrc={foto.imgSrc} />
              <S.Overlay>
                <S.FichaTecnica>
                  <S.Titulo>{foto.titulo}</S.Titulo>
                  <S.Dados>
                    <S.Texto>{foto.cidade}</S.Texto> <p> · </p>
                    <S.Texto>{foto.ano}</S.Texto>
                  </S.Dados>
                </S.FichaTecnica>
              </S.Overlay>
            </S.PicWrapper>
          )
        })}
      </S.MasonryGrid>
    </div>
  )
}

export default Masonry
