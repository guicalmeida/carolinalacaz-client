import * as S from './styles'

type ProjectHeaderProps = {
  titulo: string
  estudio: string
  ano: number
  cidade: string
}

const ProjectHeader = ({
  titulo,
  ano,
  cidade,
  estudio
}: ProjectHeaderProps) => {
  return (
    <S.Container>
      <S.ProjectsInfosDiv>
        <S.ProjectInfosLeft>
          <div>
            <S.ProjectTitle>{titulo}</S.ProjectTitle>
            <i>
              <S.ProjectText id="estudio">{estudio}</S.ProjectText>
            </i>
          </div>
        </S.ProjectInfosLeft>
        <S.ProjectInfosRight>
          <S.ProjectText id="cidade">{cidade} · </S.ProjectText>
          <S.ProjectText id="ano"> {ano}</S.ProjectText>
        </S.ProjectInfosRight>
      </S.ProjectsInfosDiv>
    </S.Container>
  )
}

export default ProjectHeader
