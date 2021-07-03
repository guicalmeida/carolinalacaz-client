import { ContentContainer } from 'components/contentContainer'
import ArqCover from 'components/ArqCover'
import FilterBar from 'components/FilterBar'
import ProjetosMosaico from 'components/ProjetosMosaico'
import { HomeProps, ProjetosProps } from 'types/api'
import ArqNav from 'components/ArqNav'

const Arquitetura = ({ projetos, home }: ProjetosProps & HomeProps) => (
  <section>
    <ArqNav />
    <ArqCover home={home} />
    <ContentContainer>
      {/*<FilterBar />*/}
      <ProjetosMosaico projetos={projetos} project={false} />
    </ContentContainer>
  </section>
)

export default Arquitetura
