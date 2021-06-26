import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  & > img {
    margin-bottom: 4rem;
    max-height: 85vh;
    object-fit: contain;
    max-width: 100%;
  }
`
