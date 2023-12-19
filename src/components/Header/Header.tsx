import { Button } from "../Button/Button"
import { BurgerIcon } from "../icons/BurgerIcon"
import { Logo } from "../icons/Logo"

const Header = () => {
  return (
    <header className="w-full absolute top-0 left-0 pt-10">
      <div className="container w-full flex items-center mx-auto">
        <div className="flex">
          <Button>Menu</Button>
          <Button ball><BurgerIcon /></Button>
          <span className="w-[0.625rem]" />
          <Button>Contact</Button>
        </div>
        <a href="/" className="absolute right-[51.74%]"><Logo /></a>
      </div>
    </header>
  )
}

export { Header }