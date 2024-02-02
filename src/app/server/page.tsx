import { connectDB } from "../../lib/connectDB";
import { Contact } from "@/models/contacts";
import Link from "next/link";

const getContact = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/greet`);
  // const data = await res.json();
  // return data;

  await connectDB();
  const contacts = await Contact.find();

  return contacts
};

const Server = async () => {
  const contacts = await getContact();
  const name = contacts[1].name;

  return (
    <>
      <Link href={"/"}>Home</Link>
      <h1>{name}</h1>
    </>
  );
};

export default Server;
