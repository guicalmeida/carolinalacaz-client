import { PublicacoesProps } from 'types/api'
import * as S from './styles'

const PbDigitais = ({ publicacaos }: PublicacoesProps) => {
  const digitalPub = publicacaos.filter((publicacao) => {
    return publicacao.meio == 'digital'
  })

  const veiculosUnicos = Array.from(
    new Set(
      digitalPub.map((pub) => {
        return pub.veiculo.nome
      })
    )
  )

  return (
    <S.Container id="digitalLink">
      {veiculosUnicos.map((veiculo) => {
        return (
          <S.SiteColumn key={veiculo}>
            <S.SiteTitle>{veiculo}</S.SiteTitle>
            <S.SiteLinkDiv>
              {digitalPub.map((publicacao) => {
                return (
                  <S.SiteLink
                    href={publicacao.url ? publicacao.url : ''}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={publicacao.slug}
                  >
                    {publicacao.veiculo?.nome == veiculo
                      ? publicacao.nome
                      : null}
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
