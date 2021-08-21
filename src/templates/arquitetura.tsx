import ScrollTop from 'components/ScrollToTop'
import { ProjetosProps } from 'types/api'
import FilterBarSecond from 'components/FilterBarV2'

const Arquitetura = ({ projetos }: ProjetosProps) => (
  <section>
    <ScrollTop />
    <FilterBarSecond projetos={projetos} />
  </section>
)

export default Arquitetura
