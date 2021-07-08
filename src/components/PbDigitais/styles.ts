import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 15rem;
  min-height: 100vh;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const SiteColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    margin-bottom: 3rem;
  }
`

export const SiteTitle = styled.h3`
  font-weight: 600;
  font-size: 3rem;
  @media (max-width: 767px) {
    margin-bottom: 1rem;
  }
  margin-bottom: 5.5rem;
`

export const SiteLinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SiteLink = styled.a`
  font-weight: 300;
  font-size: 2rem;
  text-decoration: underline;
`
