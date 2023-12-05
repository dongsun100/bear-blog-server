import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import express from "express";
import http from "http";
import morgan from "morgan";
import compression from "compression";
import dotenv from "dotenv";
import path from "path";

import getSchema from "./schema"

async function startApolloServer(port: number): Promise<ApolloServer> {
  const app = express();
  app.use(morgan("dev"));
  app.use(compression());

  const schema = await getSchema()
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    introspection: true, // 스키마 검사 활성화 default: true
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  await server.start();
  server.applyMiddleware({ app, path: "/" });
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );

  return server;
}

const port = parseInt(process.env.SERVER_PORT || "3000");
startApolloServer(port);
