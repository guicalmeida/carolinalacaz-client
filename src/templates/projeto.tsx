import { ContentContainer } from 'components/contentContainer'
import Navbar from 'components/navbar'
import ProjectMasonry from 'components/ProjectMasonry'
import ProjectHeader from '../components/projectHeader'

const Projeto = () => (
  <section>
    <Navbar />
    <ContentContainer>
      <ProjectHeader
        ano={2018}
        cidade="Osasco"
        estudio="Yellow Arquitetura"
        titulo="HBR Aviação"
      />
      <ProjectMasonry />
    </ContentContainer>
  </section>
)

export default Projeto
