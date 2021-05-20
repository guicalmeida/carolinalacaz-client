import { ContentContainer } from 'components/contentContainer'
import Navbar from 'components/navbar'
import ArqCover from 'components/ArqCover'
import ProjetosMosaico from 'components/ProjetosMosaico'

const Ensaios = () => (
  <section>
    <Navbar />
    <ArqCover />
    <ContentContainer>
      <ProjetosMosaico />
    </ContentContainer>
  </section>
)

export default Ensaios
