import InternalLink from 'components/InternalLink'
import ImageSlider from 'components/Slider'
import { PublicacoesProps } from 'types/api'
import * as S from './styles'

const Publicacao = ({ publicacaos }: PublicacoesProps) => {
  let color = false

  return (
    <S.PublicacoesWrapper>
      {publicacaos
        .sort((a, b) => (a.ano?.ano > b.ano?.ano ? -1 : 1))
        .map((publicacao) => {
          publicacao.meio == 'impresso' ? (color = !color) : null
          return (
            publicacao.meio == 'impresso' && (
              <S.Background
                imgSrc={
                  publicacao.capa
                    ? publicacao.capa.url
                    : 'https://source.unsplash.com/random'
                }
                key={publicacao.slug}
                dark={color}
                id={publicacao.slug}
              >
                <S.ContentWrapper>
                  <S.TxtWrapper>
                    <S.PublicacaoTitle>
                      {publicacao?.nome ? publicacao.nome : ''}
                    </S.PublicacaoTitle>
                    <S.PublicacaoDesc>
                      {publicacao?.veiculo?.nome ? publicacao.veiculo.nome : ''}
                      {publicacao?.ano?.ano ? ' - ' + publicacao.ano.ano : ''}
                    </S.PublicacaoDesc>
                  </S.TxtWrapper>
                  <S.SliderWrapper>
                    <ImageSlider
                      slides={publicacao?.galeria}
                      dark={!color}
                    ></ImageSlider>
                  </S.SliderWrapper>
                </S.ContentWrapper>
                <S.ToProject>
                  <InternalLink
                    page={
                      publicacao?.projeto
                        ? 'arquitetura/' + publicacao?.projeto?.slug
                        : ''
                    }
                    useDark={false}
                  >
                    {publicacao?.projeto
                      ? 'clique aqui para ver as fotos do projeto'
                      : ''}
                  </InternalLink>
                </S.ToProject>
              </S.Background>
            )
          )
        })}
    </S.PublicacoesWrapper>
  )
}

export default Publicacao
