//import React, { Component } from 'react';
import React from 'react'
import {Link} from 'react-router-dom'
import 'flowbite';

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-white" style={{ backgroundColor: `#0a4275`}}>
        <div className="container p-6">
          <div className="">
            <p className="flex justify-center items-center">
              <span className="mr-4">Register for free</span>
              <Link to="register" type="button" className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                Sign up!
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center p-4" style={{ backgroundColor: `rgba(0, 0, 0, 0.2)`}}>
          © 2022 ABDERRAZZAQ Mars : 
          <a className="text-white"> JavaScripters</a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
