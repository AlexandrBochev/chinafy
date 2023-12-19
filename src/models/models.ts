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