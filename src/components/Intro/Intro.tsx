import { Button } from "../Button/Button"
import { ArrowSm } from "../icons/ArrowSm"
import { IntroBlock } from "../icons/IntroBlock"
import { IntroBlockSm } from "../icons/IntroBlockSm"
import usersIcons from '../../assets/users-icons.png'

const Intro = () => {
  return (
    <section className="container w-full h-screen grid grid-cols-2 gap-4 p-[1.5625rem] pl-[3.375rem]">
      <div className="w-full h-full flex flex-col justify-end text-start">
        <h1 className="leading-none mb-[2.125rem]">Make Your Site Work in China</h1>
        <div className="max-w-[33.375rem] flex items-center justify-between mb-20">
          <p className="max-w-[21.25rem] mr-4">Connecting the world's largest companies with the world's largest market.</p>
          <Button square color={ 'bg-black text-white' }>Get Started</Button>
        </div>
        <div className="flex max-w-[35.625rem] items-end justify-between mb-5">
          <div className="relative">
            <IntroBlock />
            <p className="absolute top-[2.75rem] right-[3.125rem] max-w-[11.25rem] text-[0.875rem] opacity-50">
              Watch, and compare your site load in the US vs China.
            </p>
            <div className="absolute top-[2.125rem] right-[0.5rem]">
              <Button ball color={ 'bg-white' }>
                <span className="rotate-45"><ArrowSm /></span>
              </Button>
            </div>
            <a href="/" className="absolute left-[1.5625rem] bottom-[1.125rem] flex items-center">
              <p className="peer">Visual Perfomance Test</p>
              <span className="ml-[2.125rem] rotate-45 peer-hover:translate-x-2 transition-all">
                <ArrowSm />
              </span>
            </a>
          </div>
          <div className="relative">
            <IntroBlockSm />
            <img src={ usersIcons } alt="Users Icons" className="absolute left-2 top-2" />
            <div className="absolute top-0 -right-2">
              <Button ball color={ 'bg-yellow' }><ArrowSm /></Button>
            </div>
            <div className="absolute left-[0.625rem] bottom-[0.625rem] text-[1.5625rem]">
              <p>3K+</p>
              <p className="text-xs mt-3">Globally Powered Websitesp</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex items-end justify-end rounded-[1.25rem] bg-lilac p-[1.5625rem]">
        <h1>Slider</h1>
      </div>
    </section>
  )
}

export { Intro }