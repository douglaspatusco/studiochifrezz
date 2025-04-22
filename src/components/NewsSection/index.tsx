import React, { useState, useEffect } from "react"
import { mockNewsPreview } from "@/data/NewsPreview"
import { useTranslation } from 'next-i18next'

import {
  NewsCards,
  NewsCard,
  NewsImage,
  NewsContent,
  NewsTitle,
  NewsDescription,
  NewsDate,
  NewsLink,
  ShowMoreButton,
  NewsContainer,
  NewsTag,
  NewsHeader
} from "./styles"

const NewsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false)
  const [titles, setTitles] = useState<{ [key: string]: string }>({})
  const { t } = useTranslation('common')

  useEffect(() => {
    const fetchTitles = async () => {
      const newTitles: { [key: string]: string } = {}
      await Promise.all(
        mockNewsPreview.map(async (news) => {
          if (!titles[news.url]) { // Evita buscar o mesmo título novamente
            try {
              const res = await fetch(`/api/getTitle?url=${encodeURIComponent(news.url)}`)
              const data = await res.json()
              if (data.title) {
                newTitles[news.url] = data.title
              }
            } catch (error) {
              console.error("Erro ao buscar título:", error)
            }
          }
        })
      )
      setTitles((prev) => ({ ...prev, ...newTitles }))
    }

    fetchTitles()
  }, [mockNewsPreview]) // Executa apenas quando mockNewsPreview muda

  const handleToggleShow = () => {
    setShowAll((prev) => !prev)
  }

  return (
    <NewsContainer>
      <h1>{t('last-news')}</h1>
      <NewsCards>
        {mockNewsPreview
          .slice(0, showAll ? mockNewsPreview.length : 6) // Mostra no máximo 6 inicialmente
          .map((news, index) => {
            const title = titles[news.url] || ""

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
                    <NewsHeader>
                      <NewsDate>{news.released}</NewsDate>
                      <NewsTag>{news.tag}</NewsTag>
                    </NewsHeader>
                    <NewsTitle>{news.title}</NewsTitle>
                    <NewsDescription>{news.description}</NewsDescription>
                  </div>
                  <NewsLink href={news.url} target="_blank" rel="noopener noreferrer">
                    {t('read-more')}
                  </NewsLink>
                </NewsContent>
              </NewsCard>
            )
          })}
      </NewsCards>
      <ShowMoreButton onClick={handleToggleShow}>
        {showAll ? t('see-less') : t('see-more')}
      </ShowMoreButton>
    </NewsContainer>
  )
}

export default NewsSection
