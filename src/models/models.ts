import laptopBox from '../assets/laptop-box.jpg'
import phone from '../assets/phone.webp'
import laptop from '../assets/laptop.webp'
import { ReactElement } from 'react'
import umbc from '../assets/umbc-logo.svg'
import akorn from '../assets/akorn-logo.svg'
import singer from '../assets/singer-logo.svg'
import bnl from '../assets/bnl-logo.svg'
import bershka from '../assets/bershka-logo.svg'

// Types
export interface ButtonProps {
  children: ReactElement | string
  onClick?: () => void
  ball?: boolean
  square?: boolean
  color?: 'bg-black text-white' | 'bg-yellow' | 'bg-lilac' | 'bg-green' | 'bg-white'
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
]