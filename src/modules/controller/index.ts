import { NextFunction, Response } from "express";
import {getAllProperties} from '../services/index';

export const getAllProperty = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const properties = await getAllProperties();
      return res.status(200).json({
        data: properties,
        error: false,
      });
    } catch (err) {
      console.error('Error in getAllProperty:', err);
      return res.status(500).json({
        error: true,
        message: 'Internal Server Error',
      });
    }
  };