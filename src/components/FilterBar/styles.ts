import styled from 'styled-components'
import { DropdownProps } from '.'

export const FilterBar = styled.div`
  display: flex;
  align-items: flex-start;
  height: 125px;
  margin: 0 auto;
  margin-top: 10rem;
  position: relative;
`

export const Item = styled.li`
  font-size: 1.6rem;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0 3rem;
  color: ${(props) => props.theme.colors.txt};
  display: flex;
  flex-direction: column;
`

export const ArrowDown = styled.span`
  height: 1rem;
  width: 3rem;
  color: ${(props) => props.theme.colors.txt};
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
  background: ${(props) => props.theme.colors.bg};
  border: 1px solid ${(props) => props.theme.colors.txt};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
`
export const Ico = styled.span`
  width: 3.1rem;
  height: 3rem;
  color: ${(props) => props.theme.colors.txt};
`

export const List = styled.ul`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  list-style-type: none;
`
export const DropdownItem = styled.a`
  margin: 0.5rem 2rem;
  width: max-content;
`

export const Dropdown = styled.div<DropdownProps>`
  display: flex;
  position: absolute;
  left: 0;
  top: 50%;
  flex-wrap: wrap;
  opacity: ${props => props.active ? 1 : 0};
  pointer-events: ${props => props.active ? 'auto' : 'none'};
  transition: opacity 2s linear; 
  animation: ${props => props.active ? 'motion 0.1s linear' : 'none'};

  @keyframes motion {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
`
