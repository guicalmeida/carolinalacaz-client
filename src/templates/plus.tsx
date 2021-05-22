import ChangePage from 'components/ChangePage'
import { ContentContainer } from 'components/contentContainer'
import Divider from 'components/Divider'
import EnsTitle from 'components/EnsTitle'
import { NavEns } from 'components/navbar'
import Spacer from 'components/NavbarSpacer'
import OtherProjectsTxt from 'components/OtherProjectsTxt'
import Masonry from 'components/ProjectMasonry'

const projeto = [
  {
    imgSrc: 'img/ensaioAna/1.jpg',
    titulo: 'teste',
    ano: 2020,
    cidade: 'Osasco'
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

const Plus = () => (
  <section>
    <NavEns />
    <ContentContainer>
      <Spacer />
      <EnsTitle>+++</EnsTitle>
      <Masonry fotos={projeto} overlay={true} />
      <OtherProjectsTxt>
        interessado? Entre em <a href="/contato">contato</a>
      </OtherProjectsTxt>
      <Divider />
      <ChangePage>
        <a href="/ensaios">Veja ensaios fotográficos</a>
      </ChangePage>
      <Spacer />
    </ContentContainer>
  </section>
)

export default Plus
