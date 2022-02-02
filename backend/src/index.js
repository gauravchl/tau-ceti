import express from "express";
import http from "http";
import { config } from "dotenv";
import createError from "http-errors";
import bodyParser from "body-parser";
import cors from "cors";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { execute, subscribe } from "graphql";

import resolvers from "./resolvers/index";
import typeDefs from "./schema/index";
import routes from "./routes";

const schema = makeExecutableSchema({ typeDefs, resolvers });

config();

const app = express();
const httpServer = http.createServer(app);

async function startApolloServer() {
  const subscriptionServer = SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: "/graphql" }
  );

  const server = new ApolloServer({
    schema,

    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground(),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
    ],
  });

  await server.start();
  server.applyMiddleware({ app });
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use("/", routes);
  app.use((req, res, next) => next(createError(404)));

  // Error Handler
  app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.send("Error");
  });

  await httpServer.listen({ port: process.env.PORT });
  app.locals.startedAt = new Date();
  console.log(
    `🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
  );
}

startApolloServer();

export default app;
