'use client'
import React, { useState } from "react"
import gsap from "gsap"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousal() {
  return (
    <div className="flex h-[30vh] object-contain" >
      <Swiper
                pagination={{
                  clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,

              }}
              navigation={true}
              
              
            >
                <SwiperSlide>
                    <img
                        className="object-contain "
                        src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                          className="object-contain w-full "
                        src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                          className="object-contain w-full "
                        src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
    </div>
  )
}
