import { NextResponse, type NextRequest } from "next/server";
import { connectDB } from "../../../lib/connectDB";
import { Contact } from "../../../models/contacts";

export async function GET(req: NextRequest) {
  //   const newContact = {
  //     name: "Petr",
  //     age: 21,
  //   };

  //   const contact = await Contact.create(newContact);
  //   console.log("GET  contact:", contact);

  await connectDB();
  const contacts = await Contact.find();

  return NextResponse.json({ contacts: contacts });
}
