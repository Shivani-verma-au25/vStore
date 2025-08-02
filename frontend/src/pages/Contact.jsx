import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Mail,
  Phone,
  Heart,
  Instagram,
  Linkedin,
  X,
  MapPin,
} from 'lucide-react';
import React from 'react';

function Contact() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-md text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about features,
          pricing, or anything else, our team is ready to answer all your questions.
        </p>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Contact Form */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h2>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name*" name="name" />
            <Input type="email" placeholder="Your Email*" name="email" />
            <Textarea placeholder="Type your message here..." name="message" rows={5} />
            <Button variant="default" className="w-full">Send Message</Button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="bg-gray-50 shadow-md rounded-xl p-6 flex flex-col gap-6 justify-center">
          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <Mail className="text-red-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-sm text-gray-600">contact@info.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <Phone className="text-red-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-sm text-gray-600">+91-999-999-999</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <MapPin className="text-red-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-sm text-gray-600">XYZ, Lucknow, UP</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <Heart className="text-red-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex gap-3 mt-2 text-gray-700">
                <Instagram className="cursor-pointer hover:text-pink-500" />
                <Linkedin className="cursor-pointer hover:text-blue-600" />
                <X className="cursor-pointer hover:text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
