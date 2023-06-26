"use client";
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Slider() {
    return (
      <Splide
        options={{
          // Specify your Splide.js options here
        }}
      >
        <SplideSlide>
          <img src="/pexels-brigita-korsakiene-7752204.jpg" alt="Image 1"  className='h-20 object-cover overflow-hidden'/ >
        </SplideSlide>
        <SplideSlide>
          <img src="/pexels-elizaveta-mitenkova-15947013.jpg" alt="Image 2"  className='h-20 object-cover overflow-hidden' />
        </SplideSlide>
       
      </Splide>
    );
  }

export default Slider