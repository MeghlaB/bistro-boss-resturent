import React from 'react'

export default function MenuItem({item}) {
    const {image,price,name,recipe} = item
  return (
    <div className='flex space-x-5'>
      <img style={{ borderRadius: '0px 200px 200px 200px' }} className='w-[118px]' src={image} alt="" />
      <div>
        <p className='uppercase text-xl font-bold'>{name}-----------</p>
        <h3 className=''>{recipe}</h3>
      </div>
      <div>
        <p className='text-yellow-500'>${price}</p>
      </div>
    </div>
  )
}
