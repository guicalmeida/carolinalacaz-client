import Link from 'next/link'
import * as S from './styles'

type FotoProps = {
  titulo: string
  estudio: string
  cidade: string
  ano: number
  imgSrc: string
  projectLink: string
}

const Foto = ({
  projectLink,
  titulo,
  ano,
  cidade,
  estudio,
  imgSrc
}: FotoProps) => {
  return (
    <Link href={projectLink}>
      <S.FotoContainer>
        <S.Overlay>
          <S.FichaTecnica>
            <S.Titulo>{titulo}</S.Titulo>
            <i>
              <S.Texto id="estudio">{estudio}</S.Texto>
            </i>
            <S.Dados>
              <S.Texto id="cidade">{cidade}</S.Texto> <p> · </p>
              <S.Texto id="ano">{ano}</S.Texto>
            </S.Dados>
          </S.FichaTecnica>
        </S.Overlay>
        <S.Foto src={imgSrc} />
      </S.FotoContainer>
    </Link>
  )
}

const ProjetosMosaico = () => {
  return (
    <S.Container>
      <Foto
        projectLink="/projeto"
        ano={2020}
        cidade="Osasco"
        estudio="Yellow Arquitetura"
        titulo="HBR Hangar"
        imgSrc="./img/capa_arq.jpg"
      />
      <Foto
        projectLink=""
        ano={2020}
        cidade="Osasco"
        estudio="Yellow Arquitetura"
        titulo="HBR Hangar"
        imgSrc="./img/capa_arq.jpg"
      />
      <Foto
        projectLink=""
        ano={2020}
        cidade="Osasco"
        estudio="Yellow Arquitetura"
        titulo="HBR Hangar"
        imgSrc="./img/capa_arq.jpg"
      />
      <Foto
        projectLink=""
        ano={2020}
        cidade="Osasco"
        estudio="Yellow Arquitetura"
        titulo="HBR Hangar"
        imgSrc="./img/capa_arq.jpg"
      />
      <Foto
        projectLink=""
        ano={2020}
        cidade="Osasco"
        estudio="Yellow Arquitetura"
        titulo="HBR Hangar"
        imgSrc="./img/capa_arq.jpg"
      />
      <Foto
        projectLink=""
        ano={2020}
        cidade="Osasco"
        estudio="Yellow Arquitetura"
        titulo="HBR Hangar"
        imgSrc="./img/capa_arq.jpg"
      />
      <Foto
        projectLink=""
        ano={2020}
        cidade="Osasco"
        estudio="Yellow Arquitetura"
        titulo="HBR Hangar"
        imgSrc="./img/capa_arq.jpg"
      />
      <Foto
        projectLink=""
        ano={2020}
        cidade="Osasco"
        estudio="Yellow Arquitetura"
        titulo="HBR Hangar"
        imgSrc="./img/capa_arq.jpg"
      />
      <Foto
        projectLink=""
        ano={2020}
        cidade="Osasco"
        estudio="Yellow Arquitetura"
        titulo="HBR Hangar"
        imgSrc="./img/capa_arq.jpg"
      />
    </S.Container>
  )
}

export default ProjetosMosaico
