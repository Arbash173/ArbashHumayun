import { Skill, Project, Experience, Education, Certificate, ContactInfo } from '@/types'

export const contactInfo: ContactInfo = {
  email: 'arbashhumayun0@gmail.com',
  phone: '+49 176 3710 2424',
  location: 'Berlin, Germany',
  linkedin: 'linkedin.com/in/arbashse',
  github: 'github.com/Arbash173',
  portfolio: 'arbashhumayun.netlify.app/'
}

export const skills: Skill[] = [
  // Frontend Platform Engineering
  { name: 'TypeScript', category: 'frontend', level: 90 },
  { name: 'React', category: 'frontend', level: 90 },
  { name: 'Next.js', category: 'frontend', level: 85 },
  { name: 'Component-driven architecture', category: 'frontend', level: 85 },
  { name: 'Reusable UI & Design Systems', category: 'frontend', level: 80 },
  { name: 'Accessibility (WCAG, semantic HTML)', category: 'frontend', level: 80 },
  { name: 'Data-heavy UI', category: 'frontend', level: 85 },
  
  // State, Data & APIs
  { name: 'Redux Toolkit', category: 'frontend', level: 85 },
  { name: 'React Query', category: 'frontend', level: 80 },
  { name: 'REST APIs', category: 'backend', level: 85 },
  { name: 'GraphQL (Apollo Client)', category: 'backend', level: 80 },
  
  // Testing & Quality
  { name: 'Jest', category: 'tools', level: 80 },
  { name: 'Cypress', category: 'tools', level: 75 },
  
  // Engineering Practices
  { name: 'Ownership', category: 'tools', level: 90 },
  { name: 'Cross-functional collaboration', category: 'tools', level: 85 },
  { name: 'Performance optimization', category: 'tools', level: 85 },
  { name: 'Agile / Scrum', category: 'tools', level: 80 }
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Next.js Social Platform',
    description: 'Built a scalable social platform using Next.js, React, and TypeScript with authentication, form-heavy user flows, and reusable UI components. Focused on performance, accessibility, and maintainable frontend architecture.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Authentication', 'UI Components'],
    image: '/projects/social-platform.jpg',
    githubUrl: 'https://github.com/Arbash173/social-platform',
    liveUrl: 'https://social-platform-demo.vercel.app',
    features: [
      'Scalable Next.js architecture',
      'Authentication system',
      'Form-heavy user flows',
      'Reusable UI components',
      'Performance optimization',
      'Accessibility compliance'
    ]
  },
  {
    id: '2',
    title: 'Financial Dashboard Platform',
    description: 'Developed a data-intensive dashboard using React, TypeScript, Redux Toolkit, and Chart.js. Implemented reusable chart and table components and optimized rendering for analytics views.',
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Chart.js', 'Data Visualization'],
    image: '/projects/financial-dashboard.jpg',
    githubUrl: 'https://github.com/Arbash173/financial-dashboard',
    liveUrl: 'https://financial-dashboard-demo.vercel.app',
    features: [
      'Data-intensive dashboard',
      'Reusable chart components',
      'Redux Toolkit for state management',
      'Optimized rendering',
      'Analytics views',
      'Interactive data visualization'
    ]
  },
  {
    id: '3',
    title: 'GraphQL Expense Tracker',
    description: 'Built a React + TypeScript expense tracking application using Apollo GraphQL, focusing on predictable data flows, clean UI architecture, and reusable components.',
    technologies: ['React', 'TypeScript', 'Apollo GraphQL', 'Expense Tracking'],
    image: '/projects/expense-tracker.jpg',
    githubUrl: 'https://github.com/Arbash173/expense-tracker',
    liveUrl: 'https://expense-tracker-2fw4.onrender.com',
    features: [
      'Apollo GraphQL integration',
      'Predictable data flows',
      'Clean UI architecture',
      'Reusable components',
      'Expense tracking functionality',
      'TypeScript for type safety'
    ]
  }
]

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Enterprise64',
    position: 'Fullstack Engineer',
    startDate: '2023-02',
    endDate: '2025-04',
    achievements: [
      'Owned end-to-end development of frontend-heavy features using React, Next.js, and TypeScript across multiple production applications serving 5,000+ active users.',
      'Built and maintained scalable React and Next.js applications, reducing page load times by ~30% through component optimization and improved data-fetching strategies.',
      'Designed and implemented reusable UI components and shared patterns, reducing duplicated frontend code by ~35% across projects.',
      'Collaborated closely with designers and product managers to translate complex business workflows into intuitive user interfaces.',
      'Integrated data-heavy dashboards (tables, charts, analytics views) used daily by operations and management teams.',
      'Worked with type-safe API contracts and frontend validation, improving application stability and reducing runtime UI errors.',
      'Wrote unit and integration tests for critical user flows, reducing production UI bugs.',
      'Participated in code reviews and architectural discussions to maintain consistent frontend standards.'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'GraphQL', 'Jest', 'Cypress']
  },
  {
    id: '2',
    company: 'Mitsol',
    position: 'Frontend Engineer',
    startDate: '2021-02',
    endDate: '2023-01',
    achievements: [
      'Developed and shipped production React and Angular applications used by 1,000+ users across multiple client projects.',
      'Built reusable, component-driven UI modules aligned with UX designs, accelerating feature delivery by ~25%.',
      'Improved application performance and state management using Redux Toolkit, reducing unnecessary re-renders by ~30%.',
      'Implemented responsive and accessible UI components, improving usability across desktop and mobile devices.',
      'Worked closely with backend engineers to design and consume REST APIs.',
      'Collaborated in Agile teams, contributing to sprint planning, code reviews, and continuous improvement.'
    ],
    technologies: ['React', 'Angular', 'Redux Toolkit', 'REST APIs', 'JavaScript', 'HTML/CSS']
  }
]

export const education: Education[] = [
  {
    degree: 'Masters in Data Science',
    institution: 'Arden University Berlin',
    startDate: '2024-11',
    endDate: '2025-12'
  },
  {
    degree: 'Bachelor of Computer Engineering',
    institution: 'Sir Syed University of Engineering and Technology',
    startDate: '2017-02',
    endDate: '2020-02'
  }
]

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
