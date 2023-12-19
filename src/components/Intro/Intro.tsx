import { Button } from "../Button/Button"
import { ArrowSm } from "../icons/ArrowSm"
import { IntroBlock } from "../icons/IntroBlock"
import { IntroBlockSm } from "../icons/IntroBlockSm"
import usersIcons from '../../assets/users-icons.png'
import twoCircles from '../../assets/two-circles.svg'
import earth from '../../assets/earth.svg'
import plus from '../../assets/plus.svg'
import laptopBox from '../../assets/laptop-box.jpg'
import phone from '../../assets/phone.webp'
import laptop from '../../assets/laptop.webp'
import { useState } from "react"

const slides = [
  {id: 1, img: laptopBox},
  {id: 2, img: phone},
  {id: 3, img: laptop}
]

const Intro = () => {
  const [active, setActive] = useState(1)

  return (
    <section className="container w-full h-screen grid grid-cols-2 gap-4 p-[1.5625rem] pl-[3.375rem]">
      <div className="w-full h-full flex flex-col justify-end text-start">
        <h1 className="leading-none mb-[2.125rem]">Make Your Site Work in China</h1>
        <div className="max-w-[33.375rem] flex items-center justify-between mb-20">
          <p className="max-w-[21.25rem] mr-4">Connecting the world's largest companies with the world's largest market.</p>
          <Button square color={ 'bg-black text-white' }>Get Started</Button>
        </div>
        <div className="flex max-w-[35.625rem] items-end justify-between mb-5">
          <div className="relative">
            <IntroBlock />
            <p className="absolute top-[2.75rem] right-[3.125rem] max-w-[11.25rem] text-[0.875rem] opacity-50">
              Watch, and compare your site load in the US vs China.
            </p>
            <div className="absolute top-[2.125rem] right-[0.5rem]">
              <Button ball color={ 'bg-white' }>
                <span className="rotate-45"><ArrowSm /></span>
              </Button>
            </div>
            <a href="/" className="absolute left-[1.5625rem] bottom-[1.125rem] flex items-center">
              <p className="peer">Visual Perfomance Test</p>
              <span className="ml-[2.125rem] rotate-45 peer-hover:translate-x-2 transition-all">
                <ArrowSm />
              </span>
            </a>
          </div>
          <div className="relative">
            <IntroBlockSm />
            <img src={ usersIcons } alt="Users Icons" className="absolute left-2 top-2" />
            <div className="absolute top-0 -right-2">
              <Button ball color={ 'bg-yellow' }><ArrowSm /></Button>
            </div>
            <div className="absolute left-[0.625rem] bottom-[0.625rem] text-[1.5625rem]">
              <p>3K+</p>
              <p className="text-xs mt-3">Globally Powered Websitesp</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full flex items-end justify-end rounded-[1.25rem] bg-lilac p-[1.5625rem]">
        <div className="absolute left-[1.5625rem] top-5 flex w-[5.125rem] items-center justify-between">
          <Button ball color={ 'bg-white' }><img src={ twoCircles } alt="Two Circles" width={20} height={20} /></Button>
          <Button ball color={ 'bg-white' }><img src={ earth } alt="Earth" width={20} height={20} /></Button>
        </div>
        <div className="flex">
          <div className="flex flex-col items-end mr-3">
            <img src={ plus } alt="Plus" width={30} height={30} />
            <p className="text-left mt-2 mr-4">Explore our<br />latest projects</p>
          </div>
          <ul className="flex w-[12.62rem] h-[4.75rem] items-center justify-between bg-white rounded-full px-3">
            { slides.map(slide =>
              <li key={slide.id}>
                <img
                  src={ slide.img }
                  alt="Slide"
                  className={`
                    rounded-full cursor-pointer object-cover transition-all
                    ${ active === slide.id ? 'border-2 p-[0.1875rem] w-[3.75rem] h-[3.75rem]' : 'w-[3.125rem] h-[3.125rem]' }
                  `}
                  onClick={() => setActive(slide.id)}
                />
              </li> 
              )}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { Intro }