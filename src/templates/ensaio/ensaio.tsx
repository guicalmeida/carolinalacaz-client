import * as S from './styles'

import BackArrow from 'components/BackArrow'
import { ContentContainer } from 'components/contentContainer'
import Divider from 'components/Divider'
import EnsaioHeader from 'components/EnsaioHeader'
import MosaicoEnsaio from 'components/MosaicoEnsaio'
import { NavEns } from 'components/navbar'
import Spacer from 'components/NavbarSpacer'
import OtherProjectsTxt from 'components/OtherProjectsTxt'
import { Mosaico } from 'components/ProjetosMosaico'
import TextoCorrido from 'components/TextoCorrido'

const projeto = [
  {
    imgSrc: 'img/ensaioAna/1.jpg',
    titulo: 'teste',
    ano: 2020,
    cidade: 'Osasco'
  },
  {
    imgSrc: 'img/ensaioAna/2.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/3.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/4.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/5.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/6.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/7.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/8.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/9.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/10.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/11.jpg'
  },
  {
    imgSrc: 'img/ensaioAna/12.jpg'
  }
]

const mosaico = [
  {
    projectLink: '/ensaio',
    ano: 2020,
    cidade: 'Osasco',
    estudio: 'Yellow Arquitetura',
    titulo: 'HBR Hangar',
    imgSrc: './img/capa_arq.jpg'
  }
]

const Plus = () => (
  <section>
    <NavEns />
    <ContentContainer>
      <BackArrow linkTo="/ensaios" />
      <Spacer />
      <EnsaioHeader ano={2019} cidade={'São Paulo'} titulo={'NÃO POR ACASO'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo.
      </EnsaioHeader>
      <MosaicoEnsaio fotos={projeto} />
      <S.TextoWrapper>
        <TextoCorrido>
          Claudio Edinger, 3 de abril de 2014 A grande discussão filosófica do
          momento é a questão do tempo. O grande paradoxo do tempo contemporâneo
          é a disputa entre o instante, o instantâneo, herança de Descartes, o
          instante que determina a precisão dos relógios. Para o filósofo
          contemporâneo Henri Bergson este instante entra em conflito direto com
          a eternidade presente em cada momento, ou seja, sua inclinação para o
          futuro. Este é o embate da fotografia desde sua criação, pois captura
          o instante e ao mesmo tempo revela sua eternidade. Uma fotografia é o
          presente transformado em passado para ser visto no futuro. Parando o
          tempo, o eterno presente fotográfico nos dá a oportunidade de refletir
          sobre nossas limitações humanas e também sobre a irrealidade da
          realidade – ou seja, para ilustrar, o momento em que o escritor
          começou este texto com a palavra A nunca mais vai existir. A realidade
          do começo deste texto virou um sonho, uma memória. Esta realidade em
          fluxo domina nossa vida de maneira sutil e, ao mesmo tempo,
          contundente. Este fluxo sem fim cria a invisibilidade da maioria das
          pessoas, que vivem navegando à nossa volta sem permitir que entremos
          em sua intimidade, intimidade tão fundamental para todos nós. O
          trabalho fotográfico de Carol Lacaz, demonstra a chegada de mais um
          jovem grande talento na fotografia nacional e, poeticamente, nos fala
          sobre esta questão. Suas fotografias falam de uma cidade invisível,
          imaginária, baseada em um texto de Ítalo Calvino: “na cidade grande,
          as pessoas passam pelas ruas e quando se veem, imaginam mil coisas, os
          encontros que poderiam ocorrer entre elas, as conversas, as surpresas,
          as carícias, as mordidas. Mas ninguém se cumprimenta…” Com imagens
          lindas e inesperadas criam um universo paralelo onde o movimento cria
          um simulacro do tempo, onde o espaço se transforma em diversidade
          humana (étnica? religiosa?) e encontra universalidade no particular,
          cumprindo a missão mais elevada de nossa arte.
        </TextoCorrido>
      </S.TextoWrapper>
      <OtherProjectsTxt>
        interessado? Entre em <a href="/contato">contato</a>
      </OtherProjectsTxt>
      <Divider />
      <Mosaico fotos={mosaico} />
      <Spacer />
    </ContentContainer>
  </section>
)

export default Plus
