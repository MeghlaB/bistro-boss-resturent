import React from 'react'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
import featuredimg from '../../assets/home/featured.jpg'
 import './Featured.css'


export default function Featured() {
  return (

 <div className='featured-item bg-fixed  text-white pt-8 my-20
 '>
       <div >
        <SectionTitle
        subHeadings={'Check it Out'}
        headings={'FROM OUR MENU'}
        >
        </SectionTitle>
        <div className='md:flex pb-20 bg-slate-900 bg-opacity-40 pt-12 px-36 space-x-6'>
            <img className='w-[350px]' src={featuredimg} alt="" />
            <div>
                <p>March 20, 2023</p>
                <h3 className='uppercase '>WHERE CAN I GET SOME?</h3>
                <p className='w-[350px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <div>
            <button className="p-2 border-yellow-300 border-0 text-white border-b-4 rounded-lg btn btn-outline mt-3 ">Order Now</button>
            </div>
            </div>
            
        </div>
    </div>
 </div>
  )
}
