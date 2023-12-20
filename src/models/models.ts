import laptopBox from '../assets/laptop-box.jpg'
import phone from '../assets/phone.webp'
import laptop from '../assets/laptop.webp'
import { ReactElement } from 'react'

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