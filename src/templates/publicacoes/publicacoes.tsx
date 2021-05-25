import * as S from './styles'

import { ContentContainer } from 'components/contentContainer'
import { NavArq } from 'components/navbar'
import TituloLight from 'components/TituloLight'
import Spacer from 'components/NavbarSpacer'
import InternalLink from 'components/InternalLink'
import Publicacao from 'components/Publicacao'
import PublicacaoIndex from 'components/PublicacaoIndex'
import PbDigitais from 'components/PbDigitais'

const publicacoes = [
  {
    imgSrc: 'img/capa_arq.jpg',
    titulo: 'Teste1',
    arquiteto: 'GUI MATTOS',
    publicacao: 'bamboodecora',
    projectLink: '',
    ano: 2016,
    slides: [
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto1'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto5'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto2'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto3'
      }
    ]
  },
  {
    imgSrc: 'img/capa_ensaios.jpg',
    titulo: 'Teste2',
    arquiteto: 'GUI MATTOS',
    publicacao: 'bamboodecora',
    ano: 2016,
    projectLink: '',
    slides: [
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto1'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto5'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto2'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto3'
      }
    ]
  },
  {
    imgSrc: 'img/capa_arq.jpg',
    titulo: 'Teste3',
    arquiteto: 'GUI MATTOS',
    publicacao: 'bamboodecora',
    ano: 2016,
    projectLink: '',
    slides: [
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto1'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto5'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto2'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto3'
      }
    ]
  },
  {
    imgSrc: 'img/capa_ensaios.jpg',
    titulo: 'Teste4',
    arquiteto: 'GUI MATTOS',
    publicacao: 'bamboodecora',
    ano: 2016,
    projectLink: '',
    slides: [
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto1'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto5'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto2'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto3'
      }
    ]
  },
  {
    imgSrc: 'img/capa_ensaios.jpg',
    titulo: 'Teste5',
    arquiteto: 'GUI MATTOS',
    publicacao: 'bamboodecora',
    ano: 2016,
    projectLink: '',
    slides: [
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto1'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto5'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto2'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto3'
      }
    ]
  },
  {
    imgSrc: 'img/capa_ensaios.jpg',
    titulo: 'Teste6',
    arquiteto: 'GUI MATTOS',
    publicacao: 'bamboodecora',
    ano: 2016,
    projectLink: '',
    slides: [
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto1'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto5'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto2'
      },
      {
        imgSrc: 'img/capa_arq.jpg',
        title: 'foto3'
      }
    ]
  }
]

const revistas = ['Casa e Jardim', 'Casa Vogue', 'Archdaily', 'Dezeem']

const publicacoesDigitais = [
  {
    titulo: 'teste1',
    link: 'www.uol.com.br',
    site: 'Casa Vogue'
  },
  {
    titulo: 'teste2',
    link: 'www.uol.com.br',
    site: 'Casa e Jardim'
  },
  {
    titulo: 'teste3',
    link: 'www.uol.com.br',
    site: 'Archdaily'
  },
  {
    titulo: 'teste4',
    link: 'www.uol.com.br',
    site: 'Casa Vogue'
  },
  {
    titulo: 'teste5',
    link: 'www.uol.com.br',
    site: 'Dezeem'
  },
  {
    titulo: 'teste6',
    link: 'www.uol.com.br',
    site: 'Dezeem'
  },
  {
    titulo: 'teste7',
    link: 'www.uol.com.br',
    site: 'Casa e Jardim'
  },
  {
    titulo: 'teste8',
    link: 'www.uol.com.br',
    site: 'Archdaily'
  }
]

const Publicacoes = () => (
  <section>
    <NavArq />
    <div>
      <ContentContainer>
        <Spacer />
        <S.IndiceWrapper>
          <TituloLight>Publicações</TituloLight>
          <PublicacaoIndex publicacoes={publicacoes} />
          <S.DigitalLink href="#digitalLink">
            <S.DigitalTxt>Publicações digitais</S.DigitalTxt>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="13"
              viewBox="0 0 25 13"
              fill="none"
            >
              <path
                d="M24.7151 2.69562C24.716 2.95933 24.6578 3.2199 24.5448 3.45816C24.4318 3.69643 24.2668 3.90634 24.062 4.07248L13.4708 12.5984C13.1549 12.8581 12.7587 13 12.3498 13C11.941 13 11.5448 12.8581 11.2289 12.5984L0.637686 3.7724C0.277201 3.47277 0.0505048 3.04222 0.00746948 2.57545C-0.0355658 2.10868 0.108584 1.64394 0.408208 1.28345C0.707832 0.922969 1.13839 0.696275 1.60515 0.653239C2.07192 0.610204 2.53667 0.754354 2.89715 1.05398L12.3587 8.94446L21.8202 1.31876C22.0793 1.1029 22.3948 0.965788 22.7294 0.923635C23.064 0.881483 23.4037 0.936057 23.7082 1.0809C24.0128 1.22575 24.2694 1.4548 24.4479 1.74096C24.6263 2.02712 24.7191 2.35841 24.7151 2.69562Z"
                fill="#373435"
              />
            </svg>
          </S.DigitalLink>
          <S.ToPremios>
            <InternalLink page="/premios" useDark={true}>
              ou clique aqui para ver prêmios
            </InternalLink>
          </S.ToPremios>
        </S.IndiceWrapper>
      </ContentContainer>
      <Publicacao publicacoes={publicacoes} />
      <PbDigitais sites={revistas} projetos={publicacoesDigitais} />
    </div>
  </section>
)

export default Publicacoes
