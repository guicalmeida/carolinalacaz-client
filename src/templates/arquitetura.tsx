import { ContentContainer } from 'components/contentContainer'
import Navbar from 'components/navbar'
import ArqCover from 'components/ArqCover'
import FilterBar from 'components/FilterBar'
import ProjetosMosaico from 'components/ProjetosMosaico'

const Arquitetura = () => (
  <section>
    <Navbar />
    <ArqCover />
    <ContentContainer>
      <FilterBar />
      <ProjetosMosaico />
    </ContentContainer>
  </section>
)

export default Arquitetura
