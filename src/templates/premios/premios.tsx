import * as S from './styles'

import { ContentContainer } from 'components/contentContainer'
import TituloLight from 'components/TituloLight'
import Spacer from 'components/NavbarSpacer'
import InternalLink from 'components/InternalLink'
import PremiosIndex from 'components/PremiosIndex'
import { PremioProps } from 'types/api'
import Premio from 'components/Premios'

const Premios = ({ premios }: PremioProps) => (
  <section>
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
          <div> </div>
        </S.IndiceWrapper>
      </ContentContainer>
      <Premio premios={premios} />
    </div>
  </section>
)

export default Premios
