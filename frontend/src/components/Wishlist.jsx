import React from 'react'
import HeroCards from './HeroCards'

function Wishlist() {
  const no = [1,2,3,4,5]
  return (
    <div className='bg-red-700 max-w-6xl mx-auto'>
      <h1>Your Wishlist</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 px-2'>
          {
            no.map((pro,indx) => (
              <HeroCards key={indx} item={pro}/>
            )) 
          }
        </div>
    </div>
  )
}

export default Wishlist