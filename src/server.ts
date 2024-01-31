import next from "next";
import path from "path";
import express from "express";
import mongoose from "mongoose";
import nextBuild from "next/dist/build";
import * as trpcExpress from "@trpc/server/adapters/express";
import { inferAsyncReturnType } from "@trpc/server";

import { appRouter } from "./trpc";
import { connectDB } from "./lib/connectDB";


const server = express();

const userRouter = express.Router();
userRouter.get("/user", async (req, res) => {
  res.json({
    status: "success",
    user: {
      name: "Djon",
      age: 30,
      city: "Dnepr",
    },
  });
});

const PORT = 3000;
const dev = process.env.NODE_ENV !== "production";

const nextApp = next({
  dev: process.env.NODE_ENV !== "production",
  port: PORT,
});

const nextHandler = nextApp.getRequestHandler();

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
});

// export type ExpressContext = inferAsyncReturnType<typeof createContext>;

const start = async () => {
  if (process.env.NEXT_BUILD) {
    server.listen(PORT, async () => {
      // @ts-expect-error
      await nextBuild(path.join(__dirname, "../"));
      
      process.exit();
    });
    
    return;
  }
  
  server.use("/api/some-route", userRouter);
  
  server.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
    );
    
    server.use((req, res) => nextHandler(req, res));
    
    nextApp
    .prepare()
    .then(() => {
      server.listen(PORT, () => {
        console.log(`Runing on PORT ${PORT}, dev: ${dev}`);
      });
    })
    .catch((ex) => {
      console.error(ex.stack);
      process.exit(1);
    });
  };
  
  start();
  
  
  //   /api/some-route/user
  
  // mongoose
  //   .connect(process.env.MONGODB_URL || "")
  //   .then(() => {
    //     console.log("Database connection successful");
    //   })
    //   .catch((error) => {
      //     console.log(error.message);
      //     process.exit(1);
      //   });
      
      // "scripts": {
        //   "dev": "cross-env NODE_ENV=development nodemon",
        //   "build": "next build",
        //   "start": "node server.ts",
        //   "lint": "next lint"
        // },
