const moment = require("moment")
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "push",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "type"
      },
      shop_name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "shop_name"
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "img"
      },
      push_name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "push_name"
      },
      push_content: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "push_content"
      },
      // 创建时间
      push_time: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue("push_time")).format(
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
