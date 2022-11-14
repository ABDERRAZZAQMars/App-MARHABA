import React, { Component } from 'react';
import 'flowbite';

function Home() {
  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: 'url(/assets/img/backgroundHome.jpg)' }}><div className="absolute bg-gradient-to-b from--500 to-green-400 opacity-75 inset-0 z-0"></div>
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div className="self-start hidden lg:flex flex-col  text-white">
              <img src="" className="mb-3"/>
                <h1 className="mb-3 font-bold text-5xl">Hi !</h1>
                <h2 className="mb-3 font-bold text-5xl">Welcome Back Marhaba </h2>
                <p className="pr-3">A home delivery service.
Customers will therefore be able to place an order directly from the application and pay before home delivery.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home