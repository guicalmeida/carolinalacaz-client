import { ReactNode, useEffect, useState } from 'react'
import { ProjetosProps } from 'types/api'
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

const FilterBar = ({ projetos }: ProjetosProps) => {
  const [target, setTarget] = useState('')
  const [open, setOpen] = useState({
    Ano: false,
    Tipo: false,
    Cidade: false,
    Outros: false
  })

  useEffect(() => {
    open[target] && setOpen({ ...open, [target]: false })

    open[target] || setOpen({ ...open, [target]: true })

    console.log(open)
  }, [target])

  console.log(open)

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

  const FilterItem = ({ itemName }: ItemProps) => {
    return (
      <S.Item>
        <S.ItemContainer onClick={() => setTarget(itemName)}>
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
          <FilterItem itemName="Ano">
            {open.Ano ? <Dropdown items={projetosYear} /> : null}
          </FilterItem>
          <FilterItem itemName="Tipo">
            {open.Tipo ? <Dropdown items={projetosType} /> : null}
          </FilterItem>
          <FilterItem itemName="Cidade">
            {open.Cidade ? <Dropdown items={projetosCities} /> : null}
          </FilterItem>
          <FilterItem itemName="Outros">
            {open.Outros ? <Dropdown items={projetosOther} /> : null}
          </FilterItem>
        </S.List>
      </S.FilterContainer>
    </S.FilterBar>
  )
}

export default FilterBar
