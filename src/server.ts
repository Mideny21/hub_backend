import http from "http";
import express from "express";
import cors from "cors";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import configs from "./config/configs";
import errorHandlers from "./middleware/errorHandlers";
import { logger } from "./config/logger";
import { initDependencies } from "./config";
import multer from "multer";
import path from 'path';
import { createProperties, getAllProperties } from "./modules/services";
import app from "./app";

const router = express();
applyMiddleware(middleware, router);

app.use(cors());

// Serving static files
app.use('/public', express.static(path.join(__dirname, '/uploads')));


//ENDPOINT TO LIST ALL PROPERTIES
router.get("/properties", async(req, res) => {
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
  }});


  // ENDPOINT TO CREATE PROPERTIES
  const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage });
  
  router.post("/properties", upload.single('filepath'), async(req,res) => {
    try {
      const properties = await createProperties({...req.body, filepath:`uploads/${req.file?.filename}`});
      return res.status(200).json({
        data: properties,
        error: false,
        msg: "Properties created successfully",
      });
    } catch (err) {
      console.error('Error in getAllProperty:', err);
      return res.status(500).json({
        error: true,
        message: 'Internal Server Error',
      });
    }});

applyMiddleware(errorHandlers, router);

const server = http.createServer(router);

async function startServer() {
  await initDependencies();
  server.listen(configs.PORT, () => {
    return logger.info({
      message: `The backend is running at http://localhost:${configs.PORT}`,
    });
  });
}

startServer();
