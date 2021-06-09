import styled from 'styled-components'

export const FichaTecnica = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.overlayTxt};
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
  background: ${(props) => props.theme.colors.overlayGradient};
  position: absolute;
  width: 35rem;
  height: 35rem;
  display: none;
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

  & > img {
    object-fit: cover;
  }
`
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem;
  & > ${FotoContainer} {
    margin: 10px;
  }
`
