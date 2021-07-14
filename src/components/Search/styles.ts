import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  transition: 300ms;
  position: relative;
`

export const Lupa = styled.a`
  color: ${(props) => props.theme.colors.txt};
  cursor: pointer;
  transition: 300ms;
  height: 25px;
  width: 25px;

  & > .lupa {
    width: 100%;
    height: 100%;
    stroke-width: 6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`

export const Busca = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.txt};
  width: 25rem;
  height: 3rem;
  margin-right: 3rem;
  margin-left: 1rem;
  background-color: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.txt};
  transition: 300ms;

  &:focus {
    outline: none;
  }
`

export const ResultList = styled.div`
  position: absolute;
  width: 25rem;
  height: max-content;
  max-height: 20rem;
  background-color: ${(props) => props.theme.colors.bg};
  top: 3.5rem;
  overflow-y: scroll;
  right: 3rem;

  &::-webkit-scrollbar {
    width: 3px;
    height: 6px;
  }
`
export const SearchItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`
export const ItemType = styled.p`
  color: ${(props) => props.theme.colors.txt};
  opacity: 0.3;
`
export const Result = styled.p`
  font-size: 1.6rem;
  text-align: left;
`
