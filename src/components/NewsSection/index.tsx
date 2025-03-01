import React, { useState, useEffect } from "react"
import useFetchTitle from "@/hooks/useFetchTitle"
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
  const { t } = useTranslation('common')
  const [initialCount, setInitialCount] = useState(5)

  useEffect(() => {
    const updateInitialCount = () => {
      if (window.innerWidth < 769) {
        setInitialCount(3)
      } else if (window.innerWidth < 1025) {
        setInitialCount(4)
      } else {
        setInitialCount(5)
      }
    }

    updateInitialCount() // Definir o valor inicial correto
    window.addEventListener("resize", updateInitialCount)

    return () => window.removeEventListener("resize", updateInitialCount)
  }, [])

  const handleToggleShow = () => {
    setShowAll((prev) => !prev)
  }

  return (
    <NewsContainer>
      <h2>{t('last-news')}</h2>
      <NewsCards>
        {mockNewsPreview.map((news, index) => {
          const fetchedTitle = useFetchTitle(news.url)
          const title = fetchedTitle || ""

          return (
            <NewsCard key={index} className={showAll || index < initialCount ? "visible" : "hidden"}>
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
                  <NewsTitle>{title}</NewsTitle>
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
      <ShowMoreButton onClick={handleToggleShow} style={showAll ? { marginTop: '2em' } : {marginTop: '0'}}>
        {showAll ? t('see-less') : t('see-more')}
      </ShowMoreButton>
    </NewsContainer>
  )
}

export default NewsSection
