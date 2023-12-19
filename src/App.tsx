import { CrossBorderBlock } from "./components/CrossBorderBlock/CrossBorderBlock"
import { Header } from "./components/Header/Header"
import { Intro } from "./components/Intro/Intro"
import { LoadingSpeed } from "./components/LoadingSpeed/LoadingSpeed"

const App = () => {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col items-center">
        <Intro />
        <CrossBorderBlock />
        <LoadingSpeed />
      </main>
    </>
  )
}

export { App }
