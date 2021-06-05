const GET_SOBRE = /* GraphQL */ `
  query GET_SOBRE {
    sobre {
      Nome
      Sobre
      Foto {
        name
        url
      }
    }
  }
`

export default GET_SOBRE
