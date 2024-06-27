import { NextResponse } from "next/server";
import connectDb from "@/app/db/connectDb";
import notification from "@/app/models/notification";


export const GET = async (request)=> {
 try {
    await  connectDb();
    const tours= await notification.find();
    return new NextResponse(JSON.stringify(tours),{ status: 200});

 } catch (error) {
    return new NextResponse("error in fetching users" + error,{status: 500});
 }
} 