import { database } from "../models";
import SequelizeConnection from "./db";
import { logger } from "./logger";

const initDb = async () => {
  await SequelizeConnection.connect();

  // once connection is authenticated, sequelize will sync the database models
  // force flag is used to drop the database and create the database again
  database.sequelize.sync({ force: false });

  logger.info({
    message: `Postgres client connected`,
  });
};

const initDependencies = async () => {
  await initDb();
};

export { initDependencies };
