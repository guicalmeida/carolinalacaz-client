import { ReactNode, useState } from 'react'
import * as S from './styles'

interface ItemProps extends React.HTMLProps<HTMLDivElement> {
  itemName: string
  children: ReactNode
}

type DDItemProps = {
  itemName: string
}

type DropdownProps = {
  items: string[]
}

const DropdownItem = ({ itemName }: DDItemProps) => {
  return <S.DropdownItem>{itemName}</S.DropdownItem>
}

const Dropdown = ({ items }: DropdownProps) => {
  return (
    <S.Dropdown>
      {items.map((item) => (
        <DropdownItem key={item} itemName={item} />
      ))}
    </S.Dropdown>
  )
}

const FilterItem = ({ itemName, children }: ItemProps) => {
  const [open, setOpen] = useState(false)

  return (
    <S.Item>
      <S.ItemContainer onClick={() => setOpen(!open)}>
        <p>{itemName}</p>
        <S.ArrowDown
          className="iconify"
          data-icon="dashicons:arrow-down-alt2"
          data-inline="false"
        />
      </S.ItemContainer>

      {open && children}
    </S.Item>
  )
}

const FilterBar = () => {
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
          <FilterItem itemName="Projetos">
            <Dropdown
              items={['recentes', 'residencial', 'interiores', 'comercial']}
            />
          </FilterItem>
          <FilterItem itemName="Localização">
            <Dropdown items={['campo', 'praia']} />
          </FilterItem>
          <FilterItem itemName="Ano">
            <Dropdown items={['2021', '2020', '2019', '2018', '2017']} />
          </FilterItem>
          <FilterItem itemName="Formato">
            <Dropdown items={['retrato', 'drone', 'gif']} />
          </FilterItem>
        </S.List>
      </S.FilterContainer>
    </S.FilterBar>
  )
}

export default FilterBar
