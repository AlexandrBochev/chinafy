import { useState } from "react"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import { Button } from "../Button/Button"
import { BurgerIcon } from "../icons/BurgerIcon"
import { Logo } from "../icons/Logo"
import { smoothScroll } from "../../models/models"
import { motion as m } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <m.header
      initial={{ color: 'white' }}
      animate={{ color: 'black' }}
      transition={{ delay: 3 }}
      className="w-full absolute top-0 left-0 pt-6 md:pt-10 text-white z-40" id="Home"
    >
      <div className="container flex items-center justify-between mx-auto">
        <a href="/" className="md:order-2 md:absolute md:right-[51.74%]"><Logo /></a>
        <div className="flex">
          <div className="hidden md:block"><Button onClick={ handleClick }>Menu</Button></div>
          <div className="md:hidden"><Button onClick={ handleClick } ball><BurgerIcon /></Button></div>
          <span className="w-[0.625rem]" />
          <a href="#Contact" className="hidden md:block" onClick={ (e) => smoothScroll(e, "Contact") }><Button>Contact</Button></a>
        </div>
      </div>
      <BurgerMenu isMenuOpen={ isMenuOpen } onClick={ handleClick } />
    </m.header>
  )
}

export { Header }