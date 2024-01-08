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
import { StaticImageData } from "next/image";

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
  personalWebsiteUrl: "https://techmyth.blog/",
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
      grade: "4.0",
      start: "2012",
      end: "2020",
    },    
    {
    school: "Inter American University of Puerto Rico",
    degree: "Bachelor’s Degree Computer system Installation and Repair",
    grade: "4.0",
    start: "2000",
    end: "2004",
    },
  ],
  work: [
    {
      company: "Zen PR Solutions",
      link: "https://techmyth.blog/",
      badges: ["Integration","Storage","Server","Networking"],
      title: "Information Technology Consultant",
      logo: ParabolLogo,
      start: "2019",
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
        "Veeam",
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
          "Active Directory",
        ],
        description: "A PowerShell module to generate an as built report on the configuration of Microsoft Active Directory Infrastructure.",
        logo: ConsultlyLogo,
        link: {
          label: "AsBuiltReport.Microsoft.AD",
          href: "https://github.com/AsBuiltReport/AsBuiltReport.Microsoft.AD",
        },
    },
      {
        title: "Veeam Diagrammer",
        techStack: [
          "Side Project",
          "Powershell",
          "Veeam",
        ],
        description: "A powershell module to automatically generate Veeam Backup & Replication resource topology diagrams by just typing a PowerShell cmdlet and passing the name of the Veeam Backup Server",
        logo: ConsultlyLogo,
        link: {
          label: "Veeam.Diagrammer",
          href: "https://github.com/rebelinux/Veeam.Diagrammer",
        },
    },
  ],
  certification: [
    {
      name: "Microsoft Certified: Azure Administrator Associate",
      providerName: "Microsoft",
      link: "https://www.credly.com/badges/b7cbd4d7-e0e6-4b85-8a0a-c6e1a2eed764",
      issueDate: "2021",
      expirationDate: "2023",
      certificateId: "b7cbd4d7-e0e6-4b85-8a0a-c6e1a2eed764"
    },
    {
        name: "Microsoft MCSE: Core Infrastructure - Certified 2020",
        providerName: "Microsoft",
        link: "https://www.credly.com/badges/6ac0b159-1e7e-4656-acf2-b49b26571526",
        issueDate: "2020",
        expirationDate: "2026",
        certificateId: "6ac0b159-1e7e-4656-acf2-b49b26571526"
    },
    {
        name: "VMware Certified Advanced Professional - Data Center Virtualization Design 2020",
        providerName: "Microsoft",
        link: "https://www.credly.com/badges/1d4ce4ad-0db1-4168-9e2e-9e0640b4f1ad",
        issueDate: "2020",
        expirationDate: "N/A",
        certificateId: "1d4ce4ad-0db1-4168-9e2e-9e0640b4f1ad"
    },
    {
        name: "VMware Certified Professional - Desktop and Mobility 2020",
        providerName: "Microsoft",
        link: "https://www.credly.com/badges/364cfc52-657e-42cb-9b24-771155a92da8",
        issueDate: "2020",
        expirationDate: "N/A",
        certificateId: "364cfc52-657e-42cb-9b24-771155a92da8"
    },
    {
        name: "VMware Certified Professional - Network Virtualization 2020",
        providerName: "Microsoft",
        link: "https://www.credly.com/badges/cd6a2808-0a70-46ba-98a5-bd45b282ff18",
        issueDate: "2020",
        expirationDate: "N/A",
        certificateId: "cd6a2808-0a70-46ba-98a5-bd45b282ff18"
    },
    {
        name: "Veeam Certified Engineer v9 (VMCE)",
        providerName: "Microsoft",
        link: "https://www.credly.com/badges/c296cdc6-230a-4f17-ae8b-2278e0279906",
        issueDate: "2019",
        expirationDate: "N/A",
        certificateId: "c296cdc6-230a-4f17-ae8b-2278e0279906"
    },
  ],
  publication: [
    {
      name: "A Block-Chain Based Approach for Food Supply Chain Management",
      providerName: "IEEE",
      link: "https://ieeexplore.ieee.org/document/9984473",
      issueDate: "12/26/2022",
      description:"This review paper examines many elements of food supply chain management and  how blockchain may be used in supply chain management."
    },
  ],
  Awards: [
    {
      name: "vExpert",
      providerName: "VMware",
      link: "https://vexpert.vmware.com/directory/6271",
      issueDate: "2020-2023",
      description:"The annual VMware vExpert title is given to individuals who have significantly contributed to the community of VMware users over the past year. The title is awarded to individuals for their commitment to sharing their knowledge and passion for VMware technology above and beyond their job requirements."
    },
    {
        name: "Vanguard",
        providerName: "VEEAM",
        link: "https://www.veeam.com/vanguard.html",
        issueDate: "2020-2023",
        description:"Experts in the Vanguard program are a combination of many different disciplines, contribution types and advocacy mechanisms yet are each the best in space regarding technical thought leadership for the technical communities in which Veeam exist."
      },
  ]
} as const;
