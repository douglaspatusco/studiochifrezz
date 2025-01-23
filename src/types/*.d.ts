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
    creators: string
    directors: string
    production: string
    artDirection: string
    soundtrack: string
    characterConcept: string
    storyboard: string
    consulting?: string
    propsArtist?: string
    animatic?: string
  }
}
