import { connectDB } from "../../lib/connectDB";
import { Contact } from "@/models/contacts";
import Link from "next/link";

const getContact = async () => {
    const res = await fetch(`http://localhost:3000/api/greet`)
    const data = await res.json()
    // console.log("getContact  contasts:", data);
//   await connectDB();
//   const contacts = await Contact.find();
  return data
};

const Server = async () => {
//    const data = await getContact()
//    console.log("Server  data:", data);
//    const mango = data?.contacts[0].title
//    console.log("Server  mango:", mango);
   
  return (
    <>
      <Link href={"/"}>Home</Link>
      <h1>
        {/* {mango} */}
      </h1>
    </>
  );
};

export default Server;
