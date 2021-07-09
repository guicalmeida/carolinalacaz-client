import TextoCorrido from 'components/TextoCorrido'
import TituloLight from 'components/TituloLight'
import { SobreProps } from 'types/api'
import parse from 'html-react-parser'
import * as S from './style'
import Foto from 'components/Foto'
import Spacer from 'components/NavbarSpacer'
import ArqNav from 'components/ArqNav'

const Sobre = ({ sobre }: SobreProps) => {
  return (
    <S.Container>
      <ArqNav />
      <S.BioWrapper>
        <Spacer />
        <TituloLight>{sobre?.nome ? sobre.nome : ''}</TituloLight>
        <TextoCorrido>{parse(`${sobre.descricao}`)}</TextoCorrido>
      </S.BioWrapper>
      <S.PerfilWrapper>
        <Foto url={sobre?.foto?.url ? sobre.foto.url : ''} />
      </S.PerfilWrapper>
    </S.Container>
  )
}

export default Sobre
