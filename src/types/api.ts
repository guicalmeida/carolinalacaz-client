export type AnoProps = {
  Ano: number
}
export type CidadeProps = {
  Cidade: string
}
export type ImagemProps = {
  name: string
  url: string
}

export type TagsProps = {
  Tag: string
}

export type EnsaioUnitProps = {
  EnsaioUnit: {
    Nome: string
    descricao_curta: string
    descricao: string
    slug: string
    Ano: AnoProps
    Cidade: CidadeProps
    Galeria: ImagemProps[]
    Capa: ImagemProps
    Tags: TagsProps
  }
}

export type EnsaiosProps = {
  autoralEnsaios: {
    Nome: string
    descricao_curta: string
    descricao: string
    slug: string
    Ano: AnoProps
    Cidade: CidadeProps
    Galeria: ImagemProps[]
    Capa: ImagemProps
    Tags: TagsProps
  }[]
}

export type ProjetoUnitProps = {
  ProjetoUnit: {
    Nome: string
    descricao: string
    slug: string
    Ano: AnoProps
    Cidade: CidadeProps
    Galeria: ImagemProps[]
    Capa: ImagemProps
    Tags: TagsProps
    Escritorio: {
      Escritorio: string
    }
  }
}

export type ProjetosProps = {
  arquiteturaProjetos: {
    Nome: string
    descricao: string
    slug: string
    Ano: AnoProps
    Cidade: CidadeProps
    Galeria: ImagemProps[]
    Capa: ImagemProps
    Tags: TagsProps
    Escritorio: {
      Escritorio: string
    }
  }[]
}

export type SobreProps = {
  sobre: {
    Nome: string
    Sobre: string
    Foto: ImagemProps
  }
}
