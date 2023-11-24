import express, { Request, Response, NextFunction, Router } 
from 'express';

import {getAllProperties} from '../services/index';

const propertiesRouter: Router = express.Router();

propertiesRouter.get("/", getAllProperties);

export default propertiesRouter;