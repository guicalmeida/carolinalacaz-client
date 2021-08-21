import styled from 'styled-components'

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  width: max-content;
  max-width: 87vw;
`

export const TxtDiv = styled.div`
  padding: 0 1.5rem;
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`

export const Info = styled.p`
  font-size: 2rem;
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
