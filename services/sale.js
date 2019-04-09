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
      total_price: {type: DataTypes.DECIMAL},
      user_id: {type: DataTypes.INTEGER, allowNull: true},
      pay_type: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.STRING
      },
      score_price: {
        type: DataTypes.DECIMAL
      },
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
