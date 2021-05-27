import { ContentContainer } from 'components/contentContainer'
import { NavEns } from 'components/navbar'
import EnsCover from 'components/EnsCover'
import { EnsaiosProps } from 'types/api'
import EnsaiosMosaico from 'components/EnsaiosMosaico'

const Ensaios = ({ autoralEnsaios }: EnsaiosProps) => {
  return (
    <section>
      <NavEns />
      <EnsCover />
      <ContentContainer>
        <EnsaiosMosaico autoralEnsaios={autoralEnsaios} project={false} />
      </ContentContainer>
    </section>
  )
}

export default Ensaios
