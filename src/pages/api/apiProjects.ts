import { NextApiRequest, NextApiResponse } from "next"

const projects: Project[] = [
  {
    slug: 'kale',
    name: 'Kale do Museu Assustador',
    sinopse: 'Kale assume a direção do museu assustador enquanto seus avós viajam, mas para provar que está à altura dessa missão ele precisa controlar o caos diário gerado por sua irmã mais nova e pelas assombrações que os dois precisam derrotar juntos, acompanhados por seu amigo Mano e ocasionalmente, o faxineiro Seu Neto.',
    status: 'Em produção',
    description: {
      productionType: 'Animação Seriada',
      gender: 'Comédia e sobrenatural',
      targetAudience: '6 a 12 anos',
      duration: '52 x 11"',
    },
    achievments: [
      'Vencedor da mentoria para mulheres diretoras do Animation” Ventana Sur 2023',
      'Pitch em La Liga de Animación Iberoamericana em MIFA Annecy 2023'
    ],
    technicalSheet: {
      creators: 'Lena Franzz',
      directors: ['Lena Franzz', 'Priscila Vilas Boas'],
      production: 'Priscila Vilas Boas e Luiza Ferraz',
      artDirection: 'Marina Vasconcelos',
      soundtrack: 'Felipe dos Santos',
      characterConcept: 'Juan Cunha e Lena Franzz',
      storyboard: 'Daniela Smith-Fisher',
      consulting: 'Débora Guimarães',
    }
  },
  {
    slug: 'hornzz',
    name: 'Hornzz',
    sinopse: 'Como cada escolha reflete em nossas vidas? Através da narrativa surrealista de Hornzz, acompanhamos as escolhas e desafios da menina Lu, viajando por experiências únicas em cenários lúdicos. ',
    status: 'Lançado em 2019',
    description: {
      productionType: 'Curta Metragem',
      gender: 'Fantasia',
      targetAudience: 'Livre',
      duration: '5 min',
    },
    achievments: [
      'Licenciado por 2 anos na MOSTRA SESC de 2019 a 2021',
      'Licenciado por Prime Box Brasil 2020',
      'Licenciado por Itau Cultural Streaming 2020',
      'South America Awards - Melhor diretora de filme experimental - Brasil 2022',
      'CANNES SHORTS - Melhor compositor - France 2022',
      'BIMIFF - Melhor Filmmaker - Brasil 2022',
      'Cinemaz - Melhor produção - Brasil 2021',
      'Cinemaz - Melhor filme de animação - Brasil 2021',
      'Offcine 2020 - Melhor filme de animação - Brasil 2021',
      'Offcine 2020 - Melhor diretora de animação - Brasil 2021',
      'Offcine 2020 - Melhor produção - Brasil 2021',
      'Offcine 2020 - Melhor roteiro - Brasil 2021',
      'Offcine 2020 - Melhor figurino em animação - Brasil 2021',
      'RIMA - RJ International Monthly Awards - Melhor animação - Brasil 2021',
      'RIMA - RJ International Monthly Awards - Melhor trilha sonora - Brasil 2021',
      'Mostra Mulher no cinema - Melhor curta metragem - Brasil 2021',
      'Inhapim Films Festival - Melhor produção - Brasil 2021',
      'Inhapim Films Festival - Melhor diretora - Brasil 2021',
      'Inhapim Films Festival - Melhor edição - Brasil 2021',
      'FestCineRO 2021 - Melhor trilha sonora - Brasil 2021',
      'Fest Cine Pedra Azul - Melhor animação - Brasil 2020',
      'Cine Jabó - Melhor animação - Brazil 2019',
      'Festival de Cinema de Santo Angelo - Melhor animação - Brasil 2019',
      'Cine Tamoio - Melhor animação - Brasil 2019',
      'Skiptown Playhouse - Melhor animação - Los Angeles EUA 2019',
      'Kalaburagi Film Festival - Melhor animação - India 2019'
    ]
  },
  {
    slug: 'roommate',
    name: 'Roommate',
    sinopse: 'Duas amigas perto dos trinta anos moram juntas em um apartamento pequeno no centro da cidade. Com dificuldades de entender se está na hora de  se acomodar ou de viver intensamente antes que seja tarde, as duas amigas de longa data enfrentam problemas no amor e no trabalho. Roommate é uma história de comédia para adultos, com pitadas de drama.',
    status: 'Em produção',
    description: {
      productionType: 'Animação Seriada',
      gender: 'Comédia e drama',
      targetAudience: '+18',
      duration: '13 x 11"',
    },
    technicalSheet : {
      creators: 'Lena Franzz',
      directors: 'Lena Franzz e Priscila Vilas Boas',
      production: 'Priscila Vilas Boas e Luiza Ferraz',
      artDirection: 'Marina Vasconcelos',
      soundtrack: 'Felipe dos Santos',
      characterConcept: 'João Neto',
      storyboard: 'Daniela Smith-Fisher',
    }
  },
  {
    slug: 'quartzzo',
    name: 'Quartzzo',
    sinopse: 'Depois da morte do seu amor em uma tragédia de chuvas, Amélia, uma mulher de 30 anos, visita novamente o Parque da Pedra do Amor, para ressignificar suas memórias e enfrentar seu trauma. No parque ela tem visões do seu falecido namorado que guia Amélia até o lugar onde a tragédia aconteceu.',
    status: 'Em produção',
    description: {
      productionType: 'Curta Metragem',
      gender: 'Drama e Fantasia',
      targetAudience: '+14',
      duration: '8 min',
    },
    technicalSheet : {
      creators: 'Lena Franzz',
      directors: 'Lena Franzz',
      production: 'Priscila Vilas Boas e Luiza Ferraz',
      artDirection: 'Marina Vasconcelos',
      soundtrack: 'Felipe dos Santos',
      characterConcept: 'Lena Franzz',
      storyboard: 'Felipe dos Santos',
    }
  },
  {
    slug: 'rebu',
    name: 'Rebu',
    sinopse: '?????????????',
    status: '?????????????',
    description: {
      productionType: 'Curta Metragem',
      gender: '?????????',
      targetAudience: '?????????',
      duration: '?????????',
    },
    technicalSheet : {
      creators: '?????????',
      directors: '?????????',
      production: '?????????',
      artDirection: '?????????',
      soundtrack: '?????????',
      characterConcept: '?????????',
      storyboard: '?????????',
    }
  }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projects) // Retorna a lista de projetos com status 200
}
