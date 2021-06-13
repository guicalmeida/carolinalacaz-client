const GET_PREMIOS = /* GraphQL */ `
  query GET_PREMIOS {
    premio {
      background {
        name
        url
      }
      itens {
        nome
        descricao
        ano {
          ano
        }
      }
    }
  }
`

export default GET_PREMIOS
