import { ReactNode, useState } from 'react'
import * as S from './styles'

interface ItemProps extends React.HTMLProps<HTMLDivElement> {
  itemName: string
  children: ReactNode
}

type DropdownProps = {
  items: string[]
}

const Dropdown = ({ items }: DropdownProps) => {
  return (
    <S.Dropdown>
      {items.map((item) => (
        <S.DropdownItem key={item}>{item}</S.DropdownItem>
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
          <S.Item>
            <S.ItemContainer>
              <p>a</p>
              <S.ArrowDown
                className="iconify"
                data-icon="dashicons:arrow-down-alt2"
                data-inline="false"
              />
            </S.ItemContainer>

            <S.Dropdown>
              <S.DropdownItem>teste</S.DropdownItem>
            </S.Dropdown>
          </S.Item>
        </S.List>
      </S.FilterContainer>
    </S.FilterBar>
  )
}

export default FilterBar
