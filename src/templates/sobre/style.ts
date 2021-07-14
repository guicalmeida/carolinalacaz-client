import styled from 'styled-components'

export const BioWrapper = styled.div`
  width: 62vw;
  margin-right: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & > * {
    text-align: left;
    width: 62rem;
    margin: 0 auto;
  }
  @media (max-width: 767px) {
    width: 95vw;
    margin: 0 auto;
    & > * {
      max-width: 85vw;
      text-align: center;
    }

    & > h1 {
      font-size: 4rem;
      line-height: normal;
    }
  }
`

export const PerfilWrapper = styled.div`
  height: 85vh;
  width: 35vw;
  margin: auto auto 0 auto;

  @media (max-width: 767px) {
    width: 90vw;
    bottom: 0;
    left: 5vw;
    margin-top: 10rem;
  }

  & > img {
    object-fit: contain;
    width: 100%;
    overflow: hidden;
    object-position: bottom;
  }
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`
