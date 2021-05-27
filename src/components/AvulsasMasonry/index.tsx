import * as S from './styles'

export type OverlayProps = {
  overlay: boolean
}

export const Masonry = ({ ProjetoUnit }: ProjetoUnitProps) => {
  return (
    <div>
      <S.MasonryGrid
        breakpointCols={2}
        className="masonryGrid"
        columnClassName="MasonryColumn"
      >
        {ProjetoUnit.map((projeto) => {
          return (
            <S.PicWrapper key={foto.titulo} overlay={overlay}>
              <S.Pic src={foto.imgSrc} loading="lazy" />
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
