import React from "react"
import useFetchTitle from "@/hooks/useFetchTitle"

type NewsItem = {
  url: string
}

const NewsSection: React.FC<{ news: NewsItem[] }> = ({ news }) => {
  return (
    <section>
      <h2>Últimas Notícias</h2>
      <ul>
        {news.map((item, index) => {
          const title = useFetchTitle(item.url)
          return (
            <li key={index}>
              {title ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </a>
              ) : (
                <span>Carregando título...</span>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default NewsSection
