import React, { useEffect, useState } from 'react'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
import MenuItem from '../Shared/MenuItem/MenuItem'
import useMenu from '../../CustomHook/UseMenu'



export default function PopularMenu() {
    const [menu] = useMenu()
    console.log(menu)

    const popularItem = menu.filter((item)=> item.category  === 'popular')


  return (
    <section className='mb-10'>
        <SectionTitle
        subHeadings={'Check it out'}
        headings={'FROM OUR MENU'}
        >
        </SectionTitle>
        <div className='grid md:grid-cols-2 gap-5'>
        {
            popularItem.map((item)=><MenuItem
            key={item._id}
            item={item}
            >
            </MenuItem>)
        }
        </div>
    </section>
  )
}
