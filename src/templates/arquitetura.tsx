import { ContentContainer } from 'components/contentContainer'
import ArqCover from 'components/ArqCover'
import ProjetosMosaico from 'components/ProjetosMosaico'
import { ProjetosProps } from 'types/api'
import FilterBar from 'components/FilterBar'

const Arquitetura = ({ projetos }: ProjetosProps) => (
  <section>
    <ArqCover projetos={projetos} />
    <ContentContainer>
      <FilterBar projetos={projetos} />
      <ProjetosMosaico projetos={projetos} project={false} />
    </ContentContainer>
  </section>
)

export default Arquitetura
