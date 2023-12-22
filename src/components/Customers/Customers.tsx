import { CustomerCard } from "./CustomerCard/CustomerCard"
import customersIcon from "../../assets/customers-icon.svg"
import { customers } from "../../models/models"

const Customers = () => {
  return (
    <section className="container pt-11 pb-52 mx-auto" id="Customers">
      <div className="flex items-center justify-center mb-5 mx-auto">
        <div className="flex items-center justify-center h-[2.875rem] rounded-full px-[1.375rem] bg-gray mr-[0.625rem]">
          <p>Our Customers</p>
        </div>
        <div className="flex items-center justify-center w-[2.875rem] h-[2.875rem] rounded-full bg-gray">
          <img src={ customersIcon } alt="Customers Icon" />
        </div>
      </div>
      <div className="max-w-md mx-auto mb-14">
        <h3>Don't just take our word</h3>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        { customers.map(customer =>
          <CustomerCard key={ customer.id } { ...customer } />
        )}
      </div>
    </section>
  )
}

export { Customers }