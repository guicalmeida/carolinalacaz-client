import { ContentContainer } from 'components/contentContainer'
import { NavArq } from 'components/navbar'
import ArqCover from 'components/ArqCover'
import FilterBar from 'components/FilterBar'
import ProjetosMosaico from 'components/ProjetosMosaico'
import { ProjetosProps } from 'types/api'

const Arquitetura = ({ arquiteturaProjetos }: ProjetosProps) => (
  <section>
    <NavArq />
    <ArqCover />
    <ContentContainer>
      <FilterBar />
      <ProjetosMosaico
        arquiteturaProjetos={arquiteturaProjetos}
        project={false}
      />
    </ContentContainer>
  </section>
)

export default Arquitetura
