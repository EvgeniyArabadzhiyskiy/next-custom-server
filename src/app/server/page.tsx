import { connectDB } from "@/lib/connectDB";
import { Contact } from "@/models/contacts";
import Link from "next/link";

const getContact = async () => {
  await connectDB();

  const contacts = await Contact.find();
  return contacts
};

const Server = async () => {
   const contacts = await getContact()
   const mango = contacts[0].name
   console.log("Server  mango:", mango);
   
  return (
    <>
      <Link href={"/"}>Home</Link>
      <h1>
        {mango}
      </h1>
    </>
  );
};

export default Server;
