import styled from 'styled-components'

export const InternalLink = styled.a`
  font-weight: 600;
  color: ${(props) => props.theme.colors.txt};
  cursor: pointer;
  text-decoration: underline;
`
