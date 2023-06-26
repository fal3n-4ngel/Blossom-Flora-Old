"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousal() {
  return (
    <div>
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
            style={{ objectFit: "cover", width: "100%", height: "45vh" }}
            src="/pexels-brigita-korsakiene-7752204.jpg"
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ objectFit: "cover", width: "100%", height: "45vh" }}
            src="/pexels-elizaveta-mitenkova-15947013.jpg"
            alt="image slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ objectFit: "cover", width: "100%", height: "45vh" }}
            src="/pexels-enes-çelik-7748484.jpg"
            alt="image slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
