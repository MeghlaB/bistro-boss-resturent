import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    const naviOptions = <>
    <NavLink>Home</NavLink>
    <NavLink>Contact Us</NavLink>
    <NavLink>DashBoard</NavLink>
    <NavLink to={'/menu'}>Our Menu</NavLink>
    <NavLink to={'/shop'}>Our Shop</NavLink>
    <NavLink to={'/login'}>Login</NavLink>
    </>


    return (
        <div>
            <div className="navbar fixed z-10 max-w-screen-xl bg-slate-900 bg-opacity-40 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            
                            {naviOptions}
                        </ul>
                    </div>
                    <div className="text-center">
                        <h1 className="text-lg font-bold ">BISTRO BOSS</h1>
                        <p className="text-lg tracking-wide ">Restaurant</p>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  gap-5">
                      {naviOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                <NavLink to={'/login'}>Login</NavLink>
                </div>
            </div>
        </div>
    )
}