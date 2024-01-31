import { connectDB } from "@/lib/connectDB";
import { Contact } from "@/models/contacts";
import { NextResponse, type NextRequest } from "next/server";
// import mongoose from 'mongoose';

export async function GET(req: NextRequest) {
  console.log("TEST)))))))))()((((");
  // const requestHeaders = new Headers(req.headers)
  // console.log("handler  headers::::::::::::::::", requestHeaders.get('cache-control'));

  const url = req.url;

  //   const newContact = {
  //     name: "Petr",
  //     age: 21,
  //   };

  //   const contact = await Contact.create(newContact);
  //   console.log("GET  contact:", contact);

  connectDB()
  const contasts = await Contact.find()

  return NextResponse.json({ contasts: contasts });
}
