import styled from 'styled-components'

export const FilterBar = styled.div`
  display: flex;
  align-items: flex-start;
  height: 125px;
  margin: 0 auto;
  margin-top: 4rem;
`

export const Item = styled.li`
  font-size: 1.6rem;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0 3rem;
  color: #373435;
  display: flex;
  flex-direction: column;
`

export const ArrowDown = styled.span`
  height: 1rem;
  width: 3rem;
  color: #373435;
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`
export const FilterBy = styled.div`
  width: 14rem;
  height: 4rem;
  background: #fff;
  border: 1px solid #373435;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
`
export const Ico = styled.span`
  width: 3.1rem;
  height: 3rem;
  color: #373435;
`

export const List = styled.ul`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  list-style-type: none;
`
export const DropdownItem = styled.a`
  margin: 0 20px;
`

export const Dropdown = styled.div`
  display: flex;
  position: absolute;
  transform: translateY(50px);

  &::before {
    content: '';
    height: 1px;
    width: 8rem;
    background-color: #373435;
    position: absolute;
    transform: translateY(-20px);
  }
`
