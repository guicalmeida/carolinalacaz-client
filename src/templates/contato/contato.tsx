import Form from 'components/Form'
import InternalLink from 'components/InternalLink'
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
    <>
      <S.Container>
        <S.HeaderWrapper>
          <TituloSemibold>CONSULTA DE DISPONIBILIDADE DE OBRAS</TituloSemibold>
          <S.Subtitulo>
            ou envie um e-mail para fotografia@carolinalacaz.com
          </S.Subtitulo>
        </S.HeaderWrapper>
        <S.FormWrapper>
          <Form fields={campos} formName="contato" />
        </S.FormWrapper>
      </S.Container>
      <S.ChangePageContainer>
        <TextoCorrido>
          Buscando orçamento para ensaio de arquitetura?{' '}
          <InternalLink page="/orcamento" useDark={false}>
            Clique aqui
          </InternalLink>
        </TextoCorrido>
      </S.ChangePageContainer>
    </>
  )
}

export default Contato
