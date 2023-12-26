import laptopBox from '../assets/laptop-box.jpg'
import phone from '../assets/phone.webp'
import laptop from '../assets/laptop.webp'
import { MouseEvent, ReactElement } from 'react'
import umbc from '../assets/logos/umbc-logo.svg'
import akorn from '../assets/logos/akorn-logo.svg'
import singer from '../assets/logos/singer-logo.svg'
import bnl from '../assets/logos/bnl-logo.svg'
import bershka from '../assets/logos/bershka-logo.svg'
import alibaba from '../assets/logos/alibaba-logo.svg'
import aws from '../assets/logos/aws-logo.svg'
import microsoft from '../assets/logos/microsoft-logo.svg'
import cache from '../assets/logos/cache-logo.svg'
import cloud from '../assets/logos/cloud-logo.svg'
import process1 from '../assets/process-icons/process-1.svg'
import process2 from '../assets/process-icons/process-2.svg'
import process3 from '../assets/process-icons/process-3.svg'
import process4 from '../assets/process-icons/process-4.svg'
import customer1 from '../assets/customers/customer-1.jpg'
import customer2 from '../assets/customers/customer-2.jpg'
import customer3 from '../assets/customers/customer-3.jpg'
import customer4 from '../assets/customers/customer-4.jpg'
import solutions1 from '../assets/solutions/solutions-1.svg'
import solutions2 from '../assets/solutions/solutions-2.svg'
import solutions3 from '../assets/solutions/solutions-3.svg'
import solutions4 from '../assets/solutions/solutions-4.svg'
import plansBg1 from '../assets/plans/bg-1.jpg'
import plansBg2 from '../assets/plans/bg-2.jpg'
import plansBg3 from '../assets/plans/bg-3.jpg'
import { color } from 'framer-motion'

// Types
export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  ball?: boolean
  black?: boolean
}

export interface LoadingSpeedCardProps {
  title: string
  seconds: number
  color?: string
  left?: boolean
}

export interface TickerProps {
  children: React.ReactNode
}

export interface CustomerCardProps {
  name: string
  position: string
  comment: string
  photo: string
}

export interface TickerLogosProps {
  title?: string
  color?: 'bg-gray' | 'bg-yellow'
  logos: {
    id: number
    img: string
  }[]
}

export interface BurgerMenuProps {
  isMenuOpen: boolean
  onClick: () => void
}

export interface PlansCardProps {
  id: number
  title: string
  description: string
  background: string
  annual: string
  monthly: string
  isAnnual?: boolean
}

// Constants
export const slides = [
  {id: 1, img: laptopBox},
  {id: 2, img: phone},
  {id: 3, img: laptop}
]

export const performance = [
  {id: 1, title: 'securely', color: 'bg-lilac'},
  {id: 2, title: 'fast', color: 'bg-yellow'},
  {id: 3, title: 'fully', color: 'bg-gray'},
]

export const cardColors = [
  {id: 1, color: 'bg-lilac'},
  {id: 2, color: 'bg-yellow'},
  {id: 3, color: 'bg-black/10'},
  {id: 4, color: 'bg-lilac'},
  {id: 5, color: 'bg-yellow'},
]

export const motionSettings = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true }
}

export const sloganWords = [
  {id: 1, name: 'securely'},
  {id: 2, name: 'fast'},
  {id: 3, name: 'fully'},
  {id: 4, name: 'securely'},
  {id: 5, name: 'fast'},
  {id: 6, name: 'fully'},
  {id: 7, name: 'securely'},
  {id: 8, name: 'fast'},
  {id: 9, name: 'fully'},
  {id: 10, name: 'securely'},
  {id: 11, name: 'fast'},
  {id: 12, name: 'fully'},
  {id: 13, name: 'securely'},
  {id: 14, name: 'fast'},
  {id: 15, name: 'fully'},
]

export const logos = [
  {id: 1, img: umbc},
  {id: 2, img: akorn},
  {id: 3, img: singer},
  {id: 4, img: bnl},
  {id: 5, img: bershka},
  {id: 6, img: umbc},
  {id: 7, img: akorn},
  {id: 8, img: singer},
  {id: 9, img: bnl},
  {id: 10, img: bershka},
  {id: 11, img: umbc},
  {id: 12, img: akorn},
  {id: 13, img: singer},
  {id: 14, img: bnl},
  {id: 15, img: bershka},
]

export const logos2 = [
  {id: 1, img: alibaba},
  {id: 2, img: aws},
  {id: 3, img: microsoft},
  {id: 4, img: cache},
  {id: 5, img: cloud},
  {id: 6, img: alibaba},
  {id: 7, img: aws},
  {id: 8, img: microsoft},
  {id: 9, img: cache},
  {id: 10, img: cloud},
  {id: 11, img: alibaba},
  {id: 12, img: aws},
  {id: 13, img: microsoft},
  {id: 14, img: cache},
]

export const customers = [
  {
    id: 1,
    name: 'Michela Nalin',
    position: 'Marketing Manager for Nolato',
    comment: 'Chinafy has made it possible for us to be sure that our web visitors in China have the same good experience as all our other visitors in the rest of the world.',
    photo: customer1
  },
  {
    id: 2,
    name: 'Natasha Baker',
    position: 'CEO & Founder of SnapEDA',
    comment: "Over 1 million engineers use SnapEDA each year all over the world. We were attracted to Chinafy's service because of how easy they made it to support the Chinese market.",
    photo: customer2
  },
  {
    id: 3,
    name: 'Ignacio Cerro',
    position: 'CFO, Global Alumni for MIT Professional Education',
    comment: 'We are very happy with working with Chinafy. They went above and beyond to ensure we help MIT Professional Education deliver world-class online education in China.',
    photo: customer3
  },
  {
    id: 4,
    name: 'Nicolas Duchesne',
    position: 'Product Marketing Manager',
    comment: "The process was super easy and I'm really glad we selected your team. The experience has been beyond my expectations.",
    photo: customer4
  },
  {
    id: 5,
    name: 'Michela Nalin',
    position: 'Marketing Manager for Nolato',
    comment: 'Chinafy has made it possible for us to be sure that our web visitors in China have the same good experience as all our other visitors in the rest of the world.',
    photo: customer1
  },
  {
    id: 6,
    name: 'Natasha Baker',
    position: 'CEO & Founder of SnapEDA',
    comment: "Over 1 million engineers use SnapEDA each year all over the world. We were attracted to Chinafy's service because of how easy they made it to support the Chinese market.",
    photo: customer2
  },
  {
    id: 7,
    name: 'Ignacio Cerro',
    position: 'CFO, Global Alumni for MIT Professional Education',
    comment: 'We are very happy with working with Chinafy. They went above and beyond to ensure we help MIT Professional Education deliver world-class online education in China.',
    photo: customer3
  },
  {
    id: 8,
    name: 'Nicolas Duchesne',
    position: 'Product Marketing Manager',
    comment: "The process was super easy and I'm really glad we selected your team. The experience has been beyond my expectations.",
    photo: customer4
  },
]

export const process = [
  {
    id: 1,
    description: "Submit your site",
    icon: process1
  },
  {
    id: 2,
    description: "We'll scan your site to create a Chinafy version, and generate your plan.",
    icon: process2
  },
  {
    id: 3,
    description: "Once you subscribe, our engineers then set-up and test the Chinafy version of your website.",
    icon: process3
  },
  {
    id: 4,
    description: "Launch your Chinafy site with a quick 15 minute DNS update.",
    icon: process4
  },
  // {
  //   id: 1,
  //   description: "Submit your site",
  //   icon: process1
  // },
  // {
  //   id: 2,
  //   description: "We'll scan your site to create a Chinafy version, and generate your plan.",
  //   icon: process2
  // },
  // {
  //   id: 3,
  //   description: "Once you subscribe, our engineers then set-up and test the Chinafy version of your website.",
  //   icon: process3
  // },
  // {
  //   id: 4,
  //   description: "Launch your Chinafy site with a quick 15 minute DNS update.",
  //   icon: process4
  // },
]

export const menu = [
  { id:1, name: "Home" },
  { id:2, name: "About" },
  { id:3, name: "Service" },
  { id:4, name: "Customers" },
  { id:5, name: "Process" },
  { id:6, name: "Solutions" },
  { id:7, name: "Plans" },
]

export const solutions = [
  {
    id: 1,
    title: "Paid Advertising",
    description: "Strategise cross-channel, advertising campaigns for China with experts who’ve worked with Citibank, Huawei, and more.",
    icon: solutions4,
    rotate: "rotate-[-12.3deg]",
    translateY: "translate-y-[-15%]"
  },
  {
    id: 2,
    title: "WeChat Marketing",
    description: "Work with award-winning digital agencies to launch WeChat Mini-programs & manage your Social Media presence.",
    icon: solutions3,
    rotate: "rotate-[0deg]",
    translateY: "translate-y-[-15%]"
  },
  {
    id: 3,
    title: "Hosting in China",
    description: "Compliment your existing website stack with a hosted onshore equivalent.",
    icon: solutions2,
    rotate: "rotate-[7.75deg]",
    translateY: "translate-y-[-15%]"
  },
  {
    id: 4,
    title: "ICP Licence",
    description: "Navigate the complex ICP license process with Chinafy and Alibaba Cloud.",
    icon: solutions1,
    rotate: "rotate-[-6deg]",
    translateY: "translate-y-[-100%]"
  },
]

export const plansItems = [
  {
    id: 1,
    title: "Starter",
    description: "Best for Squarespace or Shopify template-based websites with 10 or fewer pages.",
    background: plansBg1,
    annual: "$3500",
    monthly: "$350",
  },
  {
    id: 2,
    title: "Pro+",
    description: "For more robust websites: custom sites, sites requiring login or live streaming, or Shopify Plus.",
    background: plansBg2,
    annual: "$5500",
    monthly: "$550",
  },
  {
    id: 3,
    title: "Enterprise",
    description: "For your brand or organization, with change management and 99.99% uptime.",
    background: plansBg3,
    annual: "Enquire",
    monthly: "Enquire",
  },
  {
    id: 4,
    title: "Starter",
    description: "Best for Squarespace or Shopify template-based websites with 10 or fewer pages.",
    background: plansBg1,
    annual: "$3500",
    monthly: "$350",
  },
  {
    id: 5,
    title: "Pro+",
    description: "For more robust websites: custom sites, sites requiring login or live streaming, or Shopify Plus.",
    background: plansBg2,
    annual: "$5500",
    monthly: "$550",
  },
  {
    id: 6,
    title: "Enterprise",
    description: "For your brand or organization, with change management and 99.99% uptime.",
    background: plansBg3,
    annual: "Enquire",
    monthly: "Enquire",
  },
]

export const footerButtons = [
  {id: 1, name: 'RESOURCES', color: 'bg-yellow'},
  {id: 2, name: 'PRICING', color: 'bg-white'},
  {id: 3, name: 'PARTNERS', color: 'bg-white'},
  {id: 4, name: 'SOLUTIONS', color: 'bg-yellow'},
  {id: 5, name: 'FEATURES', color: 'bg-white'},
  {id: 6, name: 'TRUST', color: 'bg-white'},
  {id: 7, name: 'SUPPORT', color: 'bg-yellow'},
  {id: 8, name: 'OTHER SERVICES', color: 'bg-yellow'},
  {id: 9, name: 'TECHNOLOGIES', color: 'bg-white'},
  {id: 10, name: 'LEGAL', color: 'bg-white'},
  {id: 11, name: 'TOOLS', color: 'bg-yellow'},
]

// Functions
export const smoothScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault()
  const target = document.getElementById(id)
  target?.scrollIntoView({ behavior: 'smooth' })
}