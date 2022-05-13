import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation} from 'swiper'
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

export default function Carrusel() {
  return (
   <>
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      breakpoints={{
          320: {
              slidesPerView: 1,
              spaceBetween: 10
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10
        }, 
        720: {
            slidesPerView: 3,
            spaceBetween: 10
        },
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      
    >
      <SwiperSlide> <img className="w-96" src="https://appletoolbox.com/wp-content/uploads/2021/12/MacBook-Pro-2021-iPad-Mini-iPhone-13-Pro-AirPods-3-Beats-Fit-Pro-iPad-Pro-Best-Apple-Products-3-scaled.jpg" alt="sdfa"/></SwiperSlide>
      <SwiperSlide><img  className="w-96" src="https://www.thecoldwire.com/wp-content/uploads/2021/06/Flat-lay-composition-with-Apple-MacBook-Air-Silver-iPad-mini-4-and-iPhone-6s-on-wooden-background.jpg" alt="img" /></SwiperSlide>
      <SwiperSlide><img className="w-96" src="https://upscalelivingmag.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2021/06/macbook-pro-and-iphone-apple-products.jpg" alt="fsdf " /></SwiperSlide>
      <SwiperSlide><img className="w-96" src="https://www.yankodesign.com/images/design_news/2021/08/auto-draft/apple_concepts_iphone_one_03.jpg" alt="vcb" /></SwiperSlide>
      
    </Swiper>
   </>
  )
}
