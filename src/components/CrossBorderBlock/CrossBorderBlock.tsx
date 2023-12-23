import { useEffect, useState } from "react"
import { performance } from "../../models/models"

const CrossBorderBlock = () => {
  const [active, setActive] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      active < performance.length ? setActive(active + 1) : setActive(1)
    }, 3000)
    return () => clearInterval(interval)
  }, [active])

  return (
    <section className="container pt-20 md:pt-36 pb-20 md:pb-24 mx-auto">
      <h2 className="text-[2.5rem] md:text-[5rem] max-w-[21.46rem] md:max-w-[74rem] mb-[2.1875rem] mx-auto">
        Cross-border web performance to load
        <span className="relative w-[12.4rem] md:w-[24rem] h-[3.8rem] md:h-[6rem] inline-block text-left -mb-5 overflow-hidden">
          { performance.map(item =>
            <p
            key={item.id}
            className={`
              ${ active === item.id ? 'translate-x-[0%]' : '-translate-x-[115%]' }
              absolute top-0 left-0 ${ item.color } px-2 ml-3 rounded-xl transition-all duration-700 ease-in-out
            `}>
            {item.title}
          </p>
          )}
        </span>
      </h2>
      <p>Without requiring an ICP or building a site<br />from scratch. Hosting in China, at your option.</p>
    </section>
  )
}

export { CrossBorderBlock }