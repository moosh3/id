import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Alec Cunningham",
  initials: "AC",
  location: "Chicago, Illinois, USA",
  locationLink: "https://www.google.com/maps/place/Chicago",
  about:
    "Site Reliability Engineer x x x x x",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/512428?v=4",
  personalWebsiteUrl: "https://alecc.dev",
  contact: {
    email: "aleccunningham96@gmail.com",
    tel: "+3315758050",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/moosh3",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aleccunningham/",
        icon: LinkedInIcon,
      },
      //{
      //  name: "X",
      //  url: "https://x.com/BartoszJarocki",
      //  icon: XIcon,
      //},
    ],
  },
  education: [
    {
      school: "DePaul University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "DRW",
      link: "https://drw.com/",
      badges: ["Remote"],
      title: "Senior Developer Experience Engineer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "EarnUp",
      link: "https://earnup.com/",
      badges: ["Remote"],
      title: "Infrastructure Lead",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Amwell",
      link: "https://business.amwell.com/",
      badges: [],
      title: "Team Lead - Site Reliability",
      logo: JojoMobileLogo,
      start: "2019",
      end: "2022",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Diende Financial",
      link: "https://www.deindefinancial.com/",
      badges: [],
      title: "DevOps Engineer",
      logo: NSNLogo,
      start: "2018",
      end: "2019",
      description: "Creating and testing software for LTE base stations",
    },
    {
      company: "Analyte Health",
      link: "https://www.analytehealth.com/",
      badges: [],
      title: "Software Engineer",
      logo: NSNLogo,
      start: "2016",
      end: "2018",
      description: "Creating and testing software for LTE base stations",
    },
  ],
  skills: [
    "Kubernetes",
    "Python",
    "Golang",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const;
