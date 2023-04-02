import React from 'react'

const Section = ({title, subtitle, children}) => {
  return (
  <section className='flex flex-col items-center justify-start px-5 py-16 text-center min-h-fit' >
    <h3 className='py-3 text-4xl lg:text-5xl'>{title}</h3>
    <p className='max-w-xl mb-10 text-sm font-light text-gray-700'>{subtitle}</p>
    {children}
  </section>
  )
}

export default Section
