import { Skill, Project, Experience, Education, Certificate, ContactInfo } from '@/types'

export const contactInfo: ContactInfo = {
  email: 'arbashhumayun0@gmail.com',
  phone: '+49176 37102424',
  location: 'Berlin, Germany',
  linkedin: 'linkedin.com/in/arbashse',
  github: 'github.com/Arbash173',
  portfolio: 'arbashhumayun.netlify.app/'
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', category: 'frontend', level: 90 },
  { name: 'Next.js', category: 'frontend', level: 85 },
  { name: 'Angular', category: 'frontend', level: 80 },
  { name: 'TypeScript', category: 'frontend', level: 85 },
  { name: 'HTML & CSS', category: 'frontend', level: 90 },
  { name: 'Redux Toolkit', category: 'frontend', level: 80 },
  { name: 'RxJS', category: 'frontend', level: 75 },
  
  // Backend
  { name: 'Python', category: 'backend', level: 70 },
  { name: 'Node.js', category: 'backend', level: 80 },
  { name: 'REST APIs', category: 'backend', level: 85 },
  { name: 'GraphQL', category: 'backend', level: 75 },
  
  // Tools & DevOps
  { name: 'Postman', category: 'tools', level: 85 },
  { name: 'Git', category: 'tools', level: 90 },
  { name: 'AWS', category: 'tools', level: 75 },
  { name: 'Docker', category: 'tools', level: 80 },
  { name: 'CI/CD', category: 'tools', level: 75 },
  { name: 'Unit Testing', category: 'tools', level: 80 },
  { name: 'Jest', category: 'tools', level: 80 },
  { name: 'E2E Testing', category: 'tools', level: 75 },
  
  // AI Tools
  { name: 'Co-pilot', category: 'ai', level: 85 },
  { name: 'Cursor.io', category: 'ai', level: 90 }
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Realtime Chat App',
    description: 'A real-time messaging application with instant communication features and secure authentication.',
    technologies: ['MERN Stack', 'Socket.io', 'JWT auth', 'TailwindCSS'],
    image: '/projects/chat-app.jpg',
    githubUrl: 'https://github.com/Arbash173/fullstack-chat-app',
    liveUrl: 'https://fullstack-chat-app-3-t72i.onrender.com',
    features: [
      'Real-time messaging with Socket.io',
      'JWT authentication and authorization',
      'Responsive design with TailwindCSS',
      'Secure deployment on Render',
      'User presence indicators',
      'Message history and search'
    ]
  },
  {
    id: '2',
    title: 'GraphQL Expense Tracker',
    description: 'A comprehensive expense tracking application with GraphQL API and advanced financial management features.',
    technologies: ['Apollo GraphQL', 'MERN Stack', 'Passport.js', 'Apollo Client'],
    image: '/projects/expense-tracker.jpg',
    githubUrl: 'https://github.com/Arbash173/expense-tracker',
    liveUrl: 'https://expense-tracker-2fw4.onrender.com',
    features: [
      'Session-based authentication with Passport.js',
      'GraphQL API with Apollo Server',
      'Cron jobs for automated tasks',
      'Full-stack implementation',
      'Real-time data synchronization',
      'Advanced reporting and analytics'
    ]
  },
  {
    id: '3',
    title: 'Socially - Social Media App',
    description: 'A modern social media platform built with Next.js 14 and advanced features for content sharing and interaction.',
    technologies: ['Next.js App Router', 'TypeScript', 'PostgreSQL', 'Prisma', 'Clerk auth'],
    image: '/projects/socially.jpg',
    githubUrl: 'https://github.com/Arbash173/Social-Media-',
    liveUrl: 'https://social-media-nine-murex.vercel.app',
    features: [
      'File uploads with cloud storage',
      'Server and client components',
      'Optimistic updates for better UX',
      'Shadcn UI components',
      'Real-time notifications',
      'Advanced content moderation'
    ]
  }
]

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Enterprise64',
    position: 'Software Engineer',
    startDate: '2023-06',
    endDate: '2024-11',
    achievements: [
      'Reduced UI-related bugs by ~30% using React.js, Angular, Next.js with Redux Toolkit',
      'Improved data rendering speed by 25% through API optimization',
      'Reduced deployment time by 40% with Docker containerization',
      'Improved sprint consistency by 15% with Git/JIRA workflow',
      'Reduced code duplication by 35% with modular components',
      'Increased test coverage to 60+ % with Jest and Cypress',
      'Active in Agile ceremonies and code reviews'
    ],
    technologies: ['React.js', 'Angular', 'Next.js', 'Redux Toolkit', 'Docker', 'Jest', 'Cypress', 'Git', 'JIRA']
  },
  {
    id: '2',
    company: 'Mitsol',
    position: 'Front-end Developer',
    startDate: '2022-10',
    endDate: '2023-03',
    achievements: [
      'Increased user engagement by 30% with React.js improvements',
      'Reduced re-render cycles by 30% through UI optimization',
      'Improved data-fetching efficiency by 25% with REST API integration',
      'Utilized Redux for state management'
    ],
    technologies: ['React.js', 'Redux', 'REST APIs', 'JavaScript', 'HTML/CSS']
  }
]

export const education: Education = {
  degree: 'Bachelors in Computer Engineering',
  institution: 'Sir Syed University',
  startDate: '2019-02',
  endDate: '2023-02'
}

export const certificates: Certificate[] = [
  {
    name: 'AWS: Cloud Practitioner Essential',
    issuer: 'Amazon Web Services',
    date: '2023',
    url: 'https://aws.amazon.com/certification/'
  },
  {
    name: 'Introduction to Full Stack Web Development',
    issuer: 'Coursera',
    date: '2022',
    url: 'https://coursera.org/'
  }
]

export const languages = [
  { name: 'English', proficiency: 'Full Professional Proficiency' },
  { name: 'German', proficiency: 'Limited Working Proficiency' }
]
