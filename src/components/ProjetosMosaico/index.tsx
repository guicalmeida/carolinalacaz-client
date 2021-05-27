import Link from 'next/link'
import { ProjetosProps } from 'types/api'
import * as S from './styles'

type OnProjectProps = {
  project: boolean
}

const ProjetosMosaico = ({
  project,
  arquiteturaProjetos
}: ProjetosProps & OnProjectProps) => {
  return (
    <S.Container>
      {arquiteturaProjetos.map((projeto) => {
        return (
          <Link
            href={project ? projeto.slug : 'arquitetura/' + projeto.slug}
            key={projeto.slug}
          >
            <S.FotoContainer>
              <S.Overlay>
                <S.FichaTecnica>
                  <S.Titulo>{projeto.Nome}</S.Titulo>
                  <S.Texto>{projeto.Escritorio.Escritorio}</S.Texto>
                  <S.Dados>
                    <S.Texto id="cidade">{projeto.Cidade.Cidade}</S.Texto>{' '}
                    <p> · </p>
                    <S.Texto id="ano">{projeto.Ano.Ano}</S.Texto>
                  </S.Dados>
                </S.FichaTecnica>
              </S.Overlay>
              <S.Foto src={`http://localhost:1337${projeto.Capa.url}`} />
            </S.FotoContainer>
          </Link>
        )
      })}
    </S.Container>
  )
}

export default ProjetosMosaico
