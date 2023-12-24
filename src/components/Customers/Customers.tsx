import { CustomerCard } from "./CustomerCard/CustomerCard"
import customersIcon from "../../assets/customers-icon.svg"
import { customers } from "../../models/models"
import SliderCards from "../SliderCards/SliderCards"

const Customers = () => {
  return (
    <section className="mx-auto overflow-x-hidden" id="Customers">
      <div className="flex items-center justify-center mb-5 mx-auto">
        <div className="flex items-center justify-center h-[2.875rem] rounded-full px-[1.375rem] bg-gray mr-[0.625rem]">
          <p>Our Customers</p>
        </div>
        <div className="flex items-center justify-center w-[2.875rem] h-[2.875rem] rounded-full bg-gray">
          <img src={ customersIcon } alt="Customers Icon" />
        </div>
      </div>
      <div className="max-w-[14rem] md:max-w-md mx-auto">
        <h3 className="text-[1.875rem] md:text-[3.5rem]">Don't just take our word</h3>
      </div>
      <div className="w-[72rem] md:w-[84rem] mx-auto">
        <SliderCards amount={ 4 }>
          { customers.map(customer =>
            <CustomerCard key={ customer.id } { ...customer } />
          )}
        </SliderCards>
      </div>
    </section>
  )
}

export { Customers }