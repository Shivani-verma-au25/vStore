import HeroCards from '@/components/HeroCards'
import React from 'react'

function Shop() {
  const no = [1,2,3,4,5,7,8,9]
  return (
    <div className='max-w-6xl mx-auto ' >
        <h1 className='text-3xl font-bold py-6 px-3'>Shop</h1>
        <hr className='border-gray-200 border-b-1 mx-3' />
        {/* card */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 px-2'>
          {
            no.map((pro,indx) => (
              <HeroCards />
            )) 
          }
        </div>

    </div>
  )
}

export default Shop