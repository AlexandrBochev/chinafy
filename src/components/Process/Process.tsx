import { ProcessCard } from "./ProcessCard/ProcessCard"
import { process, solutions } from "../../models/models"
import { motion as m, useScroll, useTransform } from "framer-motion"
import { SolutionsCard } from "./SolutionsCard/SolutionsCard"
import { useRef } from "react"

const Process = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const rotateProgress = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [360, 360, 0, 0])
  const scaleProgress = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0, 1, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0, 1, 1])
  const translateX1 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0, 0, -510])
  const translateX2 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0, 0, -170])
  const translateX3 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0, 0, 170])
  const translateX4 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0, 0, 510])

  const scaleProgress2 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 1, 0, 0])
  const opacityProgress2 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 1, 0, 0])
  const translateY = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [-800, 0, 800, 800])

  return (
    <m.section className="relative h-[200vh]" id="Process">
      <h3 className="container text-[1.875rem] md:text-[3.5rem] mb-[3.125rem] mx-auto">What's The Chinafy Process?</h3>

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
          { solutions.map(solution =>
            <SolutionsCard key={ solution.id } { ...solution } />
          )}
        </m.div>
      </div>

      <div ref={ ref } />
{/* 
      <div className="sticky top-40 left-0 container h-[32rem] mx-auto" id="Solutions">
        <m.div
          className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] w-full h-full"
          style={{
            scale: scaleProgress2,
            opacity: opacityProgress2,
          }}
        >
          <h4 className="text-[3.875rem] text-center sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10rem] font-medium leading-none">
            OUR SOLUTIONS
          </h4>
        </m.div>
        <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] w-full h-full">
          { solutions.map(solution =>
            <SolutionsCard key={ solution.id } { ...solution } />
          )}
        </div>
      </div> */}
    </m.section>
  )
}

export { Process }