import { logos } from "../../models/models"
import { Ticker } from "../Ticker/Ticker"

const TickerLogos = () => {
  return (
    <section className="container pb-11 overflow-hidden">
      <p className="text-xl font-medium mb-8">Proudly Powering the Sites You Love</p>
      
      <div className="flex w-full items-center h-[9.375rem] bg-gray rounded-[1.25rem]">
        <Ticker>
          <div className="flex">
            { logos.map(logo =>
              <div key={logo.id} className="flex items-center justify-center w-[19rem] px-[2rem] overflow-hidden">
                <img src={logo.img} alt="Logo" />
              </div>  
            )}
          </div>
        </Ticker>
      </div>
    </section>
  )
}

export { TickerLogos }