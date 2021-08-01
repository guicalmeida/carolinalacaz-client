import { ContentContainer } from 'components/contentContainer'
import ProjetosMosaico from 'components/ProjetosMosaico'
import ScrollTop from 'components/ScrollToTop'
import { ProjetosProps } from 'types/api'
import FilterBar from 'components/FilterBar'

const Arquitetura = ({ projetos }: ProjetosProps) => (
  <section>
    <ScrollTop />

    <ContentContainer>
      <FilterBar projetos={projetos} />
      <ProjetosMosaico projetos={projetos} project={false} />
    </ContentContainer>
  </section>
)

export default Arquitetura
