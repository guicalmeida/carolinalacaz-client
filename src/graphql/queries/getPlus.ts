const GET_PLUS = /* GraphQL */ `
  query GET_PLUS {
    fotosAvulsa {
      FotoAvulsa {
        Titulo
        ano {
          Ano
        }
        cidade {
          Cidade
        }
        foto {
          name
          url
        }
      }
    }
  }
`

export default GET_PLUS
