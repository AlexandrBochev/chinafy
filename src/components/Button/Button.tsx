import { ButtonProps } from "../../models/models"

const Button = ({ children, onClick, ball, square, color }: ButtonProps) => {
  return (
    <button
      className={`
        flex items-center justify-center h-[2.1875rem] whitespace-nowrap transition-all
        hover:bg-black hover:text-white
        ${ color ? color : 'border'}
        ${ square ? 'rounded-[0.625rem] h-[2.625rem]' : 'rounded-full' }
        ${ ball ? 'w-[2.1875rem]' : 'px-[1.125rem]' }
      `}
      onClick={ onClick }
    >
      { children }
    </button>
  )
}

export { Button }