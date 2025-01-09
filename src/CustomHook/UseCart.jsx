import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAxiosSecuire from './UseAxiosSecuire'
import UseAuth from './UseAuth'

export default function UseCart() {
    const axiosSecure = UseAxiosSecuire()
    const {user} = UseAuth()

    const {refetch,data: cart=[]} = useQuery({
        queryKey:['cart',user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data
        }
    })
    return[cart,refetch]

}
