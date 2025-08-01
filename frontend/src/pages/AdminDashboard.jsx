import SideBar from '@/components/SideBar'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Menu } from 'lucide-react';
import CreateProduct from './CreateProduct';
import AdminSidebar from './AdminSidebar';

function AdminDashboard() {

  return (
   <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row bg-[#0f111a] text-white relative mb-20">
      
      {/* Mobile Menu Toggle */}
      <AdminSidebar/>
      {/* Main Content */}
      <div>
        <Outlet />
      </div>
      {/* <CreateProduct /> */}
    </div>
  );
};
  

export default AdminDashboard;