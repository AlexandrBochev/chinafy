import { ProcessCard } from "./ProcessCard/ProcessCard"
import { process } from "../../models/models"

const Process = () => {
  return (
    <section className="container pt-[6.25rem] pb-20">
      <h3 className="mb-[3.125rem]">What's The Chinafy Process?</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        { process.map(item =>
          <ProcessCard key={ item.id } { ...item } />
        )}
      </div>
    </section>
  )
}

export { Process }