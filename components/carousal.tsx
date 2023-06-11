'use client'
import React, { useState } from "react"
import gsap from "gsap"

export default function carousal() {
  let ctx=gsap.context()
  const sliderImageRef = React.useRef(null);
  
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliders = [
    {
      url: '/next.svg'
    },
    {
      url: '/vercel.svg'
    },
    {
      url: '/next.svg'
    },
    {
      url: '/vercel.svg'
    }
  ]

  React.useEffect(() =>{

    setTimeout(() => {
      gsap.to(sliderImageRef.current, {opacity: 0, duration: 1, delay: 3})
    },3000)
    setTimeout(() => {
      setSliderIndex((sliderIndex+1)%4);
      gsap.to(sliderImageRef.current, {opacity: 1, duration: 3})
    },7000)
  })
  return (
    <div>
      <img ref={sliderImageRef} src={sliders[sliderIndex].url} alt="" className="ease-in-out"/>
    </div>
  )
}
