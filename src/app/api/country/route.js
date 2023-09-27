
import { NextResponse } from "next/server";

export async function POST(request){
    const {name,capital,region,flag} = await request.json();
    return NextResponse.json({message: "Received"},     {status:201});
}   