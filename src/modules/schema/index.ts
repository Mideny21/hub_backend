import { DataTypes, Model } from "sequelize";
// import {} from "../../config/db";
import {database} from "../../models/index"

class Property extends Model {
  public id!: number;
  public name!: string;
  public city!: string;
  public income!: string;
  public expenses!: string;
  public type!: string;
  public filepath!:string;

  // timestamps!
  public readonly created_at!: Date;
  public readonly last_updated!: Date;
}

Property.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    income: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    expenses: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    filepath: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: database.sequelize,
    tableName: "properties",
    createdAt: "created_at",
    updatedAt: "last_updated",
  }
);

export default Property;