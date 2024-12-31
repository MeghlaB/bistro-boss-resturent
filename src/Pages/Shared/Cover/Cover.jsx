import React from 'react'
import { Parallax } from 'react-parallax';

export default function Cover({img,title}) {
  return (
    <Parallax
    blur={{ min: -50, max: 50 }}
    bgImage={img}
    bgImageAlt="the dog"
    strength={-200}
>
<div
    className="hero h-[800px]"
    style={{
      backgroundImage: `url('${img}')`,
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content  bg-slate-900 px-96 py-20 bg-opacity-40 text-neutral-content text-center">
      <div className="max-w-md ">
        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
        <p className="mb-5">
        Would you like to try a dish?
        </p>
   
      </div>
    </div>
  </div>
</Parallax>
   
  )
}
