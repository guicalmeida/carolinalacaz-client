import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  & > img {
    margin-bottom: 4rem;
    max-height: 85vh;
    object-fit: contain;
    max-width: 90%;
    pointer-events: none;
  }
`
