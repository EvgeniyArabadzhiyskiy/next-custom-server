import { connectDB } from "../../lib/connectDB";
import { Contact } from "@/models/contacts";
import Link from "next/link";

const getContact = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/greet`);
  const data = await res.json();

  return data;
};

const Server = async () => {
  const data = await getContact();
  const name = data.contacts[0].name;

  return (
    <>
      <Link href={"/"}>Home</Link>
      <h1>{name}</h1>
    </>
  );
};

export default Server;
