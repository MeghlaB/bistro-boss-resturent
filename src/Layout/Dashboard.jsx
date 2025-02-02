import React from 'react'
import { FaAd, FaAlignJustify, FaBookDead, FaCalendar, FaGrinBeam, FaHome, FaList, FaMoneyBillWaveAlt, FaRegUser, FaShoppingBag, FaShoppingCart, FaUser, FaUtensils } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa6'
import { NavLink, Outlet } from 'react-router-dom'
import userAdmin from '../CustomHook/UserAdmin'

export default function Dashboard() {

    // TODO: get isAdmon value of databasae
    const [isAdmin] =userAdmin()


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* Page content here */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side m-6">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-orange-400 text-white-content text-black min-h-full w-80 p-4 gap-4">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                        <li><NavLink to={'/dashboard/adminHome'}>
                                <FaHome></FaHome>
                                Admin Home</NavLink></li>
                            <li><NavLink to={'/dashboard/additems'}>
                                <FaUtensils></FaUtensils>
                                Add Items</NavLink></li>
                            <li><NavLink to={'/dashboard/mangeitems'}>
                                <FaList></FaList>
                                Manage Items</NavLink></li>
                            <li><NavLink to={'/dashboard/manageBookings'}>
                                <FaBookDead></FaBookDead>
                               Manage Bookings </NavLink></li>
                            <li><NavLink to={'/dashboard/allusers'}>
                                <FaUser></FaUser>
                                All Users</NavLink></li>
                        
                        </> : <>
                            <li><NavLink to={'/dashboard/user'}>
                                <FaHome></FaHome>
                                User Home</NavLink></li>
                            <li><NavLink to={'/dashboard/reservation'}>
                                <FaCalendar></FaCalendar>
                                Reservation</NavLink></li>
                            <li><NavLink to={'/dashboard/payment'}>
                                <FaMoneyBillWaveAlt></FaMoneyBillWaveAlt>
                                Payment History</NavLink></li>
                            <li><NavLink to={'/dashboard/cart'}>
                                <FaShoppingCart></FaShoppingCart>
                                My Cart</NavLink></li>
                            <li><NavLink to={'/dashboard/review'}>
                                <FaAd></FaAd>
                                Add Review</NavLink></li>
                            <li><NavLink to={'/dashboard/booking'}>
                                <FaBookDead></FaBookDead>
                                My Bookings</NavLink></li>
                        </>
                    }
                    {/* Shared navbar */}
                    <div className="divider">OR</div>
                    <li><NavLink to={'/'}>
                        <FaHome></FaHome>
                        Home</NavLink></li>
                    <li>
                        <NavLink to={'/menu'}>  <FaAlignJustify /> Our Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/shop/salad'}>  <FaShoppingBag /> Our Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/shop/contact'}>
                            <FaEnvelope>  </FaEnvelope>
                            Contact
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    )
}
