import express from "express";
import http from "http";
import { config } from "dotenv";
import createError from "http-errors";
import bodyParser from "body-parser";
import routes from "./routes";

config();

const app = express();
const httpServer = http.createServer(app);

async function startServer() {
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
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/`);
}

startServer();

export default app;
