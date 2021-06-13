import { ContentContainer } from 'components/contentContainer'
import { NavEns } from 'components/navbar'
import EnsCover from 'components/EnsCover'
import { EnsaiosProps, HomeProps } from 'types/api'
import EnsaiosMosaico from 'components/EnsaiosMosaico'

const Ensaios = ({ ensaios, home }: EnsaiosProps & HomeProps) => {
  return (
    <section>
      <NavEns />
      <EnsCover home={home} />
      <ContentContainer>
        <EnsaiosMosaico ensaios={ensaios} project={false} />
      </ContentContainer>
    </section>
  )
}

export default Ensaios
