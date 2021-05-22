import * as S from './styles'

import { ContentContainer } from 'components/contentContainer'
import { NavEns } from 'components/navbar'
import TituloLight from 'components/TituloLight'
import Premios from 'components/Premios'
import Spacer from 'components/NavbarSpacer'
import InternalLink from 'components/InternalLink'

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

const Premio = () => (
  <section>
    <NavEns />
    <S.Background imgSrc="img/capa_arq.jpg">
      <ContentContainer>
        <Spacer />
        <S.PremiosWrapper>
          <TituloLight>PRÊMIOS</TituloLight>
          <Premios premios={premio} />
        </S.PremiosWrapper>
        <S.ToPublicacoes>
          <InternalLink page="/publicacoes" useDark={false}>
            ou clique aqui para ver publicações
          </InternalLink>
        </S.ToPublicacoes>
      </ContentContainer>
    </S.Background>
  </section>
)

export default Premio
