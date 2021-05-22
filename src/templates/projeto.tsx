import BackArrow from 'components/BackArrow'
import { ContentContainer } from 'components/contentContainer'
import FilterBar from 'components/FilterBar'
import { NavArq } from 'components/navbar'
import OtherProjectsTxt from 'components/OtherProjectsTxt'
import Masonry from 'components/ProjectMasonry'
import { Mosaico } from 'components/ProjetosMosaico'
import ProjectHeader from '../components/projectHeader'

const projeto = [
  {
    imgSrc: 'img/ensaioAna/1.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/2.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/3.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/4.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/5.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/6.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/7.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/8.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/9.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/10.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/11.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/12.jpg'
  }
]

const mosaico = [
  {
    projectLink: '/projeto',
    ano: 2020,
    cidade: 'Osasco',
    estudio: 'Yellow Arquitetura',
    titulo: 'HBR Hangar',
    imgSrc: './img/capa_arq.jpg'
  }
]

const Projeto = () => (
  <section>
    <NavArq />
    <ContentContainer>
      <BackArrow linkTo="/arquitetura" />
      <ProjectHeader
        ano={2018}
        cidade="Osasco"
        estudio="Yellow Arquitetura"
        titulo="HBR Aviação"
      />
      <Masonry fotos={projeto} overlay={false} />
      <OtherProjectsTxt>Veja outros projetos:</OtherProjectsTxt>
      <FilterBar />
      <Mosaico fotos={mosaico} />
    </ContentContainer>
  </section>
)

export default Projeto
