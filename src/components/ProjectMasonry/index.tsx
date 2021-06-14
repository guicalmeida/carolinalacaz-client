import Foto from 'components/Foto'
import { ProjetoUnitProps } from 'types/api'
import * as S from './styles'

export type OverlayProps = {
  overlay: boolean
}

export const ProjectMasonry = ({ ProjetoUnit }: ProjetoUnitProps) => {
  return (
    <div>
      <S.MasonryGrid
        breakpointCols={2}
        className="masonryGrid"
        columnClassName="MasonryColumn"
      >
        {ProjetoUnit.galeria
          ? ProjetoUnit.galeria.map((foto) => {
              return (
                <S.PicWrapper key={foto.name ? foto.name : ''}>
                  <Foto url={foto.url ? foto.url : ''} />
                </S.PicWrapper>
              )
            })
          : ''}
      </S.MasonryGrid>
    </div>
  )
}

export default ProjectMasonry
