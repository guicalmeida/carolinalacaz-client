import { ContentContainer } from 'components/contentContainer'
import { HomeContent } from 'components/HomeContent'
import Navbar from 'components/navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <ContentContainer>
        <HomeContent />
      </ContentContainer>
    </div>
  )
}

export default Home
