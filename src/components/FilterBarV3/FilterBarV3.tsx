import React, { useEffect, useState } from 'react'
import { ProjetosProps } from 'types/api'
import * as S from './styles'

const FilterBarV3 = ({ projetos }: ProjetosProps) => {
  const [filteredProjects, setFilteredProjects] = useState([])

  const [selectedYears, setSelectedYears] = useState([])
  const [selectedPlaces, setSelectedPlaces] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])

  const getUniqueValues = (array, value) => {
    const newValue = array.slice()
    newValue.push(value)
    return Array.from(new Set(newValue))
  }

  const filterHelper = (selectedFilterName, value) => {
    if (selectedFilterName === 'Ano') {
      const uniqueValues = getUniqueValues(selectedYears, value)
      setSelectedYears(uniqueValues)
    } else if (selectedFilterName === 'Tipo') {
      const uniqueValues = getUniqueValues(selectedTypes, value)
      setSelectedTypes(uniqueValues)
    } else if (selectedFilterName === 'Cidade') {
      const uniqueValues = getUniqueValues(selectedPlaces, value)
      setSelectedPlaces(uniqueValues)
    }
  }

  //react to filters change
  useEffect(() => {
    const newProjects = []

    projetos.forEach((project) => {
      const isProjectInSelectedYear =
        selectedYears.length > 0
          ? selectedYears.includes(String(project.ano.ano))
          : true

      const isProjectInSelectedType =
        selectedTypes.length > 0
          ? selectedTypes.includes(project.tipo.nome)
          : true

      const isProjectInSelectedPlace =
        selectedPlaces.length > 0
          ? selectedPlaces.includes(project.cidade.nome)
          : true

      if (
        isProjectInSelectedPlace &&
        isProjectInSelectedType &&
        isProjectInSelectedYear
      ) {
        newProjects.push(project)
      }
    })

    console.log(newProjects)
  }, [selectedPlaces, selectedTypes, selectedYears])

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

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedFilterName, setSelectedFilterName] = useState('')
  const [itemActive, setItemActive] = useState(false)

  return (
    <div>
      <S.FilterBar>
        <S.Results> aqui</S.Results>
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
                  <S.Dropdown className={dropdownOpen ? 'active' : ''}>
                    {filtersObject
                      .find((e) => e.name === selectedFilterName)
                      ?.values.map((value) => {
                        return (
                          <S.DropdownItem
                            key={value}
                            onClick={() => {
                              filterHelper(selectedFilterName, value)
                              setItemActive(!itemActive)
                            }}
                            className={
                              selectedYears.includes(value) ||
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
    </div>
  )
}

export default FilterBarV3
