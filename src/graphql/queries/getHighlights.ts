const GET_HIGHLIGHTS = /* GraphQL */ `
  query GET_HIGHLIGHTS {
    paginaInicial {
      Arquitetura {
        name
        url
      }
      Ensaios {
        name
        url
      }
    }
  }
`

export default GET_HIGHLIGHTS
