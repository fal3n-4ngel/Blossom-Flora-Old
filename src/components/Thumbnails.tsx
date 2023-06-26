import React, { ReactNode, useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Options } from '@splidejs/splide';

interface Slide {
  src: string;
  alt: string;
}

function Thumbnails(): ReactNode {
  const mainRef = useRef<Splide | null>(null);
  const thumbsRef = useRef<Splide | null>(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const generateSlides = (): Slide[] => {
    // Generate slides data
    // Replace this with your own logic to generate the slides
    return [
      { src: '/pexels-brigita-korsakiene-7752204.jpg', alt: 'Slide 1' },
      { src: '/pexels-elizaveta-mitenkova-15947013.jpg', alt: 'Slide 2' },
      { src: '/pexels-enes-çelik-7748484.jpg', alt: 'Slide 3' },
      // Add more slides
    ];
  };

  const renderSlides = (): ReactNode[] => {
    const slides = generateSlides();
    return slides.map((slide) => (
      <SplideSlide key={slide.src}>
        <img src={slide.src} alt={slide.alt} className='w-full h-full object-cover overflow-hidden' />
      </SplideSlide>
    ));
  };

  const mainOptions: Options = {
    type: 'loop',
    autoplay: true,
    interval: 3000,
    perPage: 1,
    perMove: 1,
    gap: '1rem',
    pagination: false,
    height:'30rem',
    width:'40rem',
    arrows:false
  };

  const thumbsOptions: Options = {
    type: 'slide',
    rewind: true,
    gap: '1rem',
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: 'center',
    isNavigation: true,
    arrows:false
  };

  return (
    <div className="wrapper">
      <Splide
        options={mainOptions}
        ref={mainRef}
       
      >
        {renderSlides()}
      </Splide>

      <Splide
        options={thumbsOptions}
        ref={thumbsRef}
        className='mt-5'
       
      >
        {renderSlides()}
      </Splide>
    </div>
  );
}

export default Thumbnails;
