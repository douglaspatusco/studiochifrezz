import { useTranslation } from "next-i18next"

import { List, Icon, WWDContainer, ListItem } from "./styles"

const WhatWeDo = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <WWDContainer>
        <h1>{t('what-we-do')}</h1>
        <List>
          <ListItem>
            <div>
              <Icon src="/images/icons/animacao.png" alt="Animação" />
            </div>
            <p>
              {t('wwd-animation')}
            </p>
          </ListItem>
          <ListItem>
            <div>
              <Icon src="/images/icons/filmes-e-series.png" alt="Filmes e Séries" />
            </div>
            <p>
              {t('wwd-production')}
            </p>
          </ListItem>
          <ListItem>
            <div>
              <Icon src="/images/icons/consultoria.png" alt="Consultoria" />
            </div>
            <p>
              {t('wwd-consulting')}
            </p>
          </ListItem>
        </List>
      </WWDContainer>
    </>
  )
}

export default WhatWeDo
