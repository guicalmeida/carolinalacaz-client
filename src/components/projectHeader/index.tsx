import { ProjetoUnitProps } from 'types/api'
import * as S from './styles'

const ProjectHeader = ({ ProjetoUnit }: ProjetoUnitProps) => {
  return (
    <S.Container>
      <S.ProjectsInfosDiv>
        <S.ProjectInfosLeft>
          <div>
            <S.ProjectTitle>{ProjetoUnit.nome}</S.ProjectTitle>
            <i>
              <S.ProjectText id="estudio">
                {ProjetoUnit.escritorio.nome}
              </S.ProjectText>
            </i>
          </div>
        </S.ProjectInfosLeft>
        <S.ProjectInfosRight>
          <S.ProjectText id="cidade">
            {ProjetoUnit.cidade.nome} ·{' '}
          </S.ProjectText>
          <S.ProjectText id="ano"> {ProjetoUnit.ano.ano}</S.ProjectText>
        </S.ProjectInfosRight>
      </S.ProjectsInfosDiv>
    </S.Container>
  )
}

export default ProjectHeader
