import { useState } from 'react'
import { SwitchBtn } from './SwitchBtn/SwitchBtn'
import usd from '../../assets/plans/usd.svg'
import { DoubleArrow } from '../icons/DoubleArrow'
import { plansItems } from '../../models/models'
import { PlansCard } from './PlansCard/PlansCard'
import SliderCards from '../SliderCards/SliderCards'

const Plans = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section className="pt-5 lg:pt-20 pb-[3.75rem] lg:pb-[6.25rem] overflow-x-hidden" id="Plans">
      
      {/* Heading */}
      <div className="container flex flex-col lg:flex-row lg:items-start justify-between mb-[3.125rem] mx-auto">
        <div className="lg:order-2">
          <div className="flex items-center justify-center mb-8 lg:mb-5">
            <p className="flex items-center h-9 lg:h-12 rounded-full text-sm lg:text-base px-5 lg:px-6 mr-3 bg-gray">
              Our Prices
            </p>
            <div className="flex items-center justify-center w-9 lg:w-12 h-9 lg:h-12 rounded-full bg-gray">
              <img src={ usd } alt="USD" className="lg:h-[1.375rem]" />
            </div>
          </div>
          <h3 className="text-[1.875rem] lg:text-[3.5rem] mb-[1.875rem] lg:mb-0">Explore Our Plans</h3>
        </div>

        <div className="flex items-center justify-center lg:order-1">
          <SwitchBtn onClick={() => setIsAnnual(true)} title="Annual" isAnnual={ isAnnual } />
          <SwitchBtn onClick={() => setIsAnnual(false)} title="Monthly" isAnnual={ !isAnnual } />
        </div>

        <div className="hidden lg:flex items-center cursor-pointer group order-3">
          <p className="mr-3">See more options</p>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lilac group-hover:text-lilac group-hover:bg-black">
            <DoubleArrow />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="w-[70rem] md:w-[85rem] mx-auto">
        <SliderCards amount={ 3 }>
          {plansItems.map(plan =>
            <PlansCard key={ plan.id } { ...plan } isAnnual={ isAnnual } />
          )}
        </SliderCards>
      </div>
    </section>
  )
}

export { Plans }