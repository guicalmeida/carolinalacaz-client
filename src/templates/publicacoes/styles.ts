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
  height: calc(100vh - 10rem);

  & > h1 {
    text-align: center;
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
  background-position: bottom;

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
  align-self: flex-end;
  padding-bottom: 1.5rem;
  font-size: 1.5rem;
`
export const DigitalTxt = styled.h2`
  font-weight: 600;
  font-size: 3rem;
  padding-right: 2rem;
`

export const DigitalLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`
