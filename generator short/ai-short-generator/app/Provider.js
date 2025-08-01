"use client"
import { db } from '@/configs/db';
import { users } from '@/configs/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'

function Provider({children}) {
  const user=useUser();
  useEffect(()=>{user&&isNewUser ()},[user]);
  const isNewUser = async () => {
    if (!user) return;
  
    const result = await db.select().from(users)
      .where(eq(users.email, user?.primaryEmailAddress?.emailAddress)); // Corrected property name
  
    console.log(user); // Log user object to see actual values
  
    if (!result[0]) {
      // Check if required fields are defined before inserting
      if (user?.fullName && user?.primaryEmailAddress?.emailAddress && user?.imageUrl) {
        await db.insert(users).values({
          name: user.fullName, // Corrected property name
          email: user.primaryEmailAddress.emailAddress, // Corrected property name
          imageUrl: user.imageUrl,
        });
      } else {
        console.error("Missing required user data for insertion:", user);
      }
    }
  };
  
   

    return (
    <div>
      {children}
    </div>
  )
}

export default Provider