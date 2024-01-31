// import { appRouter } from "@/trpc";
// import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { NextResponse } from "next/server";

// const handler = (req: Request) =>
//   fetchRequestHandler({
//     endpoint: "/api/trpc",
//     req,
//     router: appRouter,
//     createContext: () => ({}),
//   });

// export { handler as GET, handler as POST };

export async function GET(req: Request) {
  return NextResponse.json({ user: "Poly" });
}
