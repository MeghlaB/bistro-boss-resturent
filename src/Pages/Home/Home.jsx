import React from 'react'
import Banner from './Bannar/Banner'
import Category from './Category/Category'
import PopularMenu from '../PopularMenu/PopularMenu'
import Featured from '../Featured/Featured'
import Testimonial from './Bannar/Testimonial/Testimonial'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <div>
       <Helmet>
        <title>Bistro | Home</title>
        
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  )
}
