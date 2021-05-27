const GET_ENSAIOS = /* GraphQL */ `
  query GET_ENSAIOS {
    autoralEnsaios {
      Nome
      descricao_curta
      descricao
      Ano {
        Ano
      }
      Cidade {
        Cidade
      }
      slug
      Galeria {
        name
        url
      }
      Capa {
        name
        url
      }
      Tags {
        Tag
      }
    }
  }
`

export default GET_ENSAIOS
