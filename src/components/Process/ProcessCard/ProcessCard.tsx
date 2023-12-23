interface ProcessCardProps {
  id: number
  description: string
  icon: string
}

const ProcessCard = (props: ProcessCardProps) => {
  const { id, description, icon } = props

  return (
    <div className="flex flex-col items-center justify-between w-[16.875rem] md:w-[19.7rem] h-[19.7rem] md:h-[22.875rem] mx-3 rounded-[1.875rem] bg-[#F1F1F1] p-[1.875rem] md:p-10">
      <div className="w-full">
        <div className="flex items-center justify-center bg-white h-[4.75rem] md:h-[6.25rem] rounded-[1.25rem] mb-6">
          <img src={ icon } alt="Icon" className="h-[3.875rem] md:h-auto" />
        </div>
        <p>{ description }</p>
      </div>
      <div className="relative rounded-full w-[6.625rem] h-[2.875rem] bg-yellow -z-0">
        <div className="absolute top-0 left-0 flex items-center justify-center rounded-full w-[6rem] h-[2.875rem] bg-lilac">
          Step { id }
        </div>
      </div>
    </div>
  )
}

export { ProcessCard }