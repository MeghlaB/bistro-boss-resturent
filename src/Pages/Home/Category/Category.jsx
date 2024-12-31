import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css';
import { FreeMode, Pagination } from 'swiper/modules';



import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
// import slider6 from '../../../assets/home/slide6.jpg'



export default function Category() {
    return (
        <section>
            <SectionTitle
            subHeadings={'From 11:00am to 10:00pm'}
            headings={'ORDER ONLINE'}
            >
               
            </SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-16"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h3 className=' flex items-center justify-center -mt-20 -ml-28 text-4xl uppercase font-fontFamily  text-white/65 '>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className=' flex items-center justify-center -mt-20 -ml-28 text-4xl uppercase font-fontFamily  text-white/65 '>Pizzaz</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className=' flex items-center justify-center -mt-20 -ml-28 text-4xl uppercase font-fontFamily  text-white/65 '>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className=' flex items-center justify-center -mt-20 -ml-28 text-4xl uppercase font-fontFamily  text-white/65 '>Desart</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className=' flex items-center justify-center -mt-20 -ml-28 text-4xl uppercase font-fontFamily  text-white/65 '>Salads</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}
