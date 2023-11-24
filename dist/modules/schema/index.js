"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// import {} from "../../config/db";
const index_1 = require("../../models/index");
class Property extends sequelize_1.Model {
    id;
    name;
    city;
    income;
    expenses;
    type;
    filepath;
    // timestamps!
    created_at;
    last_updated;
}
Property.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    income: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    expenses: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    filepath: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: index_1.database.sequelize,
    tableName: "properties",
    createdAt: "created_at",
    updatedAt: "last_updated",
});
exports.default = Property;
//# sourceMappingURL=index.js.map