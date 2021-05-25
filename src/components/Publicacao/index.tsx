import InternalLink from 'components/InternalLink'
import ImageSlider from 'components/Slider'
import * as S from './styles'

type PublicacaoProps = {
  publicacoes: {
    slides: {
      imgSrc: string
      title: string
    }[]
    imgSrc: string
    titulo: string
    arquiteto: string
    publicacao: string
    ano: number
    projectLink: string
  }[]
}

const Publicacao = ({ publicacoes }: PublicacaoProps) => {
  let color = false

  return (
    <S.PublicacoesWrapper>
      {publicacoes.map((publicacao) => {
        color = !color
        return (
          <S.Background
            imgSrc={publicacao.imgSrc}
            key={publicacao.titulo}
            dark={color}
            id={publicacao.titulo}
          >
            <S.ContentWrapper>
              <S.TxtWrapper>
                <S.PublicacaoTitle>
                  {publicacao.titulo} - {publicacao.arquiteto}
                </S.PublicacaoTitle>
                <S.PublicacaoDesc>
                  {publicacao.publicacao} - {publicacao.ano}
                </S.PublicacaoDesc>
              </S.TxtWrapper>
              <S.SliderWrapper>
                <ImageSlider
                  slides={publicacao.slides}
                  dark={!color}
                ></ImageSlider>
              </S.SliderWrapper>
            </S.ContentWrapper>
            <S.ToProject>
              <InternalLink page={publicacao.projectLink} useDark={false}>
                clique aqui para ver as fotos do projeto
              </InternalLink>
            </S.ToProject>
          </S.Background>
        )
      })}
    </S.PublicacoesWrapper>
  )
}

export default Publicacao
