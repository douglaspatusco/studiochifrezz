import React from "react"
import Image from "next/image"
import useFetchTitle from "@/hooks/useFetchTitle"
import { mockNewsPreview } from "@/data/NewsPreview"

import {
  NewsContainer,
  NewsCard,
  NewsImage,
  NewsContent,
  NewsTitle,
  NewsDescription,
  NewsDate,
  NewsLink
} from "./styles"

const NewsSection: React.FC = () => {
  return (
    <>
      <h2>Últimas Notícias</h2>
      <NewsContainer>
        {mockNewsPreview.map((news, index) => {
          const fetchedTitle = useFetchTitle(news.url)
          const title = fetchedTitle || "" // Usa o título do hook ou uma string vazia

          return (
            <NewsCard key={index}>
              <NewsImage
                src={news.image}
                alt={title}
                width={320}
                height={180}
              />
              <NewsContent>
                <div>
                  <NewsDate>{news.released}</NewsDate>
                  <NewsTitle>{title}</NewsTitle>
                  <NewsDescription>{news.description}</NewsDescription>
                </div>
                <NewsLink href={news.url} target="_blank" rel="noopener noreferrer">
                  Ler mais
                </NewsLink>
              </NewsContent>
            </NewsCard>
          )
        })}
      </NewsContainer>
    </>
  )
}

export default NewsSection
