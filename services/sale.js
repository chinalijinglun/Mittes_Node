const moment = require("moment");
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "sale",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "price"
      },
      // 创建时间
      createdAt: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue("createdAt")).format(
            "YYYY-MM-DD"
          );
        }
      },
      // 更新时间
      updatedAt: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue("updatedAt")).format(
            "YYYY-MM-DD"
          );
        }
      }
    },
    {
      freezeTableName: true
    }
  );
};
