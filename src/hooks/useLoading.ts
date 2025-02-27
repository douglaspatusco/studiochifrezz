import { useEffect, useState } from 'react'

export const useLoading = (asyncFunction: () => Promise<void>) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      await asyncFunction() // Executa a função passada como argumento
      setLoading(false)
    }

    fetchData()
  }, [asyncFunction])

  return loading
}
