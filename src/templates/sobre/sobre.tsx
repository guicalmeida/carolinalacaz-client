import { NavArq } from 'components/navbar'
import TextoCorrido from 'components/TextoCorrido'
import TituloLight from 'components/TituloLight'
import * as S from './style'

const Sobre = () => {
  return (
    <S.Container>
      <NavArq />
      <S.BioWrapper>
        <TituloLight>Carolina Lacaz</TituloLight>
        <TextoCorrido>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
          quam.
        </TextoCorrido>
      </S.BioWrapper>
      <S.PerfilWrapper>
        <S.Foto src="img/perfilCarol.png" />
      </S.PerfilWrapper>
    </S.Container>
  )
}

export default Sobre
