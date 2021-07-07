import styled from 'styled-components'

export type BGProps = {
  imgSrc: string
}

export const Container = styled.div<BGProps>`
  background-image: url(${(props) => props.imgSrc});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: 0;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    background-color: #ffffff60;
  }
  & > h1 {
    font-size: clamp(5rem, 5vw, 8rem);
    text-transform: uppercase;
    line-height: 7.2rem;
    z-index: 1;
    margin: auto;
    color: #1f1e1e;
    text-shadow: 2px 2px 4px #37343594;
  }
`
