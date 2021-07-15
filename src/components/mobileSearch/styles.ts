import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 300ms;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 12;
  background-color: ${(props) => props.theme.colors.bg};
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
  width: 75vw;
  height: 3rem;
  margin-right: 3rem;
  margin-left: 1rem;
  background-color: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.txt};
  transition: 300ms;
  font-size: 2rem;

  &:focus {
    outline: none;
  }
`

export const ResultList = styled.div`
  width: 95vw;
  height: max-content;
  max-height: 70vh;
  background-color: ${(props) => props.theme.colors.bg};
  overflow-y: scroll;

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
  font-size: 1.5rem;
`
export const Result = styled.p`
  font-size: 2rem;
  text-align: left;
`

export const SearchbarWrapper = styled.div`
  display: flex;
  margin: 7rem 0 3rem 1rem;
  width: 96vw;
`
