import styled from 'styled-components'

export const FichaTecnica = styled.div`
  display: flex;
  flex-direction: column;
  color: #fafafa;
  margin: 0 auto 2em 2rem;
`
export const Titulo = styled.h2`
  font-weight: 600;
  font-size: 1.8rem;
`
export const Texto = styled.p`
  font-size: 16px;
`

export const Dados = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin: 0 2px;
  }
`

export const Overlay = styled.div`
  background: linear-gradient(0deg, #373435 0%, rgba(196, 196, 196, 0) 100%);
  position: absolute;
  width: 35rem;
  height: 35rem;
  display: none;
`
export const Foto = styled.img`
  width: 35rem;
  height: 35rem;
  object-fit: cover;
`
export const FotoContainer = styled.div`
  width: 35rem;
  height: 35rem;
  cursor: pointer;

  &:hover ${Overlay} {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > ${FotoContainer} {
    margin: 10px;
  }
`
