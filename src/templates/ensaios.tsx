import { ContentContainer } from 'components/contentContainer'
import { EnsaiosProps } from 'types/api'
import EnsaiosMosaico from 'components/EnsaiosMosaico'

const Ensaios = ({ ensaios }: EnsaiosProps) => {
  return (
    <section>
      <ContentContainer>
        <EnsaiosMosaico ensaios={ensaios} project={false} />
      </ContentContainer>
    </section>
  )
}

export default Ensaios
