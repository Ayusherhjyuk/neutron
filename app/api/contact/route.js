import connectDb from '@/app/db/connectDb';
import { NextResponse } from 'next/server';
import contactquery from '@/app/models/Contactquery';






export async function POST(req) {

     const { name,  phone, message } = await req.json();

      await connectDb();

    if (!name || !phone  || !message) {
      return new NextResponse(JSON.stringify({ message: "plz fill the field properly" }), { status: 422 });

    }
   
         const user= new contactquery({name, phone, message});

    await user.save();
    
    return new NextResponse(JSON.stringify({ message: "query submitted" }), { status: 200 });

    


  
    
    }