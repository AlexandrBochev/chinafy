import { ButtonProps } from "../../models/models"
import { ArrowSm } from "../icons/ArrowSm"

const Button = ({ children, onClick, ball, black }: ButtonProps) => {
  return (
    <button
      className={`
        flex items-center justify-center h-[2.1875rem] whitespace-nowrap group transition-all
        ${ black ?
          'bg-black text-white hover:bg-lilac hover:text-black rounded-[0.625rem] h-[2.625rem]': 
          'border hover:bg-black hover:text-white rounded-full'
        }
        ${ ball ? 'w-[2.1875rem]' : 'px-[1.125rem]' }
      `}
      onClick={ onClick }
    >
      { children }
      {black && <div className="invisible w-0 rotate-[45deg] group-hover:visible group-hover:w-2 group-hover:ml-2 transition-all"><ArrowSm /></div>}
    </button>
  )
}

export { Button }