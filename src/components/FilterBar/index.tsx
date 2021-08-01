import { ReactNode, useEffect, useState } from 'react'
import { ProjetosProps } from 'types/api'
import * as S from './styles'

interface ItemProps extends React.HTMLProps<HTMLDivElement> {
  itemName: string
}

type DDItemProps = {
  itemName: string
}

export type DropdownProps = {
  items: string[]
  active: boolean
}

const FilterBar = ({ projetos }: ProjetosProps) => {
  const initialState = {
    Ano: false,
    Tipo: false,
    Cidade: false,
    Outros: false,
    '': false  
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
    console.log(openState)
  }, [target, clickCounter])

  const ClickHandler = (itemName: string) => {
    console.log('click')
    setClickCounter(clickCounter + 1)
    setTarget(itemName == target ? "" : itemName)
  }


  const DropdownItem = ({ itemName }: DDItemProps) => {
    return <S.DropdownItem>{itemName}</S.DropdownItem>
  }
  const Dropdown = ({ items, active }: DropdownProps) => {
    return (
      <S.Dropdown active={active} items={items}>
        {items.map((item) => (
          <DropdownItem key={item} itemName={item} />
        ))}
      </S.Dropdown>
    )
  }
  const FilterItem = ({ itemName }: ItemProps) => {
    return (
      <S.Item>
        <S.ItemContainer onClick={() => ClickHandler(itemName)}>
          <p>{itemName}</p>
          <S.ArrowDown
            className="iconify"
            data-icon="dashicons:arrow-down-alt2"
            data-inline="false"
          />
        </S.ItemContainer>
      </S.Item>
    )
  }

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

  return (
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
          <FilterItem itemName="Ano" />
          <Dropdown items={projetosYear} active={open.Ano}/>
          <FilterItem itemName="Tipo" />
          <Dropdown items={projetosType} active={open.Tipo}/>
          <FilterItem itemName="Cidade" />
          <Dropdown items={projetosCities} active={open.Cidade}/>
          <FilterItem itemName="Outros" />
          <Dropdown items={projetosOther} active={open.Outros}/>
        </S.List>
      </S.FilterContainer>
    </S.FilterBar>
  )
}

export default FilterBar
