import React from 'react'
import { Link, Navigate } from 'react-router-dom'


const ProfileManager = () => {
    const logout = () => {
        localStorage.clear()
    }
    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="#" className="flex items-center">
                        <img src='/assets/img/logoMarhaba.png' className="mr-3 h-6 sm:h-9" alt="Marhaba Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MARHABA</span>
                    </Link>
                    <div className="flex items-center md:order-2">
                        <Link logout onClick={logout} to="/" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                            logout
                        </Link>
                        <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            </nav>
            <div className="w-full flex flex-col justify-center items-center bg-[#1A2238] text-white" style={{ minHeight: "685px" }}>
                ProfileManager
            </div>
        </div>
    )
}

export default ProfileManager