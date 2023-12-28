import { ProcessCard } from "./ProcessCard/ProcessCard"
import { process, solutions } from "../../models/models"
import { motion as m, useScroll, useTransform } from "framer-motion"
import { SolutionsCard } from "./SolutionsCard/SolutionsCard"
import { useRef } from "react"
import SliderCards from "../SliderCards/SliderCards"

const Process = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const rotateProgress = useTransform(scrollYProgress, [0, 0.1666, 0.3333, 0.5, 0.6666, 0.8333, 1], [360, 360, 360, 360, 180, 0, 0])
  const scaleProgress = useTransform(scrollYProgress, [0, 0.1666, 0.3333, 0.5, 0.6666, 0.8333, 1], [0, 0, 0, 0, 0, 1, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 0.1666, 0.3333, 0.5, 0.6666, 0.8333, 1], [0, 0, 0, 0, 0, 1, 1])
  const translateX1 = useTransform(scrollYProgress, [0, 0.1666, 0.3333, 0.5, 0.6666, 0.8333, 1], [0, 0, 0, 0, 0, 0, -510])
  const translateX2 = useTransform(scrollYProgress, [0, 0.1666, 0.3333, 0.5, 0.6666, 0.8333, 1], [0, 0, 0, 0, 0, 0, -170])
  const translateX3 = useTransform(scrollYProgress, [0, 0.1666, 0.3333, 0.5, 0.6666, 0.8333, 1], [0, 0, 0, 0, 0, 0, 170])
  const translateX4 = useTransform(scrollYProgress, [0, 0.1666, 0.3333, 0.5, 0.6666, 0.8333, 1], [0, 0, 0, 0, 0, 0, 510])

  const scaleProgress2 = useTransform(scrollYProgress, [0, 0.1666, 0.3333, 0.5, 0.6666, 0.8333, 1], [1, 1, 1, 1, 1, 0, 0])
  const opacityProgress2 = useTransform(scrollYProgress, [0, 0.1666, 0.3333, 0.5, 0.6666, 0.8333, 1], [1, 1, 1, 1, 1, 0, 0])
  const translateY = useTransform(scrollYProgress, [0, 0.1666, 0.3333, 0.5, 0.6666, 0.8333, 1], [0, 0, 0, 0, 0, 400, 800])
  const translateY1 = useTransform(scrollYProgress, [0, 0.1666, 0.3333, 0.5, 0.6666, 0.8333, 1], [-800, -800, -800, -800, 0, 800, 800])
  const translateY2 = useTransform(scrollYProgress, [0, 0.1666, 0.3333, 0.5, 0.6666, 0.8333, 1], [-800, -800, -800, 0, 0, 800, 800])
  const translateY3 = useTransform(scrollYProgress, [0, 0.1666, 0.3333, 0.5, 0.6666, 0.8333, 1], [-800, -800, 0, 0, 0, 800, 800])
  const translateY4 = useTransform(scrollYProgress, [0, 0.1666, 0.3333, 0.5, 0.6666, 0.8333, 1], [-800, 0, 0, 0, 0, 800, 800])

  return (
    <m.section className="relative h-[200vh] pt-32" id="Process">
      <h3 className="container text-[1.875rem] md:text-[3.5rem] -mb-40 mx-auto">What's The Chinafy Process?</h3>

      {/* <div className="absolute w-[85.9rem] h-full left-0 top-0">
        <SliderCards amount={ 4 }>
          { process.map(item =>
            <ProcessCard key={ item.id } { ...item } />
          )}
        </SliderCards>
      </div> */}

      <div  className="sticky top-0 h-[100vh] overflow-hidden">
        <m.div
          className="absolute w-full h-full flex items-center left-0 top-0"
          style={{
            scale: scaleProgress,
            rotate: rotateProgress,
            opacity: opacityProgress,
            translateX: translateX1,
          }}
        >
          <ProcessCard { ...process[0] } />
        </m.div>

        <m.div
          className="absolute w-full h-full flex items-center left-0 top-0"
          style={{
            scale: scaleProgress,
            rotate: rotateProgress,
            opacity: opacityProgress,
            x: translateX2,
          }}
        >
          <ProcessCard { ...process[1] } />
        </m.div>

        <m.div
          className="absolute w-full h-full flex items-center left-0 top-0"
          style={{
            scale: scaleProgress,
            rotate: rotateProgress,
            opacity: opacityProgress,
            x: translateX3,
          }}
        >
          <ProcessCard { ...process[2] } />
        </m.div>

        <m.div
          className="absolute w-full h-full flex items-center left-0 top-0"
          style={{
            scale: scaleProgress,
            rotate: rotateProgress,
            opacity: opacityProgress,
            x: translateX4,
          }}
        >
          <ProcessCard { ...process[3] } />
        </m.div>

        <m.div
          className="absolute left-0 top-0 w-full h-full flex items-center justify-center"
          style={{
            scale: scaleProgress2,
            opacity: opacityProgress2,
          }}
        >
          <h4 className="text-[3.875rem] text-center sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10rem] font-medium leading-none">
            OUR SOLUTIONS
          </h4>
        </m.div>

        <m.div
          className="absolute left-0 top-0 w-full h-full flex items-end justify-center"
          style={{
            y: translateY,
          }}
        >
          <m.div
            className="absolute left-0 top-0 w-full h-full flex items-end justify-center"
            style={{
              y: translateY4,
            }}
          >
            <SolutionsCard { ...solutions[0] } />
          </m.div>
          <m.div
            className="absolute left-0 top-0 w-full h-full flex items-end justify-center"
            style={{
              y: translateY3,
            }}
          >
            <SolutionsCard { ...solutions[1] } />
          </m.div>
          <m.div
            className="absolute left-0 top-0 w-full h-full flex items-end justify-center"
            style={{
              y: translateY2,
            }}
          >
            <SolutionsCard { ...solutions[2] } />
          </m.div>
          <m.div
            className="absolute left-0 top-0 w-full h-full flex items-end justify-center"
            style={{
              y: translateY1,
            }}
          >
            <SolutionsCard { ...solutions[3] } />
          </m.div>
        </m.div>
      </div>

      <div ref={ ref } />
    </m.section>
  )
}

export { Process }