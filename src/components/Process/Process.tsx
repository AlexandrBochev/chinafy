import { ProcessCard } from "./ProcessCard/ProcessCard"
import { process, solutions } from "../../models/models"
import { motion as m, useScroll, useTransform } from "framer-motion"
import { SolutionsCard } from "./SolutionsCard/SolutionsCard"

const Process = () => {
  const { scrollYProgress } = useScroll({
  })

  const rotateProgress = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 0, 360, 360])
  const scaleProgress = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1, 1, 1, 0, 0])
  const opacityProgress = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1, 1, 1, 0, 0])
  const scaleProgress2 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 0, 1, 1])
  const opacityProgress2 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 0, 1, 1])

  const translateX1 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [-510, -510, 0, 0, 0])
  const translateX2 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [-170, -170, 0, 0, 0])
  const translateX3 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [170, 170, 0, 0, 0])
  const translateX4 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [510, 510, 0, 0, 0])
  const translateY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [800, 800, 800, 0, -800])

  return (
    <m.section className="relative h-[3000vh]" id="Process">
      <h3 className="container text-[1.875rem] md:text-[3.5rem] mb-[3.125rem] mx-auto">What's The Chinafy Process?</h3>

      <div  className="sticky top-0 h-[50rem] overflow-hidden">
        <m.div
          className="absolute w-full left-0 top-52"
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
          className="absolute w-full left-0 top-52"
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
          className="absolute w-full left-0 top-52"
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
          className="absolute w-full left-0 top-52"
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