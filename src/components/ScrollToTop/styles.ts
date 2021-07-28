import styled from 'styled-components'

export const Container = styled.div`
  & .scrollToTop {
    height: 5rem;
    width: 5rem;
    stroke-width: 20px;
    margin-top: 8px;
    z-index: 100;
    background: ${(props) => props.theme.colors.bg};
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    border: none;
    border-radius: 35%;
    box-shadow: 0px 1px 7px 3px
      ${(props) =>
        props.theme.colors.bg === '#FFFFFF' ? '#00000030' : '#FFFFFF30'};

    & > svg {
      stroke: ${(props) => props.theme.colors.txt};
      fill: ${(props) => props.theme.colors.txt};
      height: 3rem;
      stroke-width: 1rem;
      padding-top: 5px;

      & > * {
        stroke: ${(props) => props.theme.colors.txt};
        fill: ${(props) => props.theme.colors.txt};
      }
    }
  }
`
