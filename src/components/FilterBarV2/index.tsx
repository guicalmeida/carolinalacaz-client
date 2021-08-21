import { Dialog, Slide } from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions/transition'
import { ContentContainer } from 'components/contentContainer'
import ProjetosMosaico from 'components/ProjetosMosaico'
import useWindowSize from 'hooks/useWindowResize'
import React, { useEffect, useState } from 'react'
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
  const { width } = useWindowSize()
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

  const counter = () => {
    setClickCounter(clickCounter + 1)
    return clickCounter
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

  const [textResults, setTextResults] = useState<string[]>([])

  useEffect(() => {
    const filteredResults = projetos.filter((projeto) => {
      return filtersChosen.some((filterOption) => {
        return filterOption.value.some(
          (v) =>
            v === projeto.ano.ano?.toString() ||
            v === projeto.tipo?.nome ||
            v === projeto.cidade?.nome
        )
      })
    })
    setResults(filteredResults)
  }, [filtersChosen, projetos])

  useEffect(() => {
    const plainResults: string[] = []
    filtersChosen.forEach((a) => {
      a.value.forEach((e) => {
        plainResults.push(e.toString())
      })
    })
    setTextResults(plainResults)
  }, [filtersChosen])

  const [renderedText, setRenderedText] = useState('')
  useEffect(() => {
    if (textResults.length === 1) {
      setRenderedText(`Vendo resultados referentes à ${textResults}`)
    } else if (textResults.length > 1) {
      const lastItem = textResults[textResults.length - 1]
      textResults.pop()
      setRenderedText(
        `Vendo resultados referentes à ${textResults.join(', ')} e ${lastItem}`
      )
    } else {
      setRenderedText('')
    }
  }, [textResults])

  const [openDialog, setOpenDialog] = useState(false)

  const handleClickOpen = () => {
    setOpenDialog(true)
  }

  const handleClose = () => {
    setOpenDialog(false)
  }

  const FullDialog = () => {
    return (
      <S.MobileFilterContainer>
        <a onClick={handleClickOpen}>
          <S.FilterBy>
            <S.Ico
              className="iconify"
              data-icon="bx:bx-filter"
              data-inline="false"
            />
            Filtrar Por
          </S.FilterBy>
        </a>
        <Dialog fullScreen open={openDialog} onClose={handleClose}>
          <S.DialogContainer>
            <S.Close onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </S.Close>
            <S.Results>{renderedText}</S.Results>
            <S.FilterBy>
              <S.Ico
                className="iconify"
                data-icon="bx:bx-filter"
                data-inline="false"
              />
              Filtrar Por
            </S.FilterBy>
            <S.DialogOptions>
              {filtersObject.map((item) => {
                return (
                  <DropDownItem
                    active={item.active}
                    className={item.active && 'pd-bt-4'}
                    name={item.name}
                    values={item.values}
                    key={item.name}
                  />
                )
              })}
            </S.DialogOptions>
          </S.DialogContainer>
        </Dialog>
      </S.MobileFilterContainer>
    )
  }

  const DropDownItem = ({ active, name, values }: FilterObjectProps) => {
    return (
      <>
        <S.Item key={name + counter}>
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
                key={item + counter}
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
  const isMobile = width! < 768
  return (
    <>
      {!isMobile && (
        <S.FilterBar>
          <S.Results>{renderedText}</S.Results>
          <S.FilterContainer
            className={filtersObject.some((a) => a.active) && 'paddingBottom'}
          >
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
                  className={item.active && 'pd-bt-4'}
                  name={item.name}
                  values={item.values}
                  key={item.name}
                />
              )
            })}
          </S.FilterContainer>
        </S.FilterBar>
      )}

      {isMobile && <FullDialog />}
      <ProjetosMosaico
        projetos={results?.length ? results : projetos}
        project={false}
      />
    </>
  )
}

export default FilterBarSecond
