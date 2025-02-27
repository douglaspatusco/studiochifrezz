import { useEffect, useState } from "react"

const useFetchTitle = (url: string) => {
  const [title, setTitle] = useState<string | null>(null)

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const res = await fetch(`/api/getTitle?url=${encodeURIComponent(url)}`)
        const data = await res.json()
        if (data.title) {
          setTitle(data.title)
        }
      } catch (error) {
        console.error("Erro ao buscar título:", error)
      }
    }

    fetchTitle()
  }, [url])

  return title
}

export default useFetchTitle
