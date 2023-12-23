import { ProcessCard } from "./ProcessCard/ProcessCard"
import { process } from "../../models/models"
import { motion as m, useScroll } from "framer-motion"
import SliderCards from "../SliderCards/SliderCards"

const Process = () => {
  const { scrollYProgress } = useScroll()

  return (
    <section className="pb-14 md:pb-20 overflow-x-hidden" id="Process">
      <h3 className="container text-[1.875rem] md:text-[3.5rem] mb-[3.125rem] mx-auto">What's The Chinafy Process?</h3>
      <div className="w-[110rem] md:w-[127rem] mx-auto">
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
    </section>
  )
}

export { Process }