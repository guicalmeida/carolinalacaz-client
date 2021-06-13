const GET_HIGHLIGHTS = /* GraphQL */ `
  query GET_HOME {
    home {
      arquitetura {
        name
        url
      }
      ensaio {
        name
        url
      }
    }
  }
`

export default GET_HIGHLIGHTS
