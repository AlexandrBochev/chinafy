import { ComeIn } from "./components/ComeIn/ComeIn"
import { CrossBorderBlock } from "./components/CrossBorderBlock/CrossBorderBlock"
import { Customers } from "./components/Customers/Customers"
import { Header } from "./components/Header/Header"
import { Intro } from "./components/Intro/Intro"
import { LoadingSpeed } from "./components/LoadingSpeed/LoadingSpeed"
import { Process } from "./components/Process/Process"
import { Solutions } from "./components/Solutions/Solutions"
import { Ticker } from "./components/Ticker/Ticker"
import { TickerLogos } from "./components/TickerLogos/TickerLogos"
import { TickerWords } from "./components/TickerWords/TickerWords"
import { logos, logos2 } from "./models/models"

const App = () => {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col items-center overflow-hidden">
        <Intro />
        <CrossBorderBlock />
        <LoadingSpeed />
        <Ticker>
          <TickerWords />
        </Ticker>
        <ComeIn />
        <TickerLogos title="Proudly Powering the Sites You Love" color="bg-gray" logos={ logos } />
        <Customers />
        <TickerLogos title="Our Official Partners" color="bg-yellow" logos={ logos2 } />
        <Process />
        <Solutions />
      </main>
    </>
  )
}

export { App }
