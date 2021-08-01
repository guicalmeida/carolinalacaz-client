import * as S from './styles'

import { ContentContainer } from 'components/contentContainer'
import TituloLight from 'components/TituloLight'
import Spacer from 'components/NavbarSpacer'
import InternalLink from 'components/InternalLink'
import PremiosIndex from 'components/PremiosIndex'
import { PremioProps } from 'types/api'
import Premio from 'components/Premios'
import ScrollTop from 'components/ScrollToTop'

const Premios = ({ premios }: PremioProps) => {
  return (
    <section>
      <ScrollTop />
      <div>
        <ContentContainer>
          <Spacer />
          <S.ToPremios>
            <InternalLink page="/publicacoes" useDark={false}>
              ou clique aqui para ver publicações
            </InternalLink>
          </S.ToPremios>
          <S.IndiceWrapper>
            <TituloLight>Prêmios</TituloLight>
            <PremiosIndex premios={premios} />
            <S.Filler />
          </S.IndiceWrapper>
        </ContentContainer>
        <Premio premios={premios} />
      </div>
    </section>
  )
}

export default Premios
