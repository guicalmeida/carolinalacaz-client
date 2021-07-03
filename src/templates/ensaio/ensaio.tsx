import * as S from './styles'
import { EnsaiosProps, EnsaioUnitProps } from 'types/api'
import parse from 'html-react-parser'

import BackArrow from 'components/BackArrow'
import { ContentContainer } from 'components/contentContainer'
import Divider from 'components/Divider'
import EnsaioHeader from 'components/EnsaioHeader'
import MosaicoEnsaio from 'components/MosaicoEnsaio'
import Spacer from 'components/NavbarSpacer'
import OtherProjectsTxt from 'components/OtherProjectsTxt'
import TextoCorrido from 'components/TextoCorrido'
import EnsaiosMosaico from 'components/EnsaiosMosaico'
import EnsNav from 'components/EnsNav'

const Ensaio = ({ EnsaioUnit, ensaios }: EnsaioUnitProps & EnsaiosProps) => {
  return (
    <section>
      <EnsNav />
      <ContentContainer>
        <BackArrow linkTo="/ensaios" />
        <Spacer />
        <EnsaioHeader EnsaioUnit={EnsaioUnit} />
        <MosaicoEnsaio EnsaioUnit={EnsaioUnit} />
        <S.TextoWrapper>
          <TextoCorrido>
            {parse(EnsaioUnit.descricao ? EnsaioUnit.descricao : '')}
          </TextoCorrido>
        </S.TextoWrapper>
        <OtherProjectsTxt>
          interessado? Entre em <a href="/contato">contato</a>
        </OtherProjectsTxt>
        <Divider />
        <EnsaiosMosaico ensaios={ensaios} project />
        <Spacer />
      </ContentContainer>
    </section>
  )
}

export default Ensaio
