import React from 'react'
import { Button } from './ui/button'
import Card from './Card'

function Hero() {
  return (
    <div className=' max-w-screen h-screen'>
          {/*hero image  */}
      <div className='w-full h-[80vh] sm:h-full relative '>
        <div className='w-full h-full bg-black opacity-55 absolute to-5% z-1'></div>
        <img className='w-full h-full object-cover ' src="/hero.jpg" alt="" />
        <div className='absolute top-36 z-1 flex flex-col items-center w-full'>
          <h1 className='text-white font-bold tracking-tighter text-4xl p-4 text-center sm:text-3xl md:text-4xl lg:text-6xl md:p-9 md:w-3xl '>Timeless Fashion for the morden wordrobe</h1>
          <p className='text-white px-8 text-center text-sm md:w-3xl md:px-12 md:text-lg '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente dolorum fugiat repudiandae modi ad, nam ill </p>
          <Button className='rounded-full p-6 mt-5 md:p-6 md:mt-10'>EXPLORE THE COLLECTION</Button>
        </div>
      </div>
      {/* new arrivals */}
      <div className='flex flex-col justify-center md:justify-between md:flex-row md:items-center'>
        <div className='py-10'>
          <h1 className='text-center mt-10 font-bold text-4xl md:text-start px-10'>New Arrivals </h1>
          <p className='text-center py-1 px-8 md:text-start md:px-10 text-gray-600 font-normal'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptatem? </p>
        </div>
        <div className='text-center py-3 md:px-10'>
          <Button className=' rounded-full p-6'>SEE WAHT'S NEW</Button>
        </div>
      </div>
        {/* cards */}
        <Card/>
    </div>
  )
}

export default Hero