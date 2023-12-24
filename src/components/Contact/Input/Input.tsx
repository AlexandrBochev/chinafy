interface InputProps {
  type: string;
  label: string;
  placeholder: string;
}

const Input = ({ type, label, placeholder }: InputProps) => {
  return (
    <div className="flex flex-wrap mb-6 lg:mb-10">
      <label htmlFor="name" className="text-2xl lg:text-4xl font-medium mr-4">{ label }</label>
      <div className="flex items-end">
        <input type={ type } name="name" placeholder={ placeholder } className="min-w-[14.2rem] border-b border-gray placeholder:text-black lg:placeholder:text-xl pb-[1px]" required />
        <label htmlFor="name" className="text-2xl lg:text-4xl font-medium ml-4">.</label>
      </div>
    </div>
  )
}

export { Input }