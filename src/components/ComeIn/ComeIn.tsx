import question from '../../assets/question.svg'
import out from '../../assets/out.svg'
import arrowDown from '../../assets/arrow-down.svg'
import { Button } from '../Button/Button'
import { ComeInCard } from './ComeInCard/ComeInCard'
import comeInCardBg1 from '../../assets/come-in-card-bg-1.jpg'
import comeInCardBg2 from '../../assets/come-in-card-bg-2.jpg'
import comeInCardBg3 from '../../assets/come-in-card-bg-3.jpg'
import comeInCardBg4 from '../../assets/come-in-card-bg-4.jpg'
import clock from '../../assets/clock-2.svg'
import arrowMd from '../../assets/arrow-md.svg'
import battery from '../../assets/battery.svg'
import { useState } from 'react'

const ComeIn = () => {
  const [hover, setHover] = useState(false)

  return (
    <section className="container w-full pt-[8.75rem] pb-[6.25rem]">
      <div className='flex items-center justify-between mb-[3.125rem] mx-auto'>
        <div className='flex'>
          <div className='flex w-10 h-10 rounded-full items-center justify-center bg-background mr-3'>
            <img src={ question } alt="Question" />
          </div>
          <div className='flex w-10 h-10 rounded-full items-center justify-center bg-background'>
            <img src={ out } alt="Out" />
          </div>
        </div>
        <div>
          <h3>That's where we come in</h3>
        </div>
        <div className='flex'>
          <p>Browse<span className='font-medium text-lilac mr-3'> Features</span></p>
          <img src={ arrowDown } alt="arrow-down" />
        </div>
      </div>

      <div className="relative w-full h-[30rem] mb-[3.425rem]">
        <div
          className={`
            absolute top-0 flex card-hover transition-all duration-500
            ${ hover ? '-translate-x-60': 'left-0' }
          `}
        >
          <ComeInCard background={ comeInCardBg1 }>
            <div className="w-full h-full flex flex-col justify-between">
              <div className="flex items-start justify-between text-[2rem] font-medium text-left leading-[110%]">
                <p>Make Your Site<br />Fast</p>
                <div className="flex items-center justify-center bg-white w-11 h-11 rounded-full">
                  <img src={ clock } alt="Clock" />
                </div>
              </div>
              <p className="text-left text-[1.125rem]">
                Accelerate your website to achieve onshore speeds, whether it is hosted in or outside of China.
              </p>
            </div>
          </ComeInCard>

          <ComeInCard background={ comeInCardBg2 }>
            <div className="flex">
              <p className="flex items-center justify-center bg-white h-11 px-5 rounded-full">
                Explore Our Technologies
              </p>
              <div className="flex items-center justify-center bg-white w-11 h-11 rounded-full">
                <img src={ arrowMd } alt="Arrow" />
              </div>
            </div>
          </ComeInCard>

          <ComeInCard background={ comeInCardBg3 }>
          <div className="w-full h-full flex flex-col justify-between">
              <div className="flex items-start justify-between text-[2rem] font-medium text-left leading-[110%]">
                <p>Make Your Site<br />Work</p>
                <div className="flex items-center justify-center bg-white w-11 h-11 rounded-full">
                  <img src={ battery } alt="Battery" />
                </div>
              </div>
              <p className="text-left text-[1.125rem]">
                Automate how you identify, remove, or replace on-page resource incompatibilities across hundreds of resources with our intelligent resource suite.
              </p>
            </div>
          </ComeInCard>

          <div onMouseEnter={ () => setHover(true) } onMouseLeave={ () => setHover(false) }>
            <ComeInCard background={ comeInCardBg4 }>
              <div className="flex h-full items-end text-left">
                <p className="flex items-center justify-center bg-white h-11 px-5 rounded-full">
                  Optimize Your Content
                </p>
              </div>
            </ComeInCard>
          </div>
        </div>
      </div>

      <div className="flex justify-center mx-auto">
        <Button square color='bg-black text-white'>Get Started</Button>
        <span className='w-5' />
        <Button square>Get Started</Button>
      </div>
    </section>
  )
}

export { ComeIn }