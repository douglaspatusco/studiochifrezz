import React, { useState } from "react"
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

const INITIAL_COUNT = 5

const NewsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false)
  const { t } = useTranslation('common')

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
            <NewsCard key={index} className={showAll || index < INITIAL_COUNT ? "visible" : "hidden"}>
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
      <ShowMoreButton onClick={handleToggleShow}>
        {showAll ? t('see-less') : t('see-more')}
      </ShowMoreButton>
    </NewsContainer>
  )
}

export default NewsSection
