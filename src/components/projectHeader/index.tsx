import { ProjetoUnitProps } from 'types/api'
import * as S from './styles'

const ProjectHeader = ({ ProjetoUnit }: ProjetoUnitProps) => {
  return (
    <S.Container>
      <S.ProjectsInfosDiv>
        <S.ProjectInfosLeft>
          <div>
            <S.ProjectTitle>{ProjetoUnit.Nome}</S.ProjectTitle>
            <i>
              <S.ProjectText id="estudio">
                {ProjetoUnit.Escritorio.Escritorio}
              </S.ProjectText>
            </i>
          </div>
        </S.ProjectInfosLeft>
        <S.ProjectInfosRight>
          <S.ProjectText id="cidade">
            {ProjetoUnit.Cidade.Cidade} ·{' '}
          </S.ProjectText>
          <S.ProjectText id="ano"> {ProjetoUnit.Ano.Ano}</S.ProjectText>
        </S.ProjectInfosRight>
      </S.ProjectsInfosDiv>
    </S.Container>
  )
}

export default ProjectHeader
