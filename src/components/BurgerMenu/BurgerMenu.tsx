import { Logo } from "../icons/Logo"
import { Button } from "../Button/Button"
import { BurgerMenuProps, menu, smoothScroll } from "../../models/models"
import { Cross } from "../icons/Cross"
import arrowBig from "../../assets/arrow-big.svg"

const BurgerMenu = ({ isMenuOpen, onClick }: BurgerMenuProps) => {
  return (
    <>
      <div 
        className={`
          fixed top-0 left-0 w-full h-screen bg-black/50 z-40 transition-all duration-700
          ${ isMenuOpen ? 'opacity-1' : 'opacity-0 pointer-events-none'}
        `}
        onClick={ onClick }
      />
      <div
        className={`
        fixed top-0 left-0 w-full h-screen md:w-[39rem] bg-white py-[1.875rem] md:py-[2.5rem] px-[1.25rem] md:px-[3.125rem] z-40 transition-all duration-700
          ${ isMenuOpen ? "translate-x-0 md:rounded-r-[3.75rem]" : "translate-x-[-110%] rounded-r-[3.75rem]" }
        `}
      >
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <a href="/" className="md:hidden"><Logo /></a>
            <Button ball onClick={ onClick }><Cross /></Button>
          </div>
          <ul>
            { menu.map((item) => 
              <a href={ item.name } key={ item.id } onClick={ (e) => smoothScroll(e, item.name) } className="flex mb-6 group">
                <div className="flex items-center justify-center w-0 md:group-hover:w-[3.4375rem] md:h-[3.4375rem] bg-lilac rounded-lg mr-2 transition-all" onClick={ onClick }>
                  <img src={ arrowBig } alt="Arrow" />
                </div>
                <li
                  onClick={ onClick }
                  className="relative max-w-fit mx-auto md:mx-0 text-black/70 text-[2.25rem] leading-none md:text-[3.5rem] hover:text-black"
                >
                  <span className="absolute top-0 left-0 rounded-xl bg-lilac h-full w-0 group-hover:w-full transition-all -z-10"  />
                  <span className="absolute top-0 left-2 md:left-3 rounded-xl bg-yellow h-full w-0 group-hover:w-full transition-all -z-20"  />
                  <p className="px-2 py-[0.125rem] md:py-0">{ item.name }</p>
                </li>
              </a>
            )}
          </ul>
          <a href="#Contact" className="mx-auto md:mx-0"><Button onClick={ onClick }>Contact</Button></a>
        </div>
      </div>
    </>
  )
}

export { BurgerMenu }