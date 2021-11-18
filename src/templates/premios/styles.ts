import styled from 'styled-components'

type BackgroundProps = {
  imgSrc: string
}

export const IndiceWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 10rem);

  & > .pubImpressa {
    flex-grow: 0.8;
  }
`
export const Background = styled.div<BackgroundProps>`
  background-image: url(${(props) => props.imgSrc});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: 0;
  background-position: center;
  position: relative;

  & * {
    z-index: 2;
  }

  &:after {
    position: absolute;
    content: '';
    width: 100vw;
    background-color: ${(props) => props.theme.colors.bg};
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.9;
    z-index: 1;
  }
`

export const ToPremios = styled.div`
  padding-bottom: 2rem;
  font-size: 1.5rem;

  @media (max-width: 767px) {
    top: 20rem;
    text-align: center;
    width: 100vw;

    a {
      color: #ffffff50;
    }
  }
  @media (min-width: 768px) {
    right: 0;
    bottom: 0;
  }
`

export const TituloImpresso = styled.h2`
  font-weight: 600;
  padding-bottom: 4rem;
  text-align: center;
  font-size: 2.5rem;

  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`

export const HeaderWrapper = styled.div`
  text-align: center;

  & > h1 {
    text-align: center;
    font-size: 6rem;
    @media (max-width: 767px) {
      font-size: 4rem;
    }
  }
`
