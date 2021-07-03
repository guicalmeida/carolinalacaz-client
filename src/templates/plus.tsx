import AvulsasMasonry from 'components/AvulsasMasonry'
import ChangePage from 'components/ChangePage'
import { ContentContainer } from 'components/contentContainer'
import Divider from 'components/Divider'
import EnsNav from 'components/EnsNav'
import EnsTitle from 'components/EnsTitle'
import InternalLink from 'components/InternalLink'
import Spacer from 'components/NavbarSpacer'
import OtherProjectsTxt from 'components/OtherProjectsTxt'
import { PlusProps } from 'types/api'

const Plus = ({ plus }: PlusProps) => {
  return (
    <section>
      <EnsNav />
      <ContentContainer>
        <Spacer />
        <EnsTitle>+++</EnsTitle>
        <AvulsasMasonry overlay={true} plus={plus} />
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
