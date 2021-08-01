import ScrollToTop from 'react-scroll-to-top'
import { Container } from './styles'

const ScrollTop = () => {
  return (
    <Container>
      <ScrollToTop smooth className="scrollToTop" />
    </Container>
  )
}

export default ScrollTop
