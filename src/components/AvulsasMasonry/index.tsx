import Foto from 'components/Foto'
import { PlusProps } from 'types/api'
import * as S from './styles'

export type OverlayProps = {
  overlay: boolean
}

export const AvulsasMasonry = ({ plus, overlay }: PlusProps & OverlayProps) => {
  const breakpointColumnsObj = {
    default: 2,
    500: 1
  }
  return (
    <div>
      <S.MasonryGrid
        breakpointCols={breakpointColumnsObj}
        className="masonryGrid"
        columnClassName="MasonryColumn"
      >
        {plus.fotografia.map((fotoUnit) => {
          return (
            <S.PicWrapper
              key={fotoUnit.nome ? fotoUnit.nome : ''}
              overlay={overlay}
            >
              <Foto url={fotoUnit.foto.url ? fotoUnit.foto.url : ''} />
              <S.Overlay>
                <S.FichaTecnica>
                  <S.Titulo>{fotoUnit.nome ? fotoUnit.nome : ''}</S.Titulo>
                  <S.Dados>
                    <S.Texto>
                      {fotoUnit.cidade.nome ? fotoUnit.cidade.nome : ''}
                    </S.Texto>{' '}
                    <p> · </p>
                    <S.Texto>
                      {fotoUnit.ano.ano ? fotoUnit.ano.ano : ''}
                    </S.Texto>
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
