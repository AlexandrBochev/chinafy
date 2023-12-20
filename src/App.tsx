import { ComeIn } from "./components/ComeIn/ComeIn"
import { CrossBorderBlock } from "./components/CrossBorderBlock/CrossBorderBlock"
import { Header } from "./components/Header/Header"
import { Intro } from "./components/Intro/Intro"
import { LoadingSpeed } from "./components/LoadingSpeed/LoadingSpeed"
import { Ticker } from "./components/Ticker/Ticker"
import { TickerLogos } from "./components/TickerLogos/TickerLogos"
import { TickerWords } from "./components/TickerWords/TickerWords"

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
        <TickerLogos />
      </main>
    </>
  )
}

export { App }
