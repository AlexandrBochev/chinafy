import { TickerLogosProps } from "../../models/models"
import { Ticker } from "../Ticker/Ticker"

const TickerLogos = ({ title, color, logos }: TickerLogosProps) => {
  return (
    <section className="lg:container overflow-hidden mx-auto">
      <p className="md:text-xl font-medium mb-8">{ title }</p>
      
      <div className={`flex w-full items-center h-[5rem] md:h-[9.375rem] ${ color } lg:rounded-[1.25rem]`}>
        <Ticker>
          <div className="flex">
            { logos.map(logo =>
              <div key={logo.id} className="flex items-center justify-center w-[10rem] md:w-[19rem] px-[2rem] overflow-hidden">
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