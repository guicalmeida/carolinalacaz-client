import { ContentContainer } from 'components/contentContainer'
import ArqCover from 'components/ArqCover'
import ProjetosMosaico from 'components/ProjetosMosaico'
import { ProjetosProps } from 'types/api'

const Arquitetura = ({ projetos }: ProjetosProps) => (
  <section>
    <ArqCover projetos={projetos} />
    <ContentContainer>
      {/*<FilterBar />*/}
      <ProjetosMosaico projetos={projetos} project={false} />
    </ContentContainer>
  </section>
)

export default Arquitetura
