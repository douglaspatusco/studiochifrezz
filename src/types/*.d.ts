declare interface Project {
  slug: string
  name: string
  sinopse: string
  status: string
  description: {
    productionType: string
    gender: string
    targetAudience: string
    duration: string
  }
  achievments?: string[]
  technicalSheet?: {
    creators: string | string[]
    directors: string | string[]
    production: string | string[]
    artDirection: string | string[]
    soundtrack: string | string[]
    characterConcept: string | string[]
    storyboard: string | string[]
    consulting?: string | string[]
    propsArtist?: string | string[]
    animatic?: string | string[]
  }
}
