import { ContentContainer } from 'components/contentContainer'
import ProjetosMosaico from 'components/ProjetosMosaico'
import ScrollTop from 'components/ScrollToTop'
import { ProjetosProps } from 'types/api'

const Arquitetura = ({ projetos }: ProjetosProps) => (
  <section>
    <ScrollTop />

    <ContentContainer>
      {/*<FilterBar />*/}
      <ProjetosMosaico projetos={projetos} project={false} />
    </ContentContainer>
  </section>
)

export default Arquitetura
