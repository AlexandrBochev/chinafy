import { CustomerCardProps } from "../../../models/models"

const CustomerCard = (props: CustomerCardProps) => {
  const { name, position, comment, photo } = props

  return (
    <div className="relative w-[16.875rem] md:w-[19.7rem] h-[35rem] md:h-[39rem] mx-3 group">
      <div
        className="
          absolute top-12 md:top-14 left-0 flex justify-center w-full h-[19.7rem] md:h-[22.875rem] rounded-[1.875rem] bg-[#F1F1F1] overflow-hidden
          group-hover:rotate-[-5deg] group-hover:-translate-y-3 transition-all
        "
      >
        <img src={ photo } alt={ name } className="object-cover -mt-2" />
      </div>

      <div
        className="
          absolute top-12 md:top-14 left-0 flex flex-col items-start justify-between w-full h-[19.7rem] md:h-[22.875rem] 
          rounded-[1.875rem] bg-gray text-left p-[1.875rem]
          group-hover:bg-lilac group-hover:rotate-[5deg] group-hover:translate-y-[7.3rem] md:group-hover:translate-y-[8.6rem] group-hover:z-50 group-hover:shadow-md transition-all
        "
      >
        <div>
          <p className="font-medium text-2xl">{ name }</p>
          <p className="text-black/30 text-sm">{ position }</p>
        </div>
        <div> <p>{ comment }</p></div>
      </div>
    </div>
  )
}

export { CustomerCard }