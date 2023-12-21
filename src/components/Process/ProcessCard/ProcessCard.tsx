interface ProcessCardProps {
  id: number
  description: string
  icon: string
}

const ProcessCard = (props: ProcessCardProps) => {
  const { id, description, icon } = props

  return (
    <div className="flex flex-col items-center justify-between min-w-[18rem] h-[22.9375rem] rounded-[1.875rem] bg-[#F1F1F1] p-10">
      <div className="w-full">
        <div className="flex items-center justify-center bg-white h-[6.25rem] rounded-[1.25rem] mb-6">
          <img src={ icon } alt="Icon" />
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