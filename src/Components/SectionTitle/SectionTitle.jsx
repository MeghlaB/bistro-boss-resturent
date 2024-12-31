import React from 'react'

export default function SectionTitle({headings,subHeadings}) {
  return (
    <div className='md:w-4/12 mx-auto text-center'>
      <p className='text-yellow-600 py-2 '> --- {subHeadings} --- </p>
      <h3 className='text-3xl uppercase font-bold border-y-4 py-4 mb-10'>{headings}</h3>
    </div>
  )
}
