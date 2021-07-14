import styled from 'styled-components'

export const FichaTecnica = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.overlayTxt};
  margin: 0 auto 2em 2rem;
  opacity: 0;
  transition: opacity 0.2s linear;
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 10;

  @media (max-width: 767px) {
    opacity: 1;
  }
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

export const FotoContainer = styled.div`
  width: 35rem;
  height: 35rem;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgb(255, 255, 255) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.2s linear;

    @media (max-width: 767px) {
      opacity: 1;
    }
  }

  &:hover {
    & ${FichaTecnica} {
      opacity: 1;
    }

    &:after {
      opacity: 1;
    }
    transition: opacity 0.2s linear;
  }

  & > img {
    object-fit: cover;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
`
export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > ${FotoContainer} {
    margin: 10px;
  }
`
