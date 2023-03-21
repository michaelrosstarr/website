const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://michaelrosstarr.com',
  title: 'MRT',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Michael Ross Tarr',
  role: 'South African, Gamer and <Programmer/>',
  description:
    'Currently studying BIS Multimedia at the University of Pretoria. Aiming to be a Fullstack Developer, but enjoy anything and everything tech related.',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/michaelrosstarr/',
    github: 'https://github.com/michaelrosstarr',
    discord: 'https://discord.gg/wsTABaD47e',
    spotify: 'https://open.spotify.com/user/lbbhzepy2as86h1q6xs2bedms',
    twitter: 'https://twitter.com/michaelrosstarr',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'BotGhost',
    description:
      'Freelance Developer at BotGhost. Developing frontend and backend applications.',
    stack: ['React', 'CSS', 'Node.JS', 'Discord.JS', 'MongoDB'],
    livePreview: 'https://botghost.com/',
  },
  {
    name: 'Hyper Layer',
    description:
      'Freelance Developer for Hyper Layer. Developing frontend applications.',
    stack: ['CSS', 'Javascript', 'jQuery'],
    livePreview: 'https://hyperlayer.net/',
  },
  {
    name: 'Beaches South Africa',
    description:
      'Website, Mobile App and Admin Portal for listing all beaches in South Africa.',
    stack: ['React', 'React Native', 'MongoDB', 'Firebase', 'Node.JS'],
    livePreview: 'https://beachsmart.org.za/',
  },
  {
    name: 'Nerd Network Digital',
    description:
      'Digital Development Agency',
    stack: ['React', 'React Native', 'MongoDB', 'Node.JS', 'Wordpress'],
    livePreview: 'https://nerdnetwork.digital/',
  },
  {
    name: 'Nerd_Bots',
    description:
      'Creation of Discord bots and Dashboards',
    stack: ['React', 'React Native', 'MongoDB', 'Node.JS'],
    livePreview: 'https://nerdbots.xyz/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Bootstrap',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.JS',
  'Express',
  'Discord.JS',
  'Git',
  'React Native',
  'Wordpress',
  'PHP',
  'MongoDB'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'forward@sloththe.dev',
}

export { header, about, projects, skills, contact }
