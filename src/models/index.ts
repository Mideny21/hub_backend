import SequelizeConnection from "../config/db";

const sequelize = SequelizeConnection.getInstance();

export const database = {
  sequelize,
};
