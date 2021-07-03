import ArqNav from 'components/ArqNav'
import BackArrow from 'components/BackArrow'
import { ContentContainer } from 'components/contentContainer'
import FilterBar from 'components/FilterBar'
import OtherProjectsTxt from 'components/OtherProjectsTxt'
import ProjectMasonry from 'components/ProjectMasonry'
import ProjetoMosaico from 'components/ProjetosMosaico'
import { ProjetosProps, ProjetoUnitProps } from 'types/api'
import ProjectHeader from '../components/projectHeader'

const Projeto = ({
  projetos,
  ProjetoUnit
}: ProjetosProps & ProjetoUnitProps) => (
  <section>
    <ArqNav />
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
