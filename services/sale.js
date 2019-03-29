const moment = require("moment")
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
      // num: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   field: "num"
      // },
      // price: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   field: "price"
      // },
      // 创建时间
      // createdAt: {
      //   type: DataTypes.DATE,
      //   get() {
      //     return moment(this.getDataValue("createdAt")).format(
      //       "YYYY-MM-DD HH:mm:ss"
      //     );
      //   }
      // },
      // 更新时间
      updatedAt: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue("updatedAt")).format(
            "YYYY-MM-DD HH:mm:ss"
          )
        }
      }
    },
    {
      freezeTableName: true
    }
  )
}
