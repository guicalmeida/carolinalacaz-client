import styled from 'styled-components'

export const Foto = styled.img`
  width: 80rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  & > ${Foto} {
    margin-bottom: 4rem;
  }
`
