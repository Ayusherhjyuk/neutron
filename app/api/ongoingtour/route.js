import { NextResponse } from "next/server";
import connectDb from "@/app/db/connectDb";
import Ongoingtour from "@/app/models/Ongoingtour";


export const GET = async (request)=> {
 try {
    await  connectDb();
    const tours= await Ongoingtour.find();
    return new NextResponse(JSON.stringify(tours),{ status: 200});

 } catch (error) {
    return new NextResponse("error in fetching users" + error,{status: 500});
 }
} 