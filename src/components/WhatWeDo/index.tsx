import { List, Icon, WWDContainer, ListItem } from "./styles"

const WhatWeDo = () => {
  return (
    <>
      <WWDContainer>
        <h1>What We Do</h1>
        <List>
          <ListItem>
            <div>
              <Icon src="/images/icons/animacao.png" alt="Animação" />
            </div>
            <p>
              Animation<br />
              services
            </p>
          </ListItem>
          <ListItem>
            <div>
              <Icon src="/images/icons/filmes-e-series.png" alt="Filmes e Séries" />
            </div>
            <p>
              Production of original<br />
              films and series
            </p>
          </ListItem>
          <ListItem>
            <div>
              <Icon src="/images/icons/consultoria.png" alt="Consultoria" />
            </div>
            <p>
              Consulting for projects<br />
              and public notices
            </p>
          </ListItem>
        </List>
      </WWDContainer>
    </>
  )
}

export default WhatWeDo
