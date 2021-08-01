import { ContentContainer } from 'components/contentContainer'
import { EnsaiosProps } from 'types/api'
import EnsaiosMosaico from 'components/EnsaiosMosaico'
import ScrollTop from 'components/ScrollToTop'

const Ensaios = ({ ensaios }: EnsaiosProps) => {
  return (
    <section>
      <ScrollTop />
      <ContentContainer>
        <EnsaiosMosaico ensaios={ensaios} project={false} />
      </ContentContainer>
    </section>
  )
}

export default Ensaios
