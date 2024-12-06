import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex bg-[#020012]">
      <section className=' p-10 hidden w-1/2 lg:flex  justify-center items-center  '>
        <div className='flex max-w-[800px]  flex-col justify-center space-y-12'>
          <img 
            src="/images/logo.png"
            alt="Logo"
            width={224}
            height={82}
            className="mb-20"
          />

          <div className='space-y-4 max-w-[400px]'>
            <h1 className='text-[52px] leading-[60px] font-bold text-white'>
              The Best way to build your Portfolio
            </h1>
            <p className='text-lg text-white/80'>
              Awesome, we've created the perfect place for you to get the Portfolio done by adding your resume
            </p>
          </div>
          {/* <img 
            src="/images/illustration.png"
            alt="Logo"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105"
          /> */}
        </div>
        
      </section> 

      <section className="flex-1 flex flex-col items-center p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className='mb-16 lg:hidden'>

        </div>
        <Outlet />
      </section>
    </div>
  )
}

export default AuthLayout
