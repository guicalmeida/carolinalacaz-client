import { ContentContainer } from 'components/contentContainer'
import { NavEns } from 'components/navbar'
import EnsCover from 'components/EnsCover'
import { EnsaiosProps, HomeProps } from 'types/api'
import EnsaiosMosaico from 'components/EnsaiosMosaico'

const Ensaios = ({
  autoralEnsaios,
  paginaInicial
}: EnsaiosProps & HomeProps) => {
  return (
    <section>
      <NavEns />
      <EnsCover paginaInicial={paginaInicial} />
      <ContentContainer>
        <EnsaiosMosaico autoralEnsaios={autoralEnsaios} project={false} />
      </ContentContainer>
    </section>
  )
}

export default Ensaios
