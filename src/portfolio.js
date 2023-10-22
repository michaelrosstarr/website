const header = {
  homepage: 'https://michaelrosstarr.com',
  title: 'MRT',
}

const about = {
  name: 'Michael Ross Tarr',
  role: 'South African, Gamer and <Programmer/>',
  description: "Hey 👋, I'm Michael, but I am also known as Sloth in some places. I am currently in my final year of BIS Multimedia at the University of Pretoria. If you don't see me programming or studying, you can most likely find me on the hockey field, listening to music or playing video games.",
  social: {
    linkedin: 'https://www.linkedin.com/in/michaelrosstarr/',
    github: 'https://github.com/michaelrosstarr',
    spotify: 'https://stats.fm/michaelrosstarr',
    twitter: 'https://twitter.com/michaelrosstarr',
  },
}

const projects = [
  {
    name: 'BotGhost',
    description: 'I am a freelance web developer at BotGhost, a no-code Discord bot builder currently serving over 200 000 users monthly. I develop frontend and backend additions for the platform.',
    stack: ['React.JS', 'CSS', 'Node.JS', 'Discord.JS', 'MongoDB', 'TailwindCSS'],
    livePreview: 'https://botghost.com/',
  },
  {
    name: 'Hyper Layer',
    description: 'I am a freelance developer at Hyper Layer, a leading South African hosting provider. Offering game servers, web hosting and dedicated servers.',
    stack: ['CSS', 'Javascript', 'jQuery', 'NextJS', 'Redux'],
    livePreview: 'https://hyperlayer.net/',
  },
  {
    name: 'Beaches South Africa',
    description:
      'A project that is still work in progress, it is a mobile app and web portal to list all Beaches in South Africa, providing information about the beach.',
    stack: ['React', 'React Native', 'MongoDB', 'Firebase', 'Node.JS'],
    livePreview: 'https://beachsmart.org.za/',
  },
  {
    name: 'Nerd Network Digital',
    description: 'My freelance web development company, doing odd jobs for client across a wide variety of stacks. From Wordpress eCommerce stores, to fully fledged RCM (Recruitment Content Manager) systems.',
    stack: ['React', 'React Native', 'MongoDB', 'Node.JS', 'Wordpress', 'WooCommerce'],
    livePreview: 'https://nerdnetwork.digital/',
  },
  {
    name: "University Notion",
    description: "A Notion page containing all of my university notes, available to the public.",
    stack: ["Notion"],
    livePreview: "https://uni.sloththe.dev",
  },
  {
    name: "Status",
    description: "A Discord server that gets status and alert messages from the major providers.",
    stack: ["Discord", "ntfy", "n8n"],
    livePreview: "https://discord.gg/pVH3tnUbDx",
  },
  {
    name: "Avalanche Analytics",
    description: "One of my final year modules required me to work in a team to produce a product for an industry company. We got DNS.Business and were tasked with creating a playform to dispaly analytics and data from all of their domain namespaces under their control. I was tasked with creating the frontend application, as well as the DevOps of the project.",
    stack: ["NextJS", "TailwindCSS", "Docker", "React Redux", "React Flow"],
    livePreview: "https://avalanche.sloththe.dev",
  }
]

const skills = [
  'HTML',
  'CSS',
  'TailwindsCSS',
  'JavaScript',
  'TypeScript',
  'ReactJS',
  'Node.JS',
  'Express.JS',
  'React Native',
  'MongoDB',
  'Firebase',
  'NestJS',
  'NextJS',
  'Deno',
  'Docker',
  'Oracle Cloud',
  'Microsoft Azure',
  'Vercel'
]

const contact = {
  email: 'hello@michaelrosstarr.com',
}

export { header, about, projects, skills, contact }
