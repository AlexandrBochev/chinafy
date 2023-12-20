import { TickerProps } from "../../models/models"

const Ticker = ({ children }: TickerProps) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full flex animate-ticker">
        { children }
      </div>
    </div>
  )
}

export { Ticker }