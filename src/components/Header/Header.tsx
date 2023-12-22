import { useState } from "react"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import { Button } from "../Button/Button"
import { BurgerIcon } from "../icons/BurgerIcon"
import { Logo } from "../icons/Logo"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full absolute top-0 left-0 pt-10" id="Home">
      <div className="container w-full flex items-center mx-auto">
        <div className="flex">
          <Button onClick={ handleClick }>Menu</Button>
          <Button onClick={ handleClick } ball><BurgerIcon /></Button>
          <span className="w-[0.625rem]" />
          <Button>Contact</Button>
        </div>
        <a href="/" className="absolute right-[51.74%]"><Logo /></a>
      </div>
      <BurgerMenu isMenuOpen={ isMenuOpen } onClick={ handleClick } />
    </header>
  )
}

export { Header }