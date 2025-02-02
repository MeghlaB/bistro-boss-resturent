import React, { useContext } from 'react'

import UseAuth from '../../CustomHook/UseAuth'
import Swal from 'sweetalert2'
import UseAxiosPublic from '../../CustomHook/UseAxiosPublic'
import { useNavigate } from 'react-router-dom'



export default function Socaillogin() {
    const {GoogleLogin,setUser} = UseAuth()
  const navigate = useNavigate()
  const axiosPublic = UseAxiosPublic()
    const handleSocilaSIgnIn = ()=>{
        
        GoogleLogin()
        .then((result) => {
            const userInfo ={
                name:result?.user?.displayName,
                email:result?.user?.email,
                photo:result?.user?.photoURL
            }
            console.log(userInfo)
            axiosPublic.post('/users',userInfo)
            .then((res)=>{
                console.log(res.data)
                navigate('/')
            })
           
        })
        .catch((err) => {
            setUser(err.message)
        })
    }

  

    return (
        <div>
            {/* Divider */}
            <div className="my-8 flex items-center">
                <hr className="flex-1 border-gray-400" />
                <div className="mx-4 text-gray-400">OR</div>
                <hr className="flex-1 border-gray-400" />
            </div>
            {/* Social Login Buttons */}
            <div onClick={handleSocilaSIgnIn} className="flex justify-center space-x-4">
                <button aria-label="Log in with Google" className="rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}
