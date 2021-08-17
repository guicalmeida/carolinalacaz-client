import { ContentContainer } from 'components/contentContainer'
import ProjetosMosaico from 'components/ProjetosMosaico'
import { useEffect, useState } from 'react'
import { ProjetosProps } from 'types/api'
import * as S from './styles'

export type DropdownProps = {
  itemName: string
  items: string[]
  active: boolean
}
export type FilterObjectProps = {
  name: string
  values: string[]
  active: boolean
}

const FilterBarSecond = ({ projetos }: ProjetosProps) => {
  //unique filter open hooks
  const initialState = {
    Ano: false,
    Tipo: false,
    Cidade: false,
    Outros: false,
    none: false
  }
  let openState = initialState
  const [target, setTarget] = useState('')
  const [open, setOpen] = useState(initialState)
  const [clickCounter, setClickCounter] = useState(0)
  useEffect(() => {
    openState = {
      ...openState,
      [target]: true
    }
    setOpen(openState)
  }, [target, clickCounter])
  const ClickHandler = (itemName: string) => {
    setClickCounter(clickCounter + 1)
    setTarget(itemName == target ? 'none' : itemName)
  }

  //Unique items for each filter
  const projetosYear = Array.from(
    new Set(
      projetos
        .sort((a, b) => (a.ano?.ano > b.ano?.ano ? -1 : 1))
        .map((projeto) => projeto.ano?.ano.toString())
    )
  )
  const projetosType = Array.from(
    new Set(
      projetos
        .sort((a, b) => (a.tipo?.nome > b.tipo?.nome ? -1 : 1))
        .map((projeto) => projeto.tipo?.nome)
    )
  )
  const projetosCities = Array.from(
    new Set(
      projetos
        .sort((a, b) => (a.cidade?.nome > b.cidade?.nome ? -1 : 1))
        .map((projeto) => projeto.cidade?.nome)
    )
  )
  const projetosOther = Array.from(
    new Set(
      projetos
        .sort((a, b) => (a.tags?.nome > b.tags?.nome ? -1 : 1))
        .map((projeto) => projeto.tags?.nome)
    )
  )
  const filtersObject = [
    {
      name: 'Ano',
      values: projetosYear,
      active: open.Ano
    },
    {
      name: 'Tipo',
      values: projetosType,
      active: open.Tipo
    },
    {
      name: 'Cidade',
      values: projetosCities,
      active: open.Cidade
    },
    {
      name: 'Outros',
      values: projetosOther,
      active: open.Outros
    }
  ]

  //active options hooks
  const [filtersChosen, setFilter] = useState<
    { name: string; value: string[] }[]
  >([
    {
      name: 'Ano',
      value: []
    },
    {
      name: 'Tipo',
      value: []
    },
    {
      name: 'Cidade',
      value: []
    },
    {
      name: 'Outros',
      value: []
    }
  ])
  const [results, setResults] = useState<ProjetosProps>()

  const selectedClickHandler = (item: string, name: string) => {
    const thisFilter = filtersChosen.find((field) => field.name === name)
    let newFilter: { name: string; value: string[] }

    if (thisFilter?.value.includes(item)) {
      const repetitionIndex = thisFilter.value.indexOf(item)
      const filterValue = thisFilter.value
      filterValue.splice(repetitionIndex, 1)

      newFilter = {
        name: name,
        value: filterValue
      }
    } else {
      const activeFilters: string[] = [
        ...filtersChosen.find((field) => field.name === name)!.value,
        item
      ]

      newFilter = {
        name: name,
        value: activeFilters
      }
    }
    setFilter([
      ...filtersChosen.filter((e) => e.name != newFilter.name),
      newFilter
    ])
  }

  useEffect(() => {
    const filteredResults = projetos.filter((projeto) => {
      return filtersChosen.some((filterOption) => {
        return filterOption.value.some(
          (v) =>
            v === projeto.ano.ano?.toString() ||
            v === projeto.tipo?.nome ||
            v === projeto.cidade?.nome ||
            v === projeto.tags?.nome
        )
      })
    })
    console.log(filtersChosen)
    setResults(filteredResults)
  }, [filtersChosen, projetos])

  const DropDownItem = ({ active, name, values }: FilterObjectProps) => {
    return (
      <>
        <S.Item key={name}>
          <S.ItemContainer onClick={() => ClickHandler(name)}>
            <p>{name}</p>
            <S.ArrowDown
              className="iconify"
              data-icon="dashicons:arrow-down-alt2"
              data-inline="false"
            />
          </S.ItemContainer>
          <S.Dropdown active={active} name={name} values={values}>
            {values.map((item) => (
              <S.DropdownItem
                key={item}
                onClick={() => selectedClickHandler(item, name)}
                className={
                  filtersChosen.some((a) => a.value.some((e) => e === item)) &&
                  'active'
                }
              >
                {item}
              </S.DropdownItem>
            ))}
          </S.Dropdown>
        </S.Item>
      </>
    )
  }

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
          {filtersObject.map((item) => {
            return (
              <DropDownItem
                active={item.active}
                name={item.name}
                values={item.values}
                key={item.name}
              />
            )
          })}
        </S.FilterContainer>
      </S.FilterBar>
      <ProjetosMosaico
        projetos={results?.length ? results : projetos}
        project={false}
      />
    </>
  )
}

export default FilterBarSecond
