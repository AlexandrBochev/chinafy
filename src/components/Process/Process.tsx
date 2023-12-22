import { ProcessCard } from "./ProcessCard/ProcessCard"
import { process } from "../../models/models"
import { motion as m, useScroll } from "framer-motion"

const Process = () => {
  const { scrollYProgress } = useScroll()

  return (
    <section className="container h-[300vh] pt-[6.25rem] pb-20 mx-auto" id="Process">
      <h3 className="mb-[3.125rem]">What's The Chinafy Process?</h3>
      <div
        className="sticky top-0 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        { process.map(item =>
          <m.div
            key={ item.id }
          >
            <ProcessCard { ...item } />
          </m.div>
        )}
      </div>
    </section>
  )
}

export { Process }