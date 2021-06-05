import Foto from 'components/Foto'
import { PlusProps } from 'types/api'
import * as S from './styles'

export type OverlayProps = {
  overlay: boolean
}

export const AvulsasMasonry = ({
  fotosAvulsa,
  overlay
}: PlusProps & OverlayProps) => {
  return (
    <div>
      <S.MasonryGrid
        breakpointCols={2}
        className="masonryGrid"
        columnClassName="MasonryColumn"
      >
        {fotosAvulsa.FotoAvulsa.map((foto) => {
          return (
            <S.PicWrapper key={foto.Titulo} overlay={overlay}>
              <Foto url={foto.foto.url} />
              <S.Overlay>
                <S.FichaTecnica>
                  <S.Titulo>{foto.Titulo}</S.Titulo>
                  <S.Dados>
                    <S.Texto>{foto.cidade.Cidade}</S.Texto> <p> · </p>
                    <S.Texto>{foto.ano.Ano}</S.Texto>
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

export default AvulsasMasonry
