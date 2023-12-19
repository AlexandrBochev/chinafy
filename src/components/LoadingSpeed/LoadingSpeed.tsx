import { Clock } from "../icons/Clock"
import flag from '../../assets/china-flag.png'
import { LoadingSpeedCard } from "./LoadingSpeedCard"
import { useState } from "react"

const LoadingSpeed = () => {
  const [seconds, setSeconds] = useState(15)

  return (
    <section className="w-full bg-background py-[6.25rem]">
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-center mb-5">
          <p className="flex items-center justify-center h-[2.875rem] text-center bg-white rounded-full px-[1.375rem] mr-[0.625rem]">
            Empowering Speed
          </p>
          <div className="flex items-center justify-center w-[2.875rem] h-[2.875rem] bg-white rounded-full">
            <Clock />
          </div>
        </div>
        <h1 className="mb-[2.5rem]">
          Does your website work<br />in China?
          <span className="inline-block ml-4">
            <img src={ flag } alt="China Flag" />
          </span>
        </h1>
        <div className="relative w-full max-w-[65.875rem] grid grid-cols-2 gap-4 mx-auto">
          <LoadingSpeedCard title='Before Chinafy' seconds={ 15 } left />
          <LoadingSpeedCard title='After Chinafy' seconds={ 3.1 } color="bg-green" />
          <div
            className="
              absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex items-center justify-center text-xl bg-background w-[6.25rem] h-[6.25rem] rounded-full z-20
            "
          >
            { seconds }
          </div>
        </div>
      </div>
    </section>
  )
}

export { LoadingSpeed }