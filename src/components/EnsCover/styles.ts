import styled from 'styled-components'

export const Container = styled.div`
  background-image: url('img/capa_ensaios.jpg');
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
  & > h1 {
    font-size: 8rem;
    text-transform: uppercase;
    line-height: 7.2rem;
    z-index: 1;
    margin: auto;
    color: #fafafa;
    text-shadow: 2px 2px 4px #37343594;
  }
`
