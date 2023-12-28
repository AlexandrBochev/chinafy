import { useEffect, useState } from 'react'
import twoCircles from '../../assets/two-circles.svg'
import earth from '../../assets/earth.svg'
import { Button } from '../Button/Button'
import { footerButtons } from '../../models/models'
import { BlocksFall } from '../BlocksFall/BlocksFall'
import { BlocksFall2 } from '../BlocksFall/BlocksFall2'

const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  console.log(isActive)
  console.log(isAnimated)

  useEffect(() => {
    const handleScroll = () => {
      const component = document.getElementById('componentId'); // Замените 'yourComponentId' на ID вашего компонента
      if (component) {
        const topPosition = component.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (topPosition < windowHeight) {
          setIsActive(true);
          setIsAnimated(true);
        } else {
          setIsActive(false);
          setIsAnimated(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="componentId"
      className="relative w-full flex flex-col items-center bg-lilac rounded-t-[3.75rem] lg:rounded-t-[5rem] pt-[3.75rem] lg:pt-[5rem] -mt-[3.75rem] lg:-mt-[5rem] overflow-hidden"
    >

      {/* Heading */}
      <div className="">
        <div className="flex items-center justify-center mb-3 md:mb-5">
          <div className="p-1 w-6 h-6 md:w-10 md:h-10 md:p-2 mr-1 md:mr-3 bg-white rounded-full">
            <img src={ twoCircles } alt="Two Circles" />
          </div>
          <div className="p-1 w-6 h-6 md:w-10 md:h-10 md:p-[0.5625rem] bg-white rounded-full">
            <img src={ earth } alt="Earth" />
          </div>
        </div>
        <div className="w-[16.5rem] lg:w-[49rem] pb-8">
          <h3 className="text-[1.875rem] lg:text-[3.5rem]">Faster, fuller website delivery for China</h3>
        </div>
      </div>

      <div className="mb-[12rem] lg:mb-[18rem] rounded-[0.625rem] z-40 hover:border">
        <Button black>Get Started</Button>
      </div>

      <div className="absolute top-0 w-full h-full" >
        <BlocksFall2 active={isActive} anim={isAnimated} />
      </div>

      {/* <div className="">
        {footerButtons.map(button =>
          <div
            key={ button.id }
            className={`
              absolute top-0 flex items-center justify-center text-[0.5rem] md:text-[1rem] h-6 md:h-14 px-3 md:px-8 rounded-full
              ${ button.color }
            `}
          >
            { button.name }
          </div>
        )}
      </div> */}

      {/* <div className="text-background font-medium text-[28vw] mb-8 md:mb-12">Chinafy</div> */}
    </section>
  )
}

export { Footer }