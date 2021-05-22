import { ContentContainer } from 'components/contentContainer'
import { NavArq } from 'components/navbar'
import ArqCover from 'components/ArqCover'
import FilterBar from 'components/FilterBar'
import { Mosaico } from 'components/ProjetosMosaico'

const fotos = [
  {
    projectLink: '/projeto',
    ano: 2020,
    cidade: 'Osasco',
    estudio: 'Yellow Arquitetura',
    titulo: 'HBR Hangar',
    imgSrc: './img/capa_arq.jpg'
  }
]

const Arquitetura = () => (
  <section>
    <NavArq />
    <ArqCover />
    <ContentContainer>
      <FilterBar />
      <Mosaico fotos={fotos} />
    </ContentContainer>
  </section>
)

export default Arquitetura
