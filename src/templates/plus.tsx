import AvulsasMasonry from 'components/AvulsasMasonry'
import ChangePage from 'components/ChangePage'
import { ContentContainer } from 'components/contentContainer'
import Divider from 'components/Divider'
import EnsTitle from 'components/EnsTitle'
import InternalLink from 'components/InternalLink'
import { NavEns } from 'components/navbar'
import Spacer from 'components/NavbarSpacer'
import OtherProjectsTxt from 'components/OtherProjectsTxt'
import { PlusProps } from 'types/api'

const Plus = ({ fotosAvulsa }: PlusProps) => {
  return (
    <section>
      <NavEns />
      <ContentContainer>
        <Spacer />
        <EnsTitle>+++</EnsTitle>
        <AvulsasMasonry overlay={true} fotosAvulsa={fotosAvulsa} />
        <OtherProjectsTxt>
          interessado? Entre em{' '}
          <InternalLink page="/contato" useDark={true}>
            contato
          </InternalLink>
        </OtherProjectsTxt>
        <Divider />
        <ChangePage>
          <a href="/ensaios">Veja ensaios fotográficos</a>
        </ChangePage>
        <Spacer />
      </ContentContainer>
    </section>
  )
}

export default Plus
