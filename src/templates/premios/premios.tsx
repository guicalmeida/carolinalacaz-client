import * as S from './styles'

import { ContentContainer } from 'components/contentContainer'
import { NavEns } from 'components/navbar'
import TituloLight from 'components/TituloLight'
import Premios from 'components/Premios'
import Spacer from 'components/NavbarSpacer'
import InternalLink from 'components/InternalLink'
import { PremioProps } from 'types/api'

const Premio = ({ premio }: PremioProps) => (
  <section>
    <NavEns />
    <S.Background
      imgSrc={process.env.NEXT_PUBLIC_IMAGE_HOST + premio.imagemDeFundo.url}
    >
      <ContentContainer>
        <Spacer />
        <S.PremiosWrapper>
          <TituloLight>PRÊMIOS</TituloLight>
          <Premios premio={premio} />
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
