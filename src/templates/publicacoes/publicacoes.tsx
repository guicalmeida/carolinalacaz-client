import * as S from './styles'

import { ContentContainer } from 'components/contentContainer'
import { NavArq } from 'components/navbar'
import TituloLight from 'components/TituloLight'
import Premios from 'components/Premios'
import Spacer from 'components/NavbarSpacer'
import InternalLink from 'components/InternalLink'
import ReactSlider from 'components/Slider'

const premio = [
  {
    titulo: 'Lorem ipsum dolor sit amet',
    descricao: 'consectetur adipiscing elit ut aliquam, purus sit amet'
  },
  {
    titulo: 'Lorem ipsum dolor sit amet',
    descricao: 'consectetur adipiscing elit ut aliquam, purus sit amet'
  },
  {
    titulo: 'Lorem ipsum dolor sit amet',
    descricao: 'consectetur adipiscing elit ut aliquam, purus sit amet'
  },
  {
    titulo: 'Lorem ipsum dolor sit amet',
    descricao: 'consectetur adipiscing elit ut aliquam, purus sit amet'
  }
]

const slides = [
  {
    imgSrc: 'img/capa_arq.jpg',
    title: 'teste'
  },
  {
    imgSrc: 'img/capa_arq.jpg',
    title: 'teste'
  },
  {
    imgSrc: 'img/capa_arq.jpg',
    title: 'teste'
  },
  {
    imgSrc: 'img/capa_arq.jpg',
    title: 'teste'
  }
]

const Publicacoes = () => (
  <section>
    <NavArq />
    <ContentContainer>
      <Spacer />
      <S.IndiceWrapper>
        <TituloLight>Publicações</TituloLight>
        <Premios premios={premio} />
      </S.IndiceWrapper>
      <ReactSlider slides={slides} />
      <S.ToPublicacoes>
        <InternalLink page="/publicacoes" useDark={false}>
          ou clique aqui para ver publicações
        </InternalLink>
      </S.ToPublicacoes>
    </ContentContainer>
  </section>
)

export default Publicacoes
