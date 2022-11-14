import React, { Component } from 'react';
import 'flowbite';
import { Link } from 'react-router-dom'


function ResetPassword () {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                {/* <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Brand</h2> */}
                <Link to="/" className="text-4xl font-bold text-center">
                  <img src='./assets/img/LogoLogin.png' alt="Marhaba Logo" />
                </Link>
                <p className="mt-3 text-gray-500 dark:text-gray-300">Reset password to access your account</p>
              </div>

              <div className="mt-8">
                <form>
                  <div>
                    <input type="password" name="password" id="password" placeholder="Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <input type="confirm" name="confirm" id="confirm" placeholder="Confirm Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div className="mt-6">
                    <button
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform  hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50" style={{ backgroundColor: '#0a4275' }}>
                      ResetPassword
                    </button>
                  </div>
                </form>
                <p className="mt-6 text-sm text-center text-gray-400">Access your account <Link to="/login" className="text-blue-500 focus:outline-none focus:underline hover:underline">Login</Link>.</p>
              </div>
            </div>
          </div>
          <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: 'url(/assets/img/backgroundReset.jpg)' }}>
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            {/* <div>
              <h2 className="text-4xl font-bold text-white">RESET YOUR PASSWORD</h2>
              <p className="max-w-xl mt-3 text-gray-300">Enter your email address so we can send you a link to reset your password.</p>
            </div> */}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword 