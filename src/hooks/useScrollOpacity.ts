import { useEffect, useState } from 'react'

const useScrollOpacity = (maxScroll: number = 200) => {
  const [opacity, setOpacity] = useState<number>(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const newOpacity = Math.max(0, 1 - scrollTop / maxScroll)
      setOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [maxScroll])

  return opacity
}

export default useScrollOpacity
