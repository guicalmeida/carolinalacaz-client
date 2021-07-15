import { ContentContainer } from 'components/contentContainer'
import ArqCover from 'components/ArqCover'
import ProjetosMosaico from 'components/ProjetosMosaico'
import { HomeProps, ProjetosProps } from 'types/api'

const Arquitetura = ({ projetos, home }: ProjetosProps & HomeProps) => (
  <section>
    <ArqCover home={home} />
    <ContentContainer>
      {/*<FilterBar />*/}
      <ProjetosMosaico projetos={projetos} project={false} />
    </ContentContainer>
  </section>
)

export default Arquitetura
