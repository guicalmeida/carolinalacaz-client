import Foto from 'components/Foto'
import Link from 'next/link'
import { ProjetosProps } from 'types/api'
import * as S from './styles'

type OnProjectProps = {
  project: boolean
}

const ProjetosMosaico = ({
  project,
  projetos
}: ProjetosProps & OnProjectProps) => {
  return (
    <S.Container>
      {projetos.map((projeto) => {
        return (
          <Link
            href={project ? projeto.slug : 'arquitetura/' + projeto.slug}
            key={projeto.slug}
          >
            <S.FotoContainer>
              <S.FichaTecnica>
                <S.Titulo>{projeto.nome}</S.Titulo>
                <S.Texto>{projeto.escritorio.nome}</S.Texto>
                <S.Dados>
                  <S.Texto id="cidade">{projeto.cidade.nome}</S.Texto>{' '}
                  <p> · </p>
                  <S.Texto id="ano">{projeto.ano.ano}</S.Texto>
                </S.Dados>
              </S.FichaTecnica>
              <Foto url={projeto.capa ? projeto.capa.url : ''} />
            </S.FotoContainer>
          </Link>
        )
      })}
    </S.Container>
  )
}

export default ProjetosMosaico
