import styled from 'styled-components'

export const ItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: center;
`

export const TxtDiv = styled.div`
  padding: 0 1.5rem;
`

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
`

export const Info = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  text-align: center;
  font-style: italic;

  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`

export const ChevronContainer = styled.div`
  padding-top: 1rem;
`
