"use client";
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Slider() {
    return (
      <div>
      <Splide
      options={{
        type: 'loop',
        autoplay: true,
        interval: 2000, 
        arrows: false,
      }}
      >
        <SplideSlide>
          <img src="/pexels-brigita-korsakiene-7752204.jpg" alt="Image 1"  className='w-full h-[400px] object-cover overflow-hidden'/ >
        </SplideSlide>
        <SplideSlide>
          <img src="/pexels-elizaveta-mitenkova-15947013.jpg" alt="Image 2"  className='w-full h-[400px] object-cover overflow-hidden' />
        </SplideSlide>
        <SplideSlide>
          <img src="/pexels-enes-çelik-7748484.jpg" alt="Image 2"  className='w-full h-[400px] object-cover overflow-hidden' />
        </SplideSlide>
       
      </Splide>
      </div>
    );
  }

export default Slider