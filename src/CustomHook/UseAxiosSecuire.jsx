import axios from 'axios'
import React from 'react'

export const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})

export default function UseAxiosSecuire() {
    return axiosSecure
  
}
