import { useState, useEffect } from 'react'

type AccountantType = {
  cell: string // numer telefonu
  name: {
    first: string
    last: string
  }
  email: string
  picture: { thumbnail: string; medium: string }
  login: {
    uuid: string
  }
}

type AccountantResponseType = {
  results: AccountantType[]
  info: {
    page: number
  }
}

const useFetchData = () => {
  const [data, setData] = useState<AccountantType[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const [page, setPage] = useState<number>(1)
  const [dataFetched, setDataFetched] = useState<boolean>(false)

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://randomuser.me/api/?gender=female&page=${page}&results=4`
      )
      const json: AccountantResponseType = await response.json()
      setData(data ? [...data, ...json.results] : json.results)
      setLoading(false)
      setDataFetched(true)
    } catch (error: unknown) {
      setError(error as Error)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!dataFetched) {
      fetchData()
    }
  }, [page])

  const fetchMore = () => {
    setError(null)
    setLoading(false)
    setDataFetched(false)
    setPage((prevPage) => prevPage + 1)
  }

  return { data, error, loading, fetchMore }
}

export default useFetchData
