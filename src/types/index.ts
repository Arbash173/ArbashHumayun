export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'ai'
  icon?: string
  level: number
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  features: string[]
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  achievements: string[]
  technologies: string[]
}

export interface Education {
  degree: string
  institution: string
  startDate: string
  endDate: string
}

export interface Certificate {
  name: string
  issuer: string
  date: string
  url?: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  portfolio: string
}
