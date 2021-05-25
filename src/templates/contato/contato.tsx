import Form from 'components/Form'
import InternalLink from 'components/InternalLink'
import { NavArq } from 'components/navbar'
import TextoCorrido from 'components/TextoCorrido'
import TituloSemibold from 'components/TituloSemibold'
import * as S from './style'

const campos = [
  {
    title: 'Nome*',
    name: 'nome',
    type: 'text'
  },
  {
    title: 'E-mail*',
    name: 'email',
    type: 'email'
  },
  {
    title: 'Obras*',
    name: 'obras',
    type: 'text'
  }
]

const Contato = () => {
  return (
    <S.Container>
      <NavArq />
      <S.HeaderWrapper>
        <TituloSemibold>CONSULTA DE DISPONIBILIDADE DE OBRAS</TituloSemibold>
        <TextoCorrido>
          Buscando orçamento para ensaio de arquitetura?{' '}
          <InternalLink page="/orcamento" useDark={false}>
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

export default Contato
