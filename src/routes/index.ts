import { Router } from "express";

import propertiesRouter from "../modules/routes/index";


const appRouter = Router();

// all routes
const appRoutes = [
  {
    path: "/properties",
    router: propertiesRouter,
  },
];

appRoutes.forEach(route => {
  appRouter.use(route.path, route.router);
});

export default appRouter;