import DeliveryPerson from "@/components/DeliveryPerson";
import OwnerDashboard from "@/components/OwnerDashboard";
import UserDashboard from "@/components/UserDashboard";
import React, { useState } from "react";

function Home() {
  const  [role,setrole] = useState('user')
  return (
    // <div className="max-w-7xl min-h-screen " >
    <div className="max-w-7xl min-h-screen " >
      {
          role === 'user' && <UserDashboard />
      }
      {
        role === ' owner' && <OwnerDashboard /> 
      }
      {
        role === 'deliveryboy' && <DeliveryPerson />
      }
    </div>
  );
}

export default Home;
