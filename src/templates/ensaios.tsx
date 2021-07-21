import { ContentContainer } from 'components/contentContainer'
import EnsCover from 'components/EnsCover'
import { EnsaiosProps } from 'types/api'
import EnsaiosMosaico from 'components/EnsaiosMosaico'

const Ensaios = ({ ensaios }: EnsaiosProps) => {
  return (
    <section>
      <EnsCover ensaios={ensaios} />
      <ContentContainer>
        <EnsaiosMosaico ensaios={ensaios} project={false} />
      </ContentContainer>
    </section>
  )
}

export default Ensaios
