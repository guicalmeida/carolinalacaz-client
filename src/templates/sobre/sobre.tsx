import TextoCorrido from 'components/TextoCorrido'
import TituloLight from 'components/TituloLight'
import * as S from './style'
import Foto from 'components/Foto'
import Spacer from 'components/NavbarSpacer'
import useWindowSize from 'hooks/useWindowResize'

const Sobre = () => {
  const { width } = useWindowSize()
  const isMobile = width! < 768

  return (
    <S.Container>
      <S.BioWrapper>
        {isMobile && <Spacer />}
        <TituloLight>CAROLINA LACAZ</TituloLight>
        <TextoCorrido>
          Carolina Lacaz nasceu em 1995 em São Paulo. É bacharela em Fotografia
          pelo Centro Universitário Senac (2016) e graduada em Arquitetura e
          Urbanismo pela Universidade Presbiteriana Mackenzie (2018). Atua
          profissionalmente como fotógrafa, especializada no campo da fotografia
          de arquitetura. Em alternância aos trabalhos comerciais, desenvolve
          ensaios fotográficos capturando o movimento associado a técnica da
          longa exposição, tanto nos cenários do meio urbano quanto da natureza.
          Sob outra perspectiva, procura também registrar composições estáticas
          do universo da arquitetura.
        </TextoCorrido>
      </S.BioWrapper>
      <S.PerfilWrapper>
        <Foto url="https://media.graphassets.com/UQz7XdJQu20zUD52JBSx" />
      </S.PerfilWrapper>
    </S.Container>
  )
}

export default Sobre
