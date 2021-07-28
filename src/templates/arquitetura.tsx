import { ContentContainer } from 'components/contentContainer'
import ProjetosMosaico from 'components/ProjetosMosaico'
import { ProjetosProps } from 'types/api'

const Arquitetura = ({ projetos }: ProjetosProps) => (
  <section>
    <ContentContainer>
      {/*<FilterBar />*/}
      <ProjetosMosaico projetos={projetos} project={false} />
    </ContentContainer>
  </section>
)

export default Arquitetura
