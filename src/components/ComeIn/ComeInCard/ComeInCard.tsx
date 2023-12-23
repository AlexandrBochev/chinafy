import { ReactNode } from "react"

interface ComeInCardProps {
  background?: string
  children?: ReactNode
  onClick?: () => void
}

const ComeInCard = ({ background, children, onClick }: ComeInCardProps) => {
  return (
    <div
      className="relative w-full h-full p-10 rounded-[1.875rem] overflow-hidden"
      onClick={ onClick }
    >
      { children }
      <img src={ background } alt="Background" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
    </div>
  )
}

export { ComeInCard }