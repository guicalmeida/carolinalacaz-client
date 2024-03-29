import Form from 'components/Form'
import InternalLink from 'components/InternalLink'
import { NavArq } from 'components/navbar'
import TextoCorrido from 'components/TextoCorrido'
import TituloSemibold from 'components/TituloSemibold'
import * as S from './style'

const campos = [
  {
    title: 'Nome Completo*',
    name: 'nome-completo',
    type: 'text'
  },
  {
    title: 'Empresa*',
    name: 'empresa',
    type: 'text'
  },
  {
    title: 'E-mail*',
    name: 'email',
    type: 'email'
  },
  {
    title: 'Nome do projeto*',
    name: 'nome-do-projeto',
    type: 'text'
  },
  {
    title: 'Localização*',
    name: 'localizacao',
    type: 'text'
  },
  {
    title: 'Metragem*',
    name: 'metragem',
    type: 'text'
  },
  {
    title: 'Fotos & planta do projeto',
    name: 'fotos-planta-projeto',
    type: 'file'
  }
]

const Orcamento = () => {
  return (
    <S.Container>
      <NavArq />
      <S.HeaderWrapper>
        <TituloSemibold>
          ORÇAMENTO PARA ENSAIO FOTOGRÁFICO DE ARQUITETURA
        </TituloSemibold>
        <TextoCorrido>
          Buscando a consulta de disponibilidade de obras?{' '}
          <InternalLink page="/contato" useDark={true}>
            Clique aqui
          </InternalLink>
        </TextoCorrido>
      </S.HeaderWrapper>
      <S.FormWrapper>
        <Form fields={campos} formName="Orçamento" />
      </S.FormWrapper>
    </S.Container>
  )
}

export default Orcamento
