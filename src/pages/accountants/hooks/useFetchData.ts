import  { useState, useEffect } from 'react'

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
  results: AccountantType[] // Update the property name to 'data'
  info: {
    page: number
  }
}

const useFetchData = () => {
  const [data, setData] = useState<AccountantType[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?gender=female&page=1&results=4')
        const json: AccountantResponseType = await response.json()
        setData(json.results)
        setLoading(false)
      } catch (error: unknown) {
        setError(error as Error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, error, loading }
}

export default useFetchData
