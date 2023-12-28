import { PlansCardProps } from "../../../models/models"
import { PlansArrow } from "../../icons/PlansArrow"

const PlansCard = (props: PlansCardProps) => {
  const { id, title, description, background, annual, monthly, isAnnual } = props

  return (
    <div
      className="
        relative flex flex-col items-center justify-between w-[21.875rem] md:w-[26.875rem] h-[26.875rem] rounded-[1.875rem] py-[1.875rem] px-[1rem] md:px-[1.875rem] group cursor-pointer overflow-hidden mx-3
      "
    >
      <img
        src={ background }
        alt="Background"
        className="absolute left-0 top-0 w-full h-full object-cover -z-10"
      />
      <div className="flex">
        { isAnnual && id === 2 && <div className="flex items-center h-12 rounded-full text-base px-6 mr-2 bg-yellow">Bestseller</div> }
        <div className="flex items-center h-12 rounded-full text-base px-6 border">{ isAnnual ? 'Annual' : 'Monthly' }</div>
      </div>
      <h4 className="text-[2.625rem] font-medium">{ title }</h4>
      <p className="text-[1.125rem]">{ description }</p>
      <div className="flex w-full items-center justify-between group">
        <div className="flex items-center justify-between h-16 rounded-full text-[1.875rem] md:text-[2rem] font-medium px-6 bg-white group-hover:bg-black group-hover:text-white transition-all duration-300">
          { isAnnual ? annual : monthly }
          <span className="text-sm font-normal whitespace-nowrap ml-3">/ Initial Set-Up</span>
        </div>
        <div className="flex items-center h-16 w-16 rounded-full text-[2rem] font-medium px-6 bg-white group-hover:bg-black group-hover:text-white transition-all duration-300">
          <PlansArrow />
        </div>
      </div>
    </div>
  )
}

export { PlansCard }