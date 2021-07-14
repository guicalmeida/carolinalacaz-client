import { ChangeEvent, RefObject, useEffect, useRef, useState } from 'react'
import { EnsaiosProps, ProjetosProps } from 'types/api'
import * as S from './styles'

type ResultsProps = {
  nome: string
  slug: string
  tipo: string
}[]

const Search = ({ ensaios, projetos }: ProjetosProps & EnsaiosProps) => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<ResultsProps>([])
  const [searchFocus, setSearchFocus] = useState(false)

  const useOutsideAlerter = (ref: RefObject<HTMLInputElement>) => {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event!.target)) {
          setSearchFocus(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const allPages: ResultsProps = []
    ensaios.map((a) =>
      allPages.push({
        nome: a.nome,
        slug: `/ensaios/${a.slug}`,
        tipo: 'ensaio'
      })
    )
    projetos.map((a) =>
      allPages.push({
        nome: a.nome,
        slug: `/arquitetura/${a.slug}`,
        tipo: 'projeto'
      })
    )

    setResults(
      allPages
        .filter((a) => a.nome.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) =>
          a.nome.indexOf(search) > b.nome.indexOf(search) ? 1 : -1
        )
    )
  }, [search, ensaios, projetos])

  return (
    <S.Container ref={wrapperRef}>
      <S.Lupa>
        <svg
          className="lupa"
          width="114"
          height="114"
          viewBox="0 0 114 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 106C3.5 106 23.308 86.1921 36 73.5M36 73.5C51.9468 89.3093 77.5532 89.3093 93.5 73.5C109.585 57.5533 109.585 31.4468 93.5 15.5C77.5532 -0.309259 51.9468 -0.309259 36 15.5C19.9146 31.4468 19.9146 57.5533 36 73.5Z"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </S.Lupa>
      <S.Busca onChange={searchHandler} onFocus={() => setSearchFocus(true)} />
      {searchFocus && (
        <S.ResultList>
          {results.map((result) => {
            return (
              <a key={result.slug} href={result.slug}>
                <S.SearchItem>
                  <S.Result>{result.nome.toUpperCase()}</S.Result>
                  <S.ItemType>{result.tipo.toUpperCase()}</S.ItemType>
                </S.SearchItem>
              </a>
            )
          })}
        </S.ResultList>
      )}
    </S.Container>
  )
}

export default Search
