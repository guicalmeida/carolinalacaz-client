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
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    background-color: #37343560;
  }

  & > h1 {
    font-size: clamp(4.5rem, 22vw, 8rem);
    text-transform: uppercase;
    line-height: 7.2rem;
    z-index: 1;
    margin: auto;
    color: #fafafa;
    text-shadow: 2px 2px 4px #37343594;
  }
`
