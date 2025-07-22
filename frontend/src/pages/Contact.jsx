import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function Contact() {
  return (
    <div className='max-w-6xl  mx-auto py-10'>
      <div className='text-center px-5 py-10 bg-gray-50'>
        <h1 className='text-4xl font-bold py-2'>Contact Us</h1>
        <p className='font-normal text-md md:max-w-2xl md:mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores assumenda ratione cum incidunt quasi necessitatibus beatae quidem velit sint nemo?</p>
      </div>
      <div className='flex gap-2 flex-col px-4 mt-20 md:flex-row ' >
        <div className='w-full h-1/2 border rounded-sm bg-gray-50 '> 
          <h2 className='px-4 text-2xl font-semibold py-5'>Send message</h2>
          <form className=''>
            <div className='py-4 p-3'>
              <Input
              type='text'
              placeholder='Name*'
              name='name'
              className='text-md '
            />
            </div>
            <div className='py-4 p-3'>
              <Input
              type='email'
              placeholder='Email*'
              name='email'
              className='text-md '
            />
            </div>
            <div className='py-4 p-3'>
              <Textarea
              type='text'
              placeholder='Type your message here.'
              name='message'
              
              className='text-md  '
            />
            </div>
            <div className='px-3 py-5'><Button variant={'destructive'} className='p-5 cursor-pointer' >Send</Button></div>
          </form>
        </div>
        <div className='w-full h-1/2 bg-amber-900 rounded-sm'> hello2</div>
      </div>
    </div>
  )
}

export default Contact