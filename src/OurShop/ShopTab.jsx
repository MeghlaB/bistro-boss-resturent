import React from 'react'
import FoodCart from '../Components/SectionTitle/FoodCart/FoodCart'

export default function ShopTab({ items }) {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                items.map((item) => <FoodCart key={item._id} items={item}></FoodCart>)
            }
        </div>
    )
}
