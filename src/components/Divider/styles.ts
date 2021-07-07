import styled from 'styled-components'

export const Divider = styled.hr`
  stroke: 0.4rem;
  width: 90%;
  background-color: ${(props) => props.theme.colors.txt};
  margin: 3rem auto;
`
