import { sloganWords } from "../../models/models"
import Blackplus from "../../assets/blask-plus.svg"

const TickerWords = () => {
  return (
    <div className="flex border-y border-black/10 py-[2.75rem]">
      { sloganWords.map(word =>
        <div key={word.id} className="flex items-center uppercase h-[3.75rem]">
          <div className="text-[3.5rem] md:text-[4.875rem] px-6">{word.name}</div>
          <img src={ Blackplus } alt="Black Plus" className="-mt-4 md:-mt-6" width={30} height={30} />
          <div className="text-[4rem] md:-mt-3 px-6">/</div>
        </div>  
      )}
    </div>
  )
}

export { TickerWords }