const GET_PLUS = /* GraphQL */ `
  query GET_PLUS {
    foto {
      foto {
        nome
        ano {
          ano
        }
        cidade {
          cidade
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
