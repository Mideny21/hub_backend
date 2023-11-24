import { Dialect, Options, Sequelize } from "sequelize";
import { logger } from "./logger";
import { createConnection } from "mysql2";
import configs from "./configs";

class SequelizeConnection {
  private static instance: Sequelize;

  static getInstance(): Sequelize {
    if (!SequelizeConnection.instance) {
      const dbConfig: Options = {
        dialect: configs.DB_DIALECT as Dialect,
        host: configs.DB_HOST,
      //  port: Number(configs.DB_PORT),
        username: configs.DB_USERNAME,
        password: configs.DB_PASSWORD,
        database: configs.DB_DATABASE,
        logging: false,
      
      };

      SequelizeConnection.instance = new Sequelize(dbConfig);
    }
    return SequelizeConnection.instance;
  }

  static async connect(): Promise<Sequelize> {
    const sequelize = SequelizeConnection.getInstance();

    try {
      // Create MySQL connection
      const mysqlConnection = createConnection({
        host: configs.DB_HOST,
        user: configs.DB_USERNAME,
        password: configs.DB_PASSWORD,
      });

      mysqlConnection.connect();

      // Check if database exists
      const [rows] = await (mysqlConnection
        .promise()
        .query(
          `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${process.env.DB_DATABASE}'`
        ) as Promise<any>);

      if (!rows.length) {
        // Create database if doesn't exist
        await (mysqlConnection
          .promise()
          .query(`CREATE DATABASE ${configs.DB_DATABASE}`) as Promise<any>);
      }

      // Close MySQL connection
      mysqlConnection.end();

      await sequelize.authenticate();

      logger.info({ message: `Sequelize Authenticated!` });
      logger.info({ message: `Sequelize Connected and Database Created!` });

      return sequelize;
    } catch (ex) {
      logger.info({
        message: `Error while creation connection to database :: ${ex}`,
      });
      return sequelize;
    }
  }

  static async close(): Promise<Sequelize> {
    const sequelize = SequelizeConnection.getInstance();
    try {
      await sequelize.close();
      logger.info({ message: `Database connection closed successfully` });
      return sequelize;
    } catch (ex) {
      logger.info({ message: `Error while closing database connection ::` });
      return sequelize;
    }
  }
}

export default SequelizeConnection;
