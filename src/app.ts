import express, { Application, Request, Response, NextFunction } from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import errorHandlers from "./middleware/errorHandlers";
import cors from "cors";



const app: Application = express();

app.use(cors());
// app.use("api/properties", propertiesRouter);
// applyMiddleware(middleware, app);
//   applyRoutes(,

//  app); // add your routes here



applyMiddleware(errorHandlers, app);

export default app;
