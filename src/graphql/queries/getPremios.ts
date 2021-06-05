const GET_PREMIOS = /* GraphQL */ `
  query GET_PREMIOS {
    premio {
      Premio {
        Titulo
        Descricao
        ano {
          Ano
        }
      }
    }
  }
`

export default GET_PREMIOS
