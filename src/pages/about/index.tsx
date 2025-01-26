import Head from "next/head"

import { AboutContainer, Member, MemberReverse, StudioDescription, Us } from "./styles"

interface StaffMember {
  name: string;
  avatar: string;
  description: string;
}

const staff: StaffMember[] = [
  {
    name: "Lena Franzz",
    avatar: "/images/avatar-lena.webp",
    description: "Fundadora do Studio Chifrezz. É animadora e diretora de animação com 10 anos de experiência no mercado de animação de séries e filmes. Lena mora no Rio de Janeiro, e atualmente trabalha como supervisora de animação para a WildBrain Studios. Trabalhos anteriores: The Snoopy Show, BirdGirl, Irmão do Jorel, Archibald's Next Big Thing, My big big friend. Em 2019 estreiou seu primeiro curta de animação Hornzz, o filme recebeu mais de 20 prêmios desde então. Também é a criadora e diretora do Museu Assustador do Kale e Quartzzo. Lena também é professora de animação e deu aula durante 4 anos no Estudio Escola de Animação, um curso gratuito para jovens.",
  },
  {
    name: "Luiza Ferraz",
    avatar: "/images/avatar-luiza.webp",
    description: "É Produtora e tem um diploma de bacharelado em Produção Cultural da Universidade Federal Fluminense do Rio de Janeiro - e técnico em gerenciamento cultural da Universidade Federal Sul-Rio-Grandense / Rio Grande do Sul. Luiza trabalha na Baluarte Cultura desde 2017 como produtora executiva do Estúdio Escola de Animação. Também assina a produção de linha em três episódios animados da série infantil 'O Brasil de Tuhu' também produzida pela Baluarte Cultura.",
  },
  {
    name: "Priscila Vilas Boas",
    avatar: "/images/avatar-priscila.webp",
    description: "Nossa Gerente de projeto de animação, atualmente baseada na França. Com experiência de mais de 6 anos na área, tendo supervisionado uma variedade de produções de diferentes países. Ao longo de sua carreira, ela coordenou mais de 20 projetos, com destaques para: Patrulha Canina: Um Filme Superpoderoso (2023), Irmão do Jorel (4a temporada - INTERNATIONAL EMMY AWARD NOMINEE), Johnny Test New Series (1a e 2a temporada) e o Diário de Mika (3a temporada - INTERNATIONAL EMMY AWARD NOMINEE).",
  },

]

const About = () => {
  return (
    <>
      <Head>
        <title>Sobre Nós | Studio Chifrezz</title>
      </Head>
      <AboutContainer>
        <StudioDescription>
          O Studio Chifrezz é um estúdio de animação brasileiro liderado por mulheres. Fundado em 2021 no Rio de Janeiro, nossa missão é dar vida a histórias autorais que inspirem o público através de suas animações em diversos formatos, como Séries de TV e Curtas Metragens.
        </StudioDescription>
        <Us>
          {staff.map((member, index) =>
            index % 2 === 0 ? (
              <Member key={member.name}>
                <img src={member.avatar} alt={member.name} />
                <div>
                  <h2>{member.name}</h2>
                  <p>{member.description}</p>
                </div>
              </Member>
            ) : (
              <MemberReverse key={member.name}>
                <img src={member.avatar} alt={member.name} />
                <div>
                  <h2>{member.name}</h2>
                  <p>{member.description}</p>
                </div>
              </MemberReverse>
            )
          )}
        </Us>
      </AboutContainer>
    </>
  )
}

export default About
