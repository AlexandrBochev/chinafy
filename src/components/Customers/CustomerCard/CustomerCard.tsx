import { CustomerCardProps } from "../../../models/models"

const CustomerCard = (props: CustomerCardProps) => {
  const { name, position, comment, photo } = props

  return (
    <div className="relative min-w-[18rem] h-[22.9375rem] group">
      <div
        className="
          absolute top-0 left-0 flex justify-center w-full h-full rounded-[1.875rem] bg-[#F1F1F1] overflow-hidden
          group-hover:rotate-[-5deg] group-hover:-translate-y-3 transition-all
        "
      >
        <img src={ photo } alt={ name } className="object-cover" />
      </div>

      <div
        className="
          absolute top-0 left-0 flex flex-col items-start justify-between w-full h-full
          rounded-[1.875rem] bg-gray text-left p-[1.875rem]
          group-hover:bg-lilac group-hover:rotate-[5deg] group-hover:translate-y-[7.625rem] group-hover:z-50 group-hover:shadow-md transition-all
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