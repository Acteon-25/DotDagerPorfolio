import React from 'react'

function SectionContainer({ children, className }) {
  return (
    <section className={`${className} container mx-auto px-4`}>
      {children}
    </section>
  )
}

export default SectionContainer