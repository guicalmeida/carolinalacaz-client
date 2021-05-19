import { ContentContainer } from 'components/contentContainer'
import { HomeContent } from 'components/HomeContent'
import Navbar from 'components/navbar'

const Home = () => (
  <section>
    <Navbar />
    <ContentContainer>
      <HomeContent />
    </ContentContainer>
  </section>
)

export default Home
