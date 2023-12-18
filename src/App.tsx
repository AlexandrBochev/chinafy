import { Header } from "./components/Header/Header"
import { Intro } from "./components/Intro/Intro"

const App = () => {
  return (
    <>
      <Header />
      <main className="w-full flex justify-center">
        <Intro />
      </main>
    </>
  )
}

export { App }
