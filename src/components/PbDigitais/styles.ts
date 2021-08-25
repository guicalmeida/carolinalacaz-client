import styled from 'styled-components'

export const Container = styled.div`
  margin: 5rem 5rem 20rem 5rem;

  @media (max-width: 767px) {
    margin: 1rem;
  }

  & .accTitle {
    font-weight: 600;
    font-size: 2rem;
  }
`

export const SiteLinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SiteLink = styled.a`
  font-weight: 300;
  font-size: 1.5rem;
  text-decoration: underline;
  margin: 1rem;

  @media (min-width: 768px) {
    width: 35rem;
  }
`
export const Titulo = styled.h2`
  text-align: center;
  margin: 0 auto;
  font-weight: 600;
  padding-top: 4rem;
  text-align: center;
  font-size: 2.5rem;
`
