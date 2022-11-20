import { Dialog } from '@material-ui/core'
import ProjetosMosaico from 'components/ProjetosMosaico'
import useWindowSize from 'hooks/useWindowResize'
import React, { useEffect, useRef, useState } from 'react'
import slugify from 'slugify'
import { Projeto, ProjetosProps } from 'types/api'
import {
  getResultsText,
  getUniqueSet,
  getUniqueValues,
  removeValue
} from './filterBarHelper'
import * as S from './styles'

const FilterBarV3 = ({ projetos }: ProjetosProps) => {
  const [filteredProjects, setFilteredProjects] = useState([])

  //handle filter clicks
  const [selectedYears, setSelectedYears] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedPlaces, setSelectedPlaces] = useState([])

  const filterHelper = (selectedFilterName, value) => {
    const handleState = (value, currentState, setStateAction) => {
      const newValue = currentState.includes(value.toString())
        ? removeValue(currentState, value.toString())
        : getUniqueValues(currentState, value.toString())
      setStateAction(newValue)
    }

    if (selectedFilterName === 'Ano') {
      handleState(value, selectedYears, setSelectedYears)
    } else if (selectedFilterName === 'Tipo') {
      handleState(value, selectedTypes, setSelectedTypes)
    } else if (selectedFilterName === 'Cidade') {
      handleState(value, selectedPlaces, setSelectedPlaces)
    }
  }

  const [renderedText, setRenderedText] = useState('')

  //react to filters change
  useEffect(() => {
    const newProjects: Projeto[] = []

    projetos.forEach((project) => {
      const checkProject = (currentState, value) => {
        return currentState.length > 0
          ? currentState.includes(value?.toString())
          : true
      }
      const { ano, tipo, cidade } = project

      const isProjectInSelectedYear = checkProject(selectedYears, ano?.ano)
      const isProjectInSelectedType = checkProject(selectedTypes, tipo?.nome)
      const isProjectInSelectedPlace = checkProject(
        selectedPlaces,
        cidade?.nome
      )

      if (
        isProjectInSelectedPlace &&
        isProjectInSelectedType &&
        isProjectInSelectedYear
      ) {
        newProjects.push(project)
      }
    })
    setFilteredProjects(newProjects)

    const textArray = [
      getResultsText(selectedYears),
      getResultsText(selectedTypes),
      getResultsText(selectedPlaces)
    ].filter((a) => !!a)

    textArray.length > 0
      ? setRenderedText(`${textArray.join('   //   ')}`)
      : setRenderedText('')
  }, [projetos, selectedPlaces, selectedTypes, selectedYears])

  //Unique items for each filter
  const projetosYear = getUniqueSet(projetos, 'ano', 'ano')
  const projetosType = getUniqueSet(projetos, 'tipo', 'nome')
  const projetosCities = getUniqueSet(projetos, 'cidade', 'nome')

  const filtersObject = [
    {
      name: 'Ano',
      values: projetosYear
    },
    {
      name: 'Tipo',
      values: projetosType
    },
    {
      name: 'Cidade',
      values: projetosCities
    }
  ]

  //filter behaviour
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedFilterName, setSelectedFilterName] = useState('')

  //variable filter margin
  const dropdownRef = useRef(null as null | HTMLDivElement)
  const [height, setHeight] = useState(0)
  useEffect(() => {
    if (dropdownRef?.current?.clientHeight) {
      const newHeight = dropdownRef.current.clientHeight || 0
      setHeight(newHeight)
    }
  }, [selectedFilterName])

  //check mobile
  const { width } = useWindowSize()
  const isMobile = width! < 768

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
        <S.Results>
          {renderedText ? (
            <S.FilterTextContainer>
              <div style={{ display: 'flex' }}>
                <S.Bold>Filtros ativos:</S.Bold>
                <pre> {renderedText}</pre>
              </div>
              <S.RemoveAll
                onClick={() => {
                  setSelectedPlaces([])
                  setSelectedYears([])
                  setSelectedTypes([])
                }}
              >
                remover filtros
              </S.RemoveAll>
            </S.FilterTextContainer>
          ) : (
            ''
          )}
        </S.Results>
        <Dialog fullScreen open={openDialog} onClose={handleClose}>
          <S.DialogContainer>
            <S.Close onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
            </S.Close>
            <S.FilterBy className="dialog">
              <S.Ico
                className="iconify"
                data-icon="bx:bx-filter"
                data-inline="false"
              />
              Filtrar Por
            </S.FilterBy>
            <S.DialogOptions>
              {filtersObject.map((filter) => {
                return (
                  <S.DialogDrop key={filter.name}>
                    <S.Bold>{filter.name}</S.Bold>
                    <S.GridLayout className="active">
                      {filter.values.map((value) => {
                        return (
                          <S.DropdownItem
                            key={slugify(String(value))}
                            onClick={() => {
                              filterHelper(filter.name, value)
                            }}
                            className={
                              selectedYears.includes(value?.toString()) ||
                              selectedPlaces.includes(value) ||
                              selectedTypes.includes(value)
                                ? 'active'
                                : ''
                            }
                          >
                            {value}
                          </S.DropdownItem>
                        )
                      })}
                    </S.GridLayout>
                  </S.DialogDrop>
                )
              })}
            </S.DialogOptions>
            {!!renderedText && (
              <S.ResultsButtonContainer>
                <S.SeeResults
                  onClick={handleClose}
                >{`ver resultados`}</S.SeeResults>
              </S.ResultsButtonContainer>
            )}
          </S.DialogContainer>
        </Dialog>
      </S.MobileFilterContainer>
    )
  }

  return (
    <div>
      {!isMobile && (
        <S.FilterBar>
          <S.Results>
            {renderedText ? (
              <S.FilterTextContainer>
                <div style={{ display: 'flex' }}>
                  <S.Bold>Filtros ativos:</S.Bold>
                  <pre> {renderedText}</pre>
                </div>
                <S.RemoveAll
                  onClick={() => {
                    setSelectedPlaces([])
                    setSelectedYears([])
                    setSelectedTypes([])
                  }}
                >
                  remover filtros
                </S.RemoveAll>
              </S.FilterTextContainer>
            ) : (
              ''
            )}
          </S.Results>
          <S.FilterContainer
            className={dropdownOpen ? 'active' : ''}
            style={{ marginBottom: height }}
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
                <div key={item.name}>
                  <S.Item>
                    <S.ItemContainer
                      onClick={() => {
                        if (selectedFilterName === item.name) {
                          setDropdownOpen(false)
                          setSelectedFilterName('')
                        } else {
                          setSelectedFilterName(item.name)
                          setDropdownOpen(true)
                        }
                      }}
                    >
                      <p>{item.name}</p>
                      <S.ArrowDown
                        className="iconify"
                        data-icon="dashicons:arrow-down-alt2"
                        data-inline="false"
                      />
                    </S.ItemContainer>
                    <S.Dropdown
                      className={dropdownOpen ? 'active' : ''}
                      ref={dropdownRef}
                    >
                      {filtersObject
                        .find((e) => e.name === selectedFilterName)
                        ?.values.map((value) => {
                          return (
                            <S.DropdownItem
                              key={slugify(String(value))}
                              onClick={() => {
                                filterHelper(selectedFilterName, value)
                              }}
                              className={
                                selectedYears.includes(value?.toString()) ||
                                selectedPlaces.includes(value) ||
                                selectedTypes.includes(value)
                                  ? 'active'
                                  : ''
                              }
                            >
                              {value}
                            </S.DropdownItem>
                          )
                        })}
                    </S.Dropdown>
                  </S.Item>
                </div>
              )
            })}
          </S.FilterContainer>
        </S.FilterBar>
      )}
      {isMobile && <FullDialog />}
      <ProjetosMosaico projetos={filteredProjects} project={false} />
    </div>
  )
}

export default FilterBarV3
