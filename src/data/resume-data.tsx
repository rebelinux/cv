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
  name: "Jonathan Colón Feliciano",
  initials: "JCF",
  location: "Salinas, Puerto Rico",
  locationLink: "https://www.google.com/maps/place/Puerto+Rico",
  about:
    "IT Consultant focused on designing & implementing information systems with extra attention to detail",
  summary:
    "IT consultant who works for Zen PR Solutions. My primary interest is in infrastructure implementation and management, software development with focus on automation, devops and networking. I am also involved in security and open source contribution aspects of the projects and products I co-maintain.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1002783?v=4",
  personalWebsiteUrl: "https://techmyth.info/",
  contact: {
    email: "jcolonf@zenprsolutions.com",
    tel: "1787-203-2790",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rebelinux",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jcolonfzenpr/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/jcolonfzenpr",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Inter American University of Puerto Rico",
      degree: "Master's Degree Computer science with Specialization in Network and Security Systems",
      start: "2012",
      end: "2020",
    },    
    {
    school: "Inter American University of Puerto Rico",
    degree: "Bachelor’s Degree Computer system Installation and Repair",
    start: "2000",
    end: "2004",
    },
  ],
  work: [
    {
      company: "Zen PR Solutions",
      link: "https://techmyth.info/",
      badges: ["Integration","Storage","Server","Networking"],
      title: "Information Technology Consultant",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Develop IT infrastructure design and provide technical solutions option analysis and high-level cost estimate for customer projects.",
    },
    {
      company: "Ana G. Mendez University",
      link: "https://uagm.edu",
      badges: ["Server Administration", "VMware", "SAN", "NAS",],
      title: "Server/Systems Administrator",
      logo: ClevertechLogo,
      start: "2012",
      end: "2019",
      description:
        "Hire as a systems administrator following initial consulting role. Provide Windows/Linux administration, network operating center (NOC) administration, LAN administration, and VMware VSI/VDI administration. Also manage Web servers, AD/DNS/DHCP servers, SQL Server and SAN Storage administrations. Design and implement highly available (HA) and disaster recovery (DR) solutions for the organization.",
    },
    {
        company: "Ana G. Mendez University",
        link: "https://uagm.edu",
        badges: ["Computer Repair", "SCCM", "ServiceDesk", "MDT"],
        title: "Information Technology Support Specialist",
        logo: ClevertechLogo,
        start: "2008",
        end: "2011",
        description:
            "Hired as an infrastructure technology support specialist following initial server administrator role. Performed maintenance and support of personal computers, software, and peripheral equipment, identifying problems, and providing appropriate solutions.",
    },
  ],
  skills: [
    "Powersell",
    "Python",
    "Golang",
    "VMware",
    "Windows Server",
    "Linux/Unix",
    "NetApp",
    "Dell/EMC",
    "Cisco Networking",
    "Fortinet",
    "Server Administration",
    "Network Administration",
    "Scripting",
  ],
  projects: [
    {
      title: "VEEAM Documentation Script",
      techStack: [
        "Side Project",
        "Powershell",
      ],
      description: "A PowerShell module to generate an as built report on the configuration of VEEAM Backup & Replication Infrastructure.",
      logo: ConsultlyLogo,
      link: {
        label: "AsBuiltReport.Veeam.VBR",
        href: "https://github.com/AsBuiltReport/AsBuiltReport.Veeam.VBR",
      },
    },
    {
        title: "Active Directory Documentation Script",
        techStack: [
          "Side Project",
          "Powershell",
        ],
        description: "A PowerShell module to generate an as built report on the configuration of Microsoft Active Directory Infrastructure.",
        logo: ConsultlyLogo,
        link: {
          label: "AsBuiltReport.Microsoft.AD",
          href: "https://github.com/AsBuiltReport/AsBuiltReport.Microsoft.AD",
        },
      },
  ],
} as const;
