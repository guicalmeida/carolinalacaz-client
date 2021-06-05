const GET_PREMIOS = /* GraphQL */ `
  query GET_PREMIOS {
    premio {
      imagemDeFundo {
        name
        url
      }
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
