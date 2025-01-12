import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecuire from '../../../CustomHook/UseAxiosSecuire';
import UseMenu from '../../../CustomHook/UseMenu';

export default function ManageItem() {
    const [menu, ,refetch] = UseMenu();  
    const axiosSecure = UseAxiosSecuire();

    const handleMenuDelete = async (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/menu/${item._id}`);
                    console.log(res.data);
                    if (res.data.deletedCount > 0) { 
                        refetch();  
                        Swal.fire({
                            title: "Deleted!",
                            text: `${item.name} has been deleted.`,
                            icon: "success"
                        });
                    }
                } catch (error) {
                    console.error('Error deleting the item:', error);
                    Swal.fire({
                        title: "Error!",
                        text: "There was a problem deleting the item.",
                        icon: "error"
                    });
                }
            }
        });
    };

    return (
        <div>
            <SectionTitle subHeadings={'Hurry Up'} headings={'Manage All Items'} />
            <div>
                <h1 className="text-2xl font-bold">Total Items: {menu.length}</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 bg-white shadow-lg">
                    <thead>
                        <tr className="h-[70px] border-b bg-[#141B29] text-[#FFFFFF]">
                            <th className="w-[50px] px-6 py-4 text-start">#</th>
                            <th className="px-6 py-4 text-start">Item Image</th>
                            <th className="px-6 py-4 text-start">Item Name</th>
                            <th className="px-6 py-4 text-start">Price</th>
                            <th className="px-6 py-4 text-start">Update</th>
                            <th className="px-6 py-4 text-start">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) => (
                            <tr key={item._id} className="h-[70px] border-b bg-[#484D58] text-[#FFFFFF]">
                                <td className="px-6 py-4 text-start">{index + 1}</td>
                                <td className="px-6 py-4 text-start">
                                    <img
                                        className="h-[44px] w-[44px] rounded-full bg-slate-500 object-cover"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </td>
                                <td className="px-6 py-4 text-start">{item.name}</td>
                                <td className="px-6 py-4 text-start">${item.price}</td>
                                <td className="px-6 py-4 text-start">
                                    <button className="btn btn-sm btn-ghost bg-orange-500">
                                        <FaEdit className="text-white text-xl" />
                                    </button>
                                </td>
                                <td className="px-6 py-4 text-start">
                                    <button
                                        onClick={() => handleMenuDelete(item)}
                                        className="flex items-center rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="mr-2 h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
