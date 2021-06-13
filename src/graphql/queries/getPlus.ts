const GET_PLUS = /* GraphQL */ `
  query GET_PLUS {
    plus {
      fotografia {
        nome
        cidade {
          nome
        }
        ano {
          ano
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
