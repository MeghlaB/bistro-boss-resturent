import React from 'react'
import UseAuth from '../../../CustomHook/UseAuth'
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom'

import UseAxiosSecuire from '../../../CustomHook/UseAxiosSecuire'

export default function FoodCart({ items }) {
  const { _id,image, name, price, recipe } = items
const {user} = UseAuth()
const navigate = useNavigate()
const location = useLocation()
const axiosSecure = UseAxiosSecuire()
  const handleFoodCart =(food)=>{

   
    if(user && user.email){
       // TODO: send card  item with database cartCollection
       console.log(user.email,food)
       const cartItem = {
        menuId: _id,
        email:user?.email,
        name,
        price,
        recipe

       }
       axiosSecure.post('/carts',cartItem)
       .then((res)=>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to cart Collection`,
            showConfirmButton: false,
            timer: 1500
          });
        }
       })
    }
    else{
      Swal.fire({
        title: "Please Logged User ?",
        text: "You won't be Log to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "yes ,LogIn!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state:{from: location.pathname}})
        }
      });
    }
  }




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
          <button onClick={()=>handleFoodCart(items)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-b-yellow-600 text-yellow-600">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
