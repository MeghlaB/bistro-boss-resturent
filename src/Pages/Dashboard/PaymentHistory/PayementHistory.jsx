import React from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import UseAuth from '../../../CustomHook/UseAuth'
import { useQuery } from '@tanstack/react-query'
import UseAxiosSecuire from '../../../CustomHook/UseAxiosSecuire'

export default function PayementHistory() {
    const { user } = UseAuth()
    const axiosSecure = UseAxiosSecuire()
    const { data: payment=[] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })
    return (
        <div>
            <SectionTitle subHeadings={'at a Genchil'} headings={'payment History'}></SectionTitle>
            <div>
            <h2 className="text3-xl">Total Payments: {payment.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>price</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payment.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>${payment.price}</td>
                            <td>{payment.transactionId}</td>
                            <td>{payment.status}</td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}
