import { motion as m } from 'framer-motion'

const Start = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none z-30">
      <m.div
        animate={{ opacity: [1, 1, 1, 0, 0] }}
        transition={{ duration: 6 }}
        className="absolute top-0 left-0 w-full h-screen bg-black -z-10"
      />

      <div className="absolute top-0 left-0 flex flex-col lg:flex-row w-full h-screen items-center justify-center z-50">  
        <m.div
          animate={{
            width: ['0vw', '30vw', '100vw', '100vw', '150vw'],
            height: ['0vw', '30vw', '100vw', '100vw', '150vw'],
            transform: ['translateY(0vw)', 'translateY(0vw)', 'translateY(0vw)', 'translateY(200%)'],
            opacity: [1, 1, 1, 1, 0.5]
          }}
          transition={{ duration: 6 }}
          className="w-full h-full flex items-start justify-start bg-white p-4 text-[1.25rem] font-medium"
        >
          <p>Fast-Track</p>
        </m.div>

        <m.div
          animate={{
            width: ['0vw', '30vw', '100vw', '100vw', '150vw'],
            height: ['0vw', '30vw', '100vw', '100vw', '150vw'],
            transform: ['translateY(0)', 'translateY(0)', 'translateY(0)', 'translateY(-200%)'],
            opacity: [1, 1, 1, 1, 0.5]
          }}
          transition={{ duration: 6 }}
          className="w-full h-full flex items-end justify-end bg-lilac p-4 text-[1.25rem] font-medium"
        >
          <p>Secure Reality</p>
        </m.div>       
      </div>
      
      <m.div
        animate={{ opacity: [1, 1, 1, 0, 0] }}
        transition={{ duration: 6 }}
        className="absolute top-0 left-0 w-full h-screen flex flex-col lg:flex-row p-20 lg:p-9 items-center lg:items-end justify-between"
      >
        <p className="text-[3.75rem] font-medium text-white leading-none">Loading</p>
        <p className="text-[3.75rem] font-medium text-white leading-none">Dreams</p>
      </m.div>
    </div>
  )
}

export { Start }