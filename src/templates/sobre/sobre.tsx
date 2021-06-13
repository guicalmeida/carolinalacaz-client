import { NavArq } from 'components/navbar'
import TextoCorrido from 'components/TextoCorrido'
import TituloLight from 'components/TituloLight'
import { SobreProps } from 'types/api'
import parse from 'html-react-parser'
import * as S from './style'
import Foto from 'components/Foto'
import Spacer from 'components/NavbarSpacer'

const Sobre = ({ sobre }: SobreProps) => {
  return (
    <S.Container>
      <NavArq />
      <S.BioWrapper>
        <Spacer />
        <TituloLight>{sobre.nome}</TituloLight>
        <TextoCorrido>{parse(`${sobre.descricao}`)}</TextoCorrido>
      </S.BioWrapper>
      <S.PerfilWrapper>
        <Foto url={sobre.foto.url} />
      </S.PerfilWrapper>
    </S.Container>
  )
}

export default Sobre
