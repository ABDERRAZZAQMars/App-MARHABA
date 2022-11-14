import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div >
            <Navbar />
            <div style={{ minHeight: "546px" }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout