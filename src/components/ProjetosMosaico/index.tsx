import Foto from 'components/Foto'
import Link from 'next/link'
import { ProjetosProps } from 'types/api'
import * as S from './styles'

type OnProjectProps = {
  project: boolean
}

type CategoriesProps = {
  nome: string
  values: string[]
}[]

const ProjetosMosaico = ({
  project,
  projetos
}: ProjetosProps & OnProjectProps) => {
  const offices = new Set(),
    types = new Set(),
    places = new Set(),
    years = new Set(),
    tags = new Set()

  projetos.map((projeto) => {
    projeto.escritorio?.nome && offices.add(projeto.escritorio?.nome)
    projeto.cidade?.nome && places.add(projeto.cidade?.nome)
    projeto.ano?.ano && years.add(projeto.ano?.ano.toString())
    projeto.tags?.nome && tags.add(projeto.tags?.nome)
    projeto.tipo?.nome && types.add(projeto.tipo?.nome)
  })

  const filterCategories: CategoriesProps = [
    {
      nome: 'Escritório',
      values: [...offices] as string[]
    },
    {
      nome: 'Lugar',
      values: [...places] as string[]
    },
    {
      nome: 'Ano',
      values: [...years] as string[]
    },
    {
      nome: 'Tipo',
      values: [...types] as string[]
    },
    {
      nome: 'Outros',
      values: [...tags] as string[]
    }
  ]
  return (
    <>
      <S.FilterBar>
        <S.FilterContainer>
          <S.FilterBy>
            <S.Ico
              className="iconify"
              data-icon="bx:bx-filter"
              data-inline="false"
            />
            Filtrar Por
          </S.FilterBy>
          <S.List>
            {filterCategories.map((categories) => {
              return (
                <S.Item key={categories.nome}>
                  <S.ItemContainer>
                    <p>{categories.nome}</p>
                    <S.ArrowDown
                      className="iconify"
                      data-icon="dashicons:arrow-down-alt2"
                      data-inline="false"
                    />
                  </S.ItemContainer>

                  <S.Dropdown>
                    {categories.values.map((item) => {
                      return <S.DropdownItem key={item}>{item}</S.DropdownItem>
                    })}
                  </S.Dropdown>
                </S.Item>
              )
            })}
          </S.List>
        </S.FilterContainer>
      </S.FilterBar>
      <S.Container>
        {projetos
          .sort((a, b) => {
            const aHandler = a.prioridade ? a.prioridade : 10
            const bHandler = b.prioridade ? b.prioridade : 10
            return aHandler > bHandler ? 1 : -1
          })
          .map((projeto) => {
            return (
              <Link
                href={project ? projeto.slug : 'arquitetura/' + projeto.slug}
                key={projeto.slug}
              >
                <S.FotoContainer>
                  <S.FichaTecnica>
                    <S.Titulo>{projeto?.nome ? projeto.nome : ''}</S.Titulo>
                    <S.Texto>
                      {projeto?.escritorio?.nome ? projeto.escritorio.nome : ''}
                    </S.Texto>
                    <S.Dados>
                      <S.Texto id="cidade">
                        {projeto?.cidade?.nome ? projeto.cidade.nome : ''}
                      </S.Texto>{' '}
                      <p> · </p>
                      <S.Texto id="ano">
                        {projeto?.ano?.ano ? projeto.ano.ano : ''}
                      </S.Texto>
                    </S.Dados>
                  </S.FichaTecnica>
                  <Foto url={projeto?.capa ? projeto.capa.url : ''} />
                </S.FotoContainer>
              </Link>
            )
          })}
      </S.Container>
    </>
  )
}

export default ProjetosMosaico
