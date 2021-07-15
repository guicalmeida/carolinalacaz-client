import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 10rem;
`

export const ProjectsInfosDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 73%;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;

    &:first-child > div {
      margin-bottom: 2rem;
    }
  }
`
export const ProjectInfosLeft = styled.div`
  display: flex;
  align-items: center;
`
export const ProjectTitle = styled.h1`
  font-weight: 600;
  font-size: clamp(3rem, 5vw, 3.8rem);
`
export const ProjectText = styled.h2`
  font-weight: 300;
  font-size: clamp(1.8rem, 5vw, 2.5rem);
`
export const ProjectInfosRight = styled.div`
  display: flex;
  margin-left: 1rem;
`
