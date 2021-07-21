const GET_PROJETOS = /* GraphQL */ `
  query GET_PROJETOS {
    projetos {
      nome
      ano {
        ano
      }
      cidade {
        nome
      }
      slug
      galeria {
        name
        url
      }
      capa {
        name
        url
      }
      tags {
        nome
        slug
      }
      escritorio {
        nome
      }
      prioridade
      tipo {
        nome
      }
    }
  }
`

export default GET_PROJETOS
