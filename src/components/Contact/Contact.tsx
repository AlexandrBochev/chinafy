import background from '../../assets/contact/contact-bg.jpg'
import share from '../../assets/contact/share.svg'
import face from '../../assets/contact/face.jpg'
import { Input } from './Input/Input'

const Contact = () => {
  return (
    <section className="relative pt-[3.125rem] pb-[10.625rem] md:pt-[6.25rem]" id='Contact'>
      <img src={ background } alt="Background" className="absolute top-0 left-0 w-full h-full object-cover -z-30" />
      <div className="relative container mx-auto">

        {/* Heading */}
        <div className="absolute top-0 hidden xl:flex items-start text-left text-[1.25rem]">
          <img src={ share } alt="Share Icon" />
          <div className="flex items-center">
            <img src={ face } alt="Face Icon" className="rounded-full mx-3" />
            <p>Have a<br />question?</p>
          </div>
        </div>
        <div className="w-[16.6rem] md:w-[40rem] mb-10 md:mb-12 mx-auto">
          <div className="relative mb-8 mx-auto">
            <span className="absolute bottom-0 right-7 h-9 w-32 md:h-16 md:w-[10.4rem] md:right-[13rem] bg-lilac rounded-lg -z-10" />
            <span className="absolute bottom-0 right-5 h-9 w-10 md:h-16 md:right-[12rem] bg-yellow rounded-lg -z-20" />
            <h1 className="text-[1.875rem] md:text-[3.5rem]">Make Your Website Work in China</h1>
          </div>
          <div className="max-w-[33rem] mx-auto">
            <p>Enter in a few details and one of our Chinafy team members will reach out to you shortly with a plan and next steps to 'Go Live' in China.</p>
          </div>
        </div>
        
        {/* Form */}
        <div className="max-w-[67.5rem] rounded-[1.875rem] bg-white py-10 px-5 lg:p-14 text-left mx-auto">
          <form>
            <Input type="text" label="Hi! I am" placeholder="Ignacio Cerro" />
            <Input type="email" label="My work email address is" placeholder="Ignaciocerro@gmail.com" />
            <Input type="text" label="My company role can be described as" placeholder="Engineer/Site Reliability" />
            <Input type="text" label="I want to Chinafy my website" placeholder="www.website.com" />
          </form>
        </div>
      </div>
    </section>
  )
}

export { Contact }