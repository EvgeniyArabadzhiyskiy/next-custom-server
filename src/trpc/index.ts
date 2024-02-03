import { connectDB } from "../lib/connectDB";
import { Contact } from "../models/contacts";
import { publicProcedure, router } from "./trpc";

interface IData {
  prase: string;
  user: string;
  age: number;
}

export const appRouter = router({
  myRoute: publicProcedure.query(() => {
    const data: IData = { prase: "Hello World", user: "Djon", age: 34 };
    return data;
  }),

  getUsers: publicProcedure.query(async () => {
    await connectDB();
    const contacts = await Contact.find();

    return contacts;
  }),
});

export type AppRouter = typeof appRouter;
