import { Button } from "../Button/Button"
import { ArrowSm } from "../icons/ArrowSm"
import { IntroBlock } from "../icons/IntroBlock"
import { IntroBlockSm } from "../icons/IntroBlockSm"
import usersIcons from '../../assets/users-icons.png'
import twoCircles from '../../assets/two-circles.svg'
import earth from '../../assets/earth.svg'
import plus from '../../assets/plus.svg'
import { useEffect, useState } from "react"
import { slides } from "../../models/models"

const Intro = () => {
  const [active, setActive] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      active < slides.length ? setActive(active + 1) : setActive(1)
    }, 3000)
    return () => clearInterval(interval)
  }, [active])

  return (
    <section className="container xl:flex pt-36 xl:pt-6 mx-auto">
      <div className="w-full flex flex-col xl:justify-end">
        <div className="relative max-w-[34.25rem] mb-[2.125rem] mx-auto lg:text-left xl:mx-0">
          <span className="absolute bottom-0 -right-1 h-10 w-32 lg:h-20 lg:w-[19.6rem] lg:right-8 bg-lilac rounded-xl -z-10" />
          <span className="absolute bottom-0 -right-3 h-10 w-10 lg:h-20 lg:right-3 bg-yellow rounded-xl -z-20" />
          <h1 className="leading-none text-[2.5rem] lg:text-[5rem]">Make Your Site<br />Work in China</h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:text-left items-center mb-16 lg:mb-20 mx-auto xl:mx-0">
          <p className="">Connecting the world's largest companies<br />with the world's largest market.</p>
          <span className="w-5 h-5" />
          <Button black>Get Started</Button>
        </div>
        <div className="flex items-end mb-12 xl:mb-5 mx-auto xl:mx-0">
          <div className="relative hidden md:block mr-6">
            <IntroBlock />
            <p className="absolute top-[2.75rem] right-[3.125rem] max-w-[11.25rem] text-[0.875rem] opacity-50">
              Watch, and compare your site load in the US vs China.
            </p>
            <div className="absolute top-[2.125rem] right-[0.5rem] flex items-center justify-center w-9 h-9 bg-white rounded-full">
              <span className="rotate-45"><ArrowSm /></span>
            </div>
            <a href="/" className="absolute left-[1.5625rem] bottom-[1.125rem] flex items-center">
              <p className="peer">Visual Perfomance Test</p>
              <span className="ml-[2.125rem] rotate-45 peer-hover:translate-x-2 transition-all">
                <ArrowSm />
              </span>
            </a>
          </div>

          <div className="relative hidden md:block">
            <IntroBlockSm />
            <img src={ usersIcons } alt="Users Icons" className="absolute left-2 top-2" />
            <div className="absolute top-0 -right-2 flex items-center justify-center w-9 h-9 bg-yellow rounded-full">
              <ArrowSm />
            </div>
            <div className="absolute left-[0.625rem] bottom-[0.625rem] text-left text-[1.5625rem]">
              <p>3K+</p>
              <p className="text-xs mt-3">Globally Powered Websitesp</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[26rem] xl:h-[53.125rem] xl:w-full xl:ml-6 flex flex-col items-end justify-between rounded-[1.25rem] bg-lilac overflow-hidden p-3 md:p-[1.5625rem]">
        <div className="w-full flex items-start justify-between">

          <div className="relative md:hidden z-10">
            <IntroBlockSm />
            <img src={ usersIcons } alt="Users Icons" className="absolute left-2 top-2" />
            <div className="absolute top-0 -right-2 flex items-center justify-center w-9 h-9 bg-yellow rounded-full">
              <ArrowSm />
            </div>
            <div className="absolute left-[0.625rem] bottom-[0.625rem] text-left text-[1.5625rem]">
              <p>3K+</p>
              <p className="text-xs mt-3">Globally Powered Websitesp</p>
            </div>
          </div>

          <div className="flex z-10">
            <div className="p-1 w-6 h-6 md:w-10 md:h-10 md:p-2 mr-1 md:mr-3 bg-white rounded-full">
              <img src={ twoCircles } alt="Two Circles" />
            </div>
            <div className="p-1 w-6 h-6 md:w-10 md:h-10 md:p-[0.5625rem] bg-white rounded-full">
              <img src={ earth } alt="Earth" />
            </div>
          </div>
        </div>
        <div className="flex z-10">
          <div className="flex flex-col items-end justify-center mr-3">
            <img src={ plus } alt="Plus" width={30} height={30} />
            <p className="hidden sm:block text-left text-white mt-2 mr-4">Explore our<br />latest projects</p>
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
        <div className="absolute top-0 left-0 w-full h-full">
          { slides.map(slide =>
            <div key={ slide.id }>
              <img
                src={ slide.img }
                alt="Slide"
                className={`
                absolute top-0 left-0 w-full h-full object-cover transition-all duration-700
                  ${ active === slide.id ? 'opacity-100' : 'opacity-0' }
                `}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export { Intro }