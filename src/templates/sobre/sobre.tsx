import TextoCorrido from 'components/TextoCorrido'
import TituloLight from 'components/TituloLight'
import { SobreProps } from 'types/api'
import parse from 'html-react-parser'
import * as S from './style'
import Foto from 'components/Foto'
import Spacer from 'components/NavbarSpacer'
import useWindowSize from 'hooks/useWindowResize'

const Sobre = ({ sobre }: SobreProps) => {
  const { width } = useWindowSize()
  const isMobile = width! < 768

  return (
    <S.Container>
      <S.BioWrapper>
        {isMobile && <Spacer />}
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
