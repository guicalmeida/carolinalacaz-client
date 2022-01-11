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
          <S.IndiceWrapper>
            <S.HeaderWrapper>
              <TituloLight>Prêmios</TituloLight>
              <S.ToPremios>
                <InternalLink page="/publicacoes" useDark={false}>
                  ou clique aqui para ver publicações
                </InternalLink>
              </S.ToPremios>
            </S.HeaderWrapper>
            <div className="pubImpressa">
              <PremiosIndex premios={premios} />
            </div>
          </S.IndiceWrapper>
          <Premio premios={premios} />
        </ContentContainer>{' '}
      </div>
    </section>
  )
}

export default Premios
