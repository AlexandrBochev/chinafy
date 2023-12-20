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