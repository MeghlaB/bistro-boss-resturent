import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


export default function Testimonial() {

  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <section className='my-16'>
      <SectionTitle
        subHeadings={'What Our Client Say'}
        headings={'TESTIMONIALS'}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          reviews.map(review =>
            <SwiperSlide
              key={review._id}
            >
              <div className='px-20 text-center'>
                <div className='flex justify-center'>
                <Rating
                  style={{ maxWidth: 180  }}
                  className='text-center'
                  value={review.rating}
                  readOnly
                />
                </div>
                
                <p className='py-7'>{review.details}</p>
                <h3 className='text-2xl font-bold text-yellow-600 text-center'>{review.name}</h3>
              </div>

            </SwiperSlide>
          )
        }
      </Swiper>

    </section>
  )
}
