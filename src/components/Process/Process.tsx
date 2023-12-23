import { ProcessCard } from "./ProcessCard/ProcessCard"
import { process, solutions } from "../../models/models"
import { motion as m, useScroll } from "framer-motion"
import SliderCards from "../SliderCards/SliderCards"
import { SolutionsCard } from "./SolutionsCard/SolutionsCard"

const Process = () => {
  const { scrollYProgress } = useScroll()

  return (
    <section className="pb-14 md:pb-20 overflow-x-hidden" id="Process">
      <h3 className="container text-[1.875rem] md:text-[3.5rem] mb-[3.125rem] mx-auto">What's The Chinafy Process?</h3>
      <div className="w-[110rem] md:w-[127rem] mb-20 md:mb-32 mx-auto">
        <SliderCards>
          { process.map(item =>
            <m.div
              key={ item.id }
            >
              <ProcessCard { ...item } />
            </m.div>
          )}
        </SliderCards>
      </div>
      <div className="relative container h-[32rem] mx-auto" id="Solutions">
        <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] sm:w-full">
          <h4
            className="
              text-[3.875rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10rem] font-medium leading-none
            "
          >
            OUR SOLUTIONS
          </h4>
        </div>
        <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] w-full h-full">
          { solutions.map(solution =>
            <SolutionsCard key={ solution.id } { ...solution } />
          )}
        </div>
      </div>
    </section>
  )
}

export { Process }