import InternalLink from 'components/InternalLink'
import ImageSlider from 'components/Slider'
import { PublicacoesProps } from 'types/api'
import * as S from './styles'

const Publicacao = ({ publicacaos }: PublicacoesProps) => {
  let color = false

  return (
    <S.PublicacoesWrapper>
      {publicacaos.map((publicacao) => {
        color = !color
        if (publicacao.Meio == 'Impresso') {
          return (
            <S.Background
              imgSrc={
                publicacao.Capa
                  ? process.env.NEXT_PUBLIC_IMAGE_HOST + publicacao.Capa.url
                  : 'https://source.unsplash.com/random'
              }
              key={publicacao.slug}
              dark={color}
              id={publicacao.slug}
            >
              <S.ContentWrapper>
                <S.TxtWrapper>
                  <S.PublicacaoTitle>{publicacao.nome}</S.PublicacaoTitle>
                  <S.PublicacaoDesc>
                    {publicacao.veiculo.nome} - {publicacao.ano.Ano}
                  </S.PublicacaoDesc>
                </S.TxtWrapper>
                <S.SliderWrapper>
                  <ImageSlider
                    slides={publicacao.galeria}
                    dark={!color}
                  ></ImageSlider>
                </S.SliderWrapper>
              </S.ContentWrapper>
              <S.ToProject>
                <InternalLink
                  page={
                    publicacao.arquitetura_projeto
                      ? 'arquitetura/' + publicacao.arquitetura_projeto.slug
                      : ''
                  }
                  useDark={false}
                >
                  {publicacao.arquitetura_projeto
                    ? 'clique aqui para ver as fotos do projeto'
                    : ''}
                </InternalLink>
              </S.ToProject>
            </S.Background>
          )
        }
      })}
    </S.PublicacoesWrapper>
  )
}

export default Publicacao
