import React from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import UseCart from '../../../CustomHook/UseCart'

export default function Cart() {
    const [cart] = UseCart()
    console.log(cart)
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div>
            <div>
                <SectionTitle
                    subHeadings={'My Cart'}
                    headings={'WANNA ADD MORE?'}
                >
                </SectionTitle>

                <div className="overflow-x-auto">
                    <div className='px-10 flex justify-around'>
                        <h3 className='text-xl font-bold'>Total Oders:{cart.length}</h3>
                        <h3 className='text-xl font-bold'>Total Price:{totalPrice}</h3>
                        <button className="btn btn-warning">pay</button>

                    </div>
                    <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                        <thead>
                            <tr className="bg-[#0095FF] text-white">
                                <th className="py-4 px-6 text-lg text-left border-b">Item Image</th>
                                <th className="py-4 px-6 text-lg text-left border-b">Item Name</th>
                                <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                                <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item) => 
                                    <tr key={item._id} className="hover:bg-gray-50 border-b transition duration-300">
                                        
                                        <td className="py-4 px-4 flex justify-start">
                                            <img src={item.image} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                                        </td>
                                        <td className="py-4 px-6 border-b text-xl font-medium">{item.name}</td>
                                        <td className="py-4 px-6 border-b text-lg font-medium">{item.price}</td>
                                        <td className="py-4 px-6 border-b text-end">
                                            <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
