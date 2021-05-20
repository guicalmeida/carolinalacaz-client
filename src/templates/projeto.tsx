import BackArrow from 'components/BackArrow'
import { ContentContainer } from 'components/contentContainer'
import FilterBar from 'components/FilterBar'
import Navbar from 'components/navbar'
import OtherProjectsTxt from 'components/OtherProjectsTxt'
import ProjectMasonry from 'components/ProjectMasonry'
import ProjetosMosaico from 'components/ProjetosMosaico'
import ProjectHeader from '../components/projectHeader'

const Projeto = () => (
  <section>
    <Navbar />
    <ContentContainer>
      <BackArrow linkTo="/arquitetura" />
      <ProjectHeader
        ano={2018}
        cidade="Osasco"
        estudio="Yellow Arquitetura"
        titulo="HBR Aviação"
      />
      <ProjectMasonry />
      <OtherProjectsTxt txt="Veja outros projetos:" />
      <FilterBar />
      <ProjetosMosaico />
    </ContentContainer>
  </section>
)

export default Projeto
