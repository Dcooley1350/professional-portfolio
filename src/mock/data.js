import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Devin Cooley', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Devin Cooley: Technical Leader and Software Engineer',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Devin Cooley',
  subtitle: 'Call me Devin-Ops, or Web-Devin',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I love to lead teams that build innovative and elegant software solutions.',
  paragraphTwo:
    "I'm a technology leader who combines deep technical expertise with business acumen to drive innovation and operational excellence. As a Site Reliability Engineer at O'Reilly Media with an MBA from the University of Oregon, I bring a unique perspective to cloud infrastructure and DevOps implementations. My expertise in Kubernetes orchestration, multi-cloud environments (AWS, Azure, GCP), and modern CI/CD pipelines has enabled me to successfully lead projects that optimize both system performance and business outcomes.",
  paragraphThree:
    "What sets me apart is my ability to bridge technical execution with strategic thinking. I thrive in environments where I can leverage my technical skills in containerization, infrastructure automation, and observability alongside my business knowledge to mentor teams, translate complex concepts to diverse stakeholders, and ensure technology initiatives deliver sustainable value. Based in Portland, Oregon, I'm passionate about creating resilient, scalable infrastructure solutions that empower organizations to achieve their most ambitious goals.",
  story: '', // if no story, the button will not show up
  qAndA: '', // if no qAndA, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'OReillyLearningPlatform.jpg',
    title: "The O'Reilly Learning Platform",
    info: "At O'Reilly Media, I've served as both a Cloud Software Engineer and Site Reliability Engineer for their widely-respected technical learning platform. I design and maintain Kubernetes-orchestrated cloud infrastructure that supports millions of users accessing educational content daily. By implementing customer-centric approaches and robust CI/CD pipelines, I've reduced deployment times while improving system reliability. My work has helped optimize both performance and cost-efficiency across our cloud environments, ensuring a seamless learning experience for our global user base.",
    info2: '',
    url: 'https://www.oreilly.com/',
    repo: '', // If no repo, no 'source code' button will show
    button: 'Learn More',
  },
  {
    id: nanoid(),
    img: 'LastMile.jpg',
    title: 'TWD: Last Mile',
    info: 'The Last Mile was my second project representing Pipeworks Studios as primary devOps engineer. During Last Mile development I got a chance to expand and improve the systems I designed and implemented during Rival Peak(see below). The game infrastructure consists of Unity clients running in AWS EKS clusters, backed by a Microsoft Azure serverless back-end. My responsibilities included designing, implementing, and administering the cloud infrastructure on which the game ran. I also wrote and maintained the build/deployment tools that the dev team used to build, package, and deliver game software.',
    info2: '',
    url: 'https://walkingdead.fandom.com/wiki/The_Walking_Dead:_Last_Mile',
    repo: '', // If no repo, no 'source code' button will show
    button: 'Learn More',
  },
  {
    id: nanoid(),
    img: 'RivalPeak.png',
    title: 'Rival Peak',
    info: 'As DevOps engineer for Pipeworks Studios on RP, the cloud infrastructure, deployment, and development environment were my responsibility. I wrote and managed the Infrastructure as Code for the AWS and Azure cloud infrastructure. I also designed and managed a Jenkins Continuous Integration/Deployment server that built the Unity game and deployed it to AWS, as well as building and deploying the backend serverless services to Azure.',
    info2: '',
    url: 'https://www.facebook.com/RivalPeak/',
    repo: '',
    button: 'Learn More',
  },
  {
    id: nanoid(),
    img: 'SpellSlingers.jpg',
    title: 'SpellSlingers',
    info: 'As part of the DevOps team for SpellSlingers(closed beta), I helped design, implement, and manage a microservice infrastrucure running in Kubernetes on AWS cloud infrastructure. I also assisted creating and managing the Jenkins server that built and deployed said microservices.',
    info2: '',
    url: 'https://mtg.fandom.com/wiki/Magic_SpellSlingers',
    repo: '',
    button: 'Learn More',
  },
  {
    id: nanoid(),
    img: 'NiaNow.png',
    title: 'Nia Now',
    info: "I began my software career as a full stack developer on the Nia-Now webapp. I am proud of the work I have done to help bring the Nia creative team's vision and message to fruition.",
    info2: 'Nia Now utilizes a React front-end and a Python Django backend.',
    url: 'https://nianow.com/',
    repo: '',
    button: 'See Live',
  },
  {
    id: nanoid(),
    img: 'HasBird.png',
    title: 'HasBird?',
    info: "HasBird? is of a genre I am calling 'semi-educational'. I just enjoy building goofy websites in my free time. It reminds me not to take myself too seriously. Hopefully it will make you laugh, and you just might learn something.",
    info2:
      'This static site was built using Gatsby JS and was styled using Styled-Components. It is hosted in an S3 bucket and delivered though a CloudFront Distribution.',
    url: 'https://hasbird.com/',
    repo: 'https://github.com/Dcooley1350/hasBirds',
    button: 'See live',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

export const contactFormData = {
  backendUrl: 'https://public.herotofu.com/v1/5c564b30-7d8e-11ec-93f9-6712a4805a99',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/IamDevin5',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/web-devin-cooley/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Dcooley1350',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
