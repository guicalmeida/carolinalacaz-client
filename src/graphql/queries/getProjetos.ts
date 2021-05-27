const GET_PROJETOS = /* GraphQL */ `
  query GET_PROJETOS {
    arquiteturaProjetos {
      Nome
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
      tags {
        Tag
      }
      Escritorio {
        Escritorio
      }
    }
  }
`

export default GET_PROJETOS
