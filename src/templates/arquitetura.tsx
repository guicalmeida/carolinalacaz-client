import ScrollTop from 'components/ScrollToTop'
import { ProjetosProps } from 'types/api'
import FilterBarSecond from 'components/FilterBarV2'
import FilterBarV3 from 'components/FilterBarV3/FilterBarV3'

const Arquitetura = ({ projetos }: ProjetosProps) => (
  <section>
    <ScrollTop />
    <FilterBarV3 projetos={projetos} />
  </section>
)

export default Arquitetura
