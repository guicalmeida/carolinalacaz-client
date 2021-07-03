import { ContentContainer } from 'components/contentContainer'
import EnsCover from 'components/EnsCover'
import { EnsaiosProps, HomeProps } from 'types/api'
import EnsaiosMosaico from 'components/EnsaiosMosaico'
import EnsNav from 'components/EnsNav'

const Ensaios = ({ ensaios, home }: EnsaiosProps & HomeProps) => {
  return (
    <section>
      <EnsNav />
      <EnsCover home={home} />
      <ContentContainer>
        <EnsaiosMosaico ensaios={ensaios} project={false} />
      </ContentContainer>
    </section>
  )
}

export default Ensaios
