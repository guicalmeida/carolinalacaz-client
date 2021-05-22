import { ContentContainer } from 'components/contentContainer'
import { NavEns } from 'components/navbar'
import EnsCover from 'components/EnsCover'
import { Mosaico } from 'components/ProjetosMosaico'

const fotos = [
  {
    projectLink: '/ensaio',
    ano: 2020,
    cidade: 'Osasco',
    estudio: 'Yellow Arquitetura',
    titulo: 'HBR Hangar',
    imgSrc: './img/capa_arq.jpg'
  }
]
const Ensaios = () => (
  <section>
    <NavEns />
    <EnsCover />
    <ContentContainer>
      <Mosaico fotos={fotos} />
    </ContentContainer>
  </section>
)

export default Ensaios
