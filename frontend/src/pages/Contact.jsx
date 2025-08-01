import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Heart, Instagram, Linkedin, LocationEdit, Mail, Phone, X } from 'lucide-react'
import React from 'react'

function Contact() {
  const  icons = {

  }
  return (
    <div className='max-w-6xl  mx-auto py-10'>
      <div className='text-center px-5 py-10 bg-gray-50'>
        <h1 className='text-4xl font-bold py-2'>Contact Us</h1>
        <p className='font-normal text-md md:max-w-2xl md:mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores assumenda ratione cum incidunt quasi necessitatibus beatae quidem velit sint nemo?</p>
      </div>
      <div className='flex gap-5 flex-col px-4 mt-20 md:flex-row  py-3' >
        {/* left */}
        <div className='w-full h-1/2 border rounded-sm bg-gray-100 '> 
          <h2 className='px-4 text-2xl font-bold py-5'>Send message</h2>
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

        {/* right */}
        <div className='w-full h-1/2 rounded-sm bg-gray-100 flex flex-col items-center gap-5'> 
          {/*icons  */}
          <div  className='flex flex-col items-center justify-center md:flex  md:flex-row gap-3 py-3' >
            <div className='size-15 bg-white rounded-full flex justify-center items-center'>
              <Mail className='text-red-500 ' />
            </div>
            <div>
              <h2 className='font-bold text-xl'>Email</h2>
              <p className='text-md text-gray-600 py-2'>contact@info.com</p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center md:flex  md:flex-row gap-3 py-3' >
            <div className='size-15 bg-white rounded-full flex justify-center items-center'>
              <Phone className='text-red-500'  />
            </div>
            <div>
              <h2 className='font-bold text-xl'>Phone</h2>
            <p className='text-md text-gray-600 py-2'>999-999-999</p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center md:flex  md:flex-row gap-3 py-3' >
            <div className='size-15 bg-white rounded-full flex justify-center items-center' >
              <LocationEdit className='text-red-500'  />
            </div>
            <div>
              <h2 className='font-bold text-xl'>Address</h2>
            <p className='text-md text-gray-600 py-2'>xyz lko,up</p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center md:flex  md:flex-row gap-3 py-3' >
            <div className='size-15 bg-white rounded-full flex justify-center items-center '>
              <Heart className='text-red-500'  />
            </div>
            <div>
              <h2 className='font-bold text-xl'>Follow us</h2>
            <div className='flex justify-center items-center gap-3 py-3'>
              <span  className='size-6' ><Instagram /></span>
              <span className='size-6' ><Linkedin /></span>
              <span className='size-6' ><X /></span>
            </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Contact