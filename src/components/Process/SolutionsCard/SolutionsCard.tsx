interface SolutionsCardProps {
  icon: string
  title: string
  description: string
  rotate: string
  translateY: string
}

const SolutionsCard = (props: SolutionsCardProps) => {
  const { icon, title, description, rotate, translateY } = props

  return (
    <div
      className={`
        absolute left-[50%] translate-x-[-50%] top-[50%] w-[17.5rem] h-[10rem] rounded-[1.25rem] p-5 bg-background shadow-lg
        ${ translateY }
        ${ rotate }
        md:w-[26.25rem] md:h-[15rem] md:rounded-[2.5rem] md:p-8
      `}
    >
      <div className="flex items-center mb-4 md:mb-5">
        <div
          className="
            flex items-center justify-center w-[3.125rem] h-[3.125rem] rounded-full bg-white mr-5
            md:w-[4.625rem] md:h-[4.625rem] md:mr-6
          "
        >
          <img src={ icon } alt="Icon" className="h-8 md:h-11" />
        </div>
        <p className="font-medium text-lg md:text-2xl">{ title }</p>
      </div>
      <p className="text-left leading-[110%] text-[0.875rem] md:text-[1.125rem]">
        { description }
      </p>
    </div>
  )
}

export { SolutionsCard }