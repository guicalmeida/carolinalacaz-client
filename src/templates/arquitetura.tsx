import { ContentContainer } from 'components/contentContainer'
import { NavArq } from 'components/navbar'
import ArqCover from 'components/ArqCover'
import FilterBar from 'components/FilterBar'
import ProjetosMosaico from 'components/ProjetosMosaico'
import { HomeProps, ProjetosProps } from 'types/api'

const Arquitetura = ({
  arquiteturaProjetos,
  paginaInicial
}: ProjetosProps & HomeProps) => (
  <section>
    <NavArq />
    <ArqCover paginaInicial={paginaInicial} />
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
