const moment = require("moment");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "login",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "name"
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "password"
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
};
