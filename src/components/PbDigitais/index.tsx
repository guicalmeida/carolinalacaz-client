import {
  Accordion,
  AccordionDetails,
  AccordionSummary
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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
    <div id="digitalLink">
      <S.Titulo>Publicações Digitais</S.Titulo>
      <S.Container>
        {veiculosUnicos
          .sort((a, b) => (a > b ? 1 : -1))
          .map((veiculo) => {
            return (
              <Accordion key={veiculo}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  className="accTitle"
                >
                  {veiculo}
                </AccordionSummary>
                <AccordionDetails>
                  <S.SiteLinkDiv>
                    {digitalPub.map((publicacao) => {
                      return (
                        publicacao.veiculo?.nome == veiculo && (
                          <S.SiteLink
                            href={publicacao.url ? publicacao.url : ''}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={publicacao.slug}
                          >
                            {publicacao.nome}
                          </S.SiteLink>
                        )
                      )
                    })}
                  </S.SiteLinkDiv>
                </AccordionDetails>
              </Accordion>
            )
          })}
      </S.Container>
    </div>
  )
}

export default PbDigitais
