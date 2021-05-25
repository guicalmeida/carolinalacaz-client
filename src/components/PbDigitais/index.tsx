import * as S from './styles'

type PbDigitaisProps = {
  sites: string[]
  projetos: {
    titulo: string
    link: string
    site: string
  }[]
}

const PbDigitais = ({ projetos, sites }: PbDigitaisProps) => {
  return (
    <S.Container id="digitalLink">
      {sites.map((site) => {
        return (
          <S.SiteColumn key={site}>
            <S.SiteTitle>{site}</S.SiteTitle>
            <S.SiteLinkDiv>
              {projetos.map((projeto) => {
                return (
                  <S.SiteLink
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={projeto.titulo}
                  >
                    {projeto.site == site ? projeto.titulo : undefined}
                  </S.SiteLink>
                )
              })}
            </S.SiteLinkDiv>
          </S.SiteColumn>
        )
      })}
    </S.Container>
  )
}

export default PbDigitais
