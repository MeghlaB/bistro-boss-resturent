import React from 'react'

export default function FoodCart({items}) {
    const{image,name,price,recipe} = items
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  {/* <figure>
    <img
      src={image}
      alt={name} />
  </figure> */}
   <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
            <div className="absolute left-4 right-4 top-4 flex items-center justify-end">

                <button className="rounded-xl bg-black px-3 py-1 font-medium text-white duration-200 ">${price}</button>
            </div>
            <img width={400} height={400} className="rounded-lg bg-black/40 object-cover" src={image} alt="card navigate ui" />
        </div>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-b-yellow-600 text-yellow-600">Add to Cart</button>
    </div>
  </div>
</div>
  )
}
