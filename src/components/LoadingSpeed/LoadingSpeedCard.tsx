import burgerIcon from '../../assets/burger-icon.svg'
import pencil from '../../assets/pencil.svg'
import balls from '../../assets/balls.png'
import graphic from '../../assets/graphic.svg'
import ninety from '../../assets/ninety.png'
import { delay, motion as m } from "framer-motion"
import { LoadingSpeedCardProps, cardColors, motionSettings } from '../../models/models'

const LoadingSpeedCard = ({ title, seconds, color, left }: LoadingSpeedCardProps) => {
  return (
    <div className="bg-white rounded-[1.25rem] p-[1.875rem]">
      <div className="w-full flex items-center justify-between mb-[2.5rem]">
        <p className="h-[2.875rem] text-center bg-yellow rounded-full px-[1.375rem] py-[0.875rem] mr-[0.625rem]">
          { title }
        </p>
        <m.div
          className={`flex items-center justify-center w-[2.875rem] h-[2.875rem] ${ color ? color : 'bg-background' } rounded-full`}
          { ...motionSettings}
          transition={{ delay: seconds, duration: 0.2 }}
        >
          { seconds }
          <span>s</span>
        </m.div>
      </div>
      <m.div
        { ...motionSettings}
        transition={{ delay: seconds * 0.1, duration: 0.2 }}
        className={`bg-background text-[0.625rem] rounded-[1.25rem] p-5 pb-0 ${ left ? 'mr-[2.375rem]' : 'ml-[2.375rem]' }`}>
        <div className="flex items-center justify-between mb-[1.375rem]">
          <m.div
            { ...motionSettings}
            transition={{ delay: seconds * 0.2, duration: 0.2 }}
            className="w-10 h-6 rounded-full bg-black/10"
          />
          <m.div
            { ...motionSettings}
            transition={{ delay: seconds * 0.3, duration: 0.2 }}
            className="flex items-center justify-between w-44"
          >
            <div className="flex items-center justify-center w-14 h-6 rounded-full bg-black/10">about</div>
            <div className="flex items-center justify-center w-14 h-6 rounded-full bg-yellow">history</div>
            <div className="flex items-center justify-center w-14 h-6 rounded-full bg-black/10">service</div>
          </m.div>
          <m.div
            { ...motionSettings}
            transition={{ delay: seconds * 0.4, duration: 0.2 }}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-black/10"
          >
            <img src={ burgerIcon } alt="Burger Icon" />
          </m.div>
        </div>
        <m.div
          { ...motionSettings}
          transition={{ delay: seconds * 0.5, duration: 0.2 }}
          className="w-full h-9 flex items-center justify-between text-black/50 bg-white border border-lilac rounded-[0.625rem] mb-3 px-2"
        >
          <p>Hi! Type here</p>
          <img src={ pencil } alt="Pencil" />
        </m.div>
        <div className='w-full flex items-center justify-between mb-3'>
          <m.div
            { ...motionSettings}
            transition={{ delay: seconds * 0.6, duration: 0.2 }}
            className='flex p-[0.9375rem] pr-6 rounded-[0.625rem] bg-lilac'
          >
            <m.img
              { ...motionSettings}
              transition={{ delay: seconds * 0.7, duration: 0.2 }}
              src={ balls } alt="Balls" className='mr-[0.9375rem]'
            />
            <img src={ graphic } alt="Graphic" />
          </m.div>
          <div className='flex p-[0.625rem] rounded-[0.625rem] bg-white'>
            <m.img
              { ...motionSettings}
              transition={{ delay: seconds * 0.8, duration: 0.2 }}
              src={ ninety } alt="Ninety"
            />
          </div>
        </div>
        <m.div
          { ...motionSettings}
          transition={{ delay: seconds * 0.9, duration: 0.2 }}
          className='flex rounded-t-[0.625rem] bg-white p-3 pb-0'
        >
          <p className='mr-4'>About</p>
          <div className='w-full'>
            <m.div
              { ...motionSettings}
              transition={{ delay: seconds, duration: 0.2 }}
              className='w-full flex gap-2'
            >
              { cardColors.map((cardColor) =>
                <div key={ cardColor.id } className={`rounded-[0.375rem] w-full h-9 mb-2 ${ cardColor.color }`} />
              )}
            </m.div>
            <div className='rounded-t-[0.375rem] bg-background w-[11.625rem] h-6' />
          </div>
        </m.div>
      </m.div>
    </div>
  )
}

export { LoadingSpeedCard }