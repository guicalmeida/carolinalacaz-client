const GET_SOBRE = /* GraphQL */ `
  query GET_SOBRE {
    sobre {
      nome
      descricao
      foto {
        name
        url
      }
    }
  }
`

export default GET_SOBRE
