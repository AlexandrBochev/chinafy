import { Button } from "../Button/Button"

const Intro = () => {
  return (
    <section className="container w-full h-screen grid grid-cols-2 gap-4 p-[1.5625rem] pl-[3.375rem]">
      <div className="w-full h-full flex flex-col justify-end text-start">
        <h1 className="leading-none mb-[2.125rem]">Make Your Site Work in China</h1>
        <div className="max-w-[33.375rem] flex items-center justify-between mb-20">
          <p className="max-w-[21.25rem] mr-4">Connecting the world's largest companies with the world's largest market.</p>
          <Button square color={ 'bg-black text-white' }>Get Started</Button>
        </div>
      </div>
      <div className="w-full h-full flex items-end justify-end rounded-[1.25rem] bg-lilac p-[1.5625rem]">
        <h1>Slider</h1>
      </div>
    </section>
  )
}

export { Intro }