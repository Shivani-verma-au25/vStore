import React from 'react'
import { Card } from './ui/card'

function CategoryCard({text}) {
  return (
    // <div className
        <Card className="bg-white p-0 rounded-xl border-black shadow-sm hover:shadow-md transition duration-300 text-center font-medium text-lg relative mb-20 ">
            <img  className='h-56 lg:h-96  object-cover rounded-xl ' src="https://images.unsplash.com/photo-1724383986262-893dd74060a6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className=' flex justify-center items-center flex-col bg-white absolute -bottom-10 left-9 w-56 h-24 rounded-2xl md:left-15 lg:left-36 lg:w-72'>
                <h1 className='font-bold text-xl'>{text}</h1>
                <p className='text-md text-red-500 font-semibold'>Shop now</p>
            </div>
        </Card>
    // </div>
  )
}

export default CategoryCard