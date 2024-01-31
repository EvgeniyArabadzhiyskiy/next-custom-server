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
});

export type AppRouter = typeof appRouter;
