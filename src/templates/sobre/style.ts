import styled from 'styled-components'

export const BioWrapper = styled.div`
  width: 62vw;
  margin-right: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > * {
    text-align: left;
    width: 62rem;
    margin: 0 auto;
  }
`

export const PerfilWrapper = styled.div`
  height: 85vh;
  width: 35vw;
  margin: auto auto 0 auto;
`

export const Foto = styled.img`
  object-fit: contain;
  width: 100%;
  overflow: none;
`

export const Container = styled.div`
  display: flex;
  overflow: none;
`
