import { CrossBorderBlock } from "./components/CrossBorderBlock/CrossBorderBlock"
import { Header } from "./components/Header/Header"
import { Intro } from "./components/Intro/Intro"

const App = () => {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col justify-center">
        <Intro />
        <CrossBorderBlock />
      </main>
    </>
  )
}

export { App }
