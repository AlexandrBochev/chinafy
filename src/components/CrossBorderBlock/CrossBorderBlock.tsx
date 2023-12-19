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
    <section className="container pt-[7.1875rem] pb-[6.25rem]">
      <h2 className="mb-[2.1875rem]">
        Cross-border web<br />performance to load
        <span className="relative w-[23rem] h-[6rem] inline-block text-left -mb-5 overflow-hidden">
          { performance.map(item =>
            <p
            key={item.id}
            className={`
              ${ active === item.id ? 'translate-x-[0%]' : '-translate-x-[110%]' }
              absolute top-0 left-0 ${ item.color } px-3 ml-3 rounded-xl transition-all duration-700 ease-in-out
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