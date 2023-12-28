interface SwitchBtnProps {
  onClick: () => void;
  isAnnual: boolean;
  title: string;
}

const SwitchBtn = ({ onClick, isAnnual, title }: SwitchBtnProps) => {
  return (
    <div
      onClick={ onClick }
      className="flex items-center justify-center h-9 lg:h-12 rounded-full pr-5 lg:pr-6 mr-3 last:mr-0 border cursor-pointer"
    >
      <div
        className={`
          rounded-full bg-lilac transition-all duration-300
          ${ isAnnual ? 'w-[1.875rem] lg:w-9 h-[1.875rem] lg:h-9 ml-[0.1875rem] lg:ml-[0.375rem] mr-2' : 'w-0 h-0 mr-5 lg:mr-6' }
        `}
      />
      <p className="flex items-center text-sm lg:text-base">{ title }</p>
    </div>
  )
}

export { SwitchBtn }