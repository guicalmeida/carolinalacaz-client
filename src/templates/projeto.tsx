import BackArrow from 'components/BackArrow'
import { ContentContainer } from 'components/contentContainer'
import OtherProjectsTxt from 'components/OtherProjectsTxt'
import ProjectMasonry from 'components/ProjectMasonry'
import ProjetoMosaico from 'components/ProjetosMosaico'
import ScrollTop from 'components/ScrollToTop'
import { ProjetosProps, ProjetoUnitProps } from 'types/api'
import ProjectHeader from '../components/projectHeader'

const Projeto = ({
  projetos,
  ProjetoUnit
}: ProjetosProps & ProjetoUnitProps) => (
  <section>
    <ScrollTop />
    <ContentContainer>
      <BackArrow linkTo="/arquitetura" />
      <ProjectHeader ProjetoUnit={ProjetoUnit} />
      <ProjectMasonry ProjetoUnit={ProjetoUnit} />
      <OtherProjectsTxt>Veja outros projetos:</OtherProjectsTxt>
      {/*<FilterBar />*/}
      <ProjetoMosaico projetos={projetos} project />
    </ContentContainer>
  </section>
)

export default Projeto
