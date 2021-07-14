import Foto from 'components/Foto'
import { ProjetoUnitProps } from 'types/api'
import * as S from './styles'

export type OverlayProps = {
  overlay: boolean
}

export const ProjectMasonry = ({ ProjetoUnit }: ProjetoUnitProps) => {
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
        {ProjetoUnit.galeria
          ? ProjetoUnit.galeria.map((foto) => {
              return (
                <S.PicWrapper key={foto?.name ? foto.name : ''}>
                  <Foto url={foto?.url ? foto.url : ''} />
                </S.PicWrapper>
              )
            })
          : ''}
      </S.MasonryGrid>
    </div>
  )
}

export default ProjectMasonry
