import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
// import './Landing.css';

const Landing = () => {
  return (
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className='landing-swiper-container'
        id='landing'
        tag='section'
        loop={true}
        autoplay={{disableOnInteraction: false}}
    >
      <SwiperSlide key={1} className='landing-swiper-component' ><img src={require("../data/images/beer1.jpg")} alt="error" /></SwiperSlide>
      <SwiperSlide key={2} className='landing-swiper-component' ><img src={require("../data/images/beer4.jpg")} alt="error" /></SwiperSlide>
      <SwiperSlide key={3} className='landing-swiper-component' ><img src={require("../data/images/beer5.jpg")} alt="error" /></SwiperSlide>
    </Swiper>
  )
}

export default Landing