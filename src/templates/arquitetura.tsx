import { ContentContainer } from 'components/contentContainer'
import { NavArq } from 'components/navbar'
import ArqCover from 'components/ArqCover'
import FilterBar from 'components/FilterBar'
import ProjetosMosaico from 'components/ProjetosMosaico'
import { HomeProps, ProjetosProps } from 'types/api'

const Arquitetura = ({ projetos, home }: ProjetosProps & HomeProps) => (
  <section>
    <NavArq />
    <ArqCover home={home} />
    <ContentContainer>
      {/*<FilterBar />*/}
      <ProjetosMosaico projetos={projetos} project={false} />
    </ContentContainer>
  </section>
)

export default Arquitetura
