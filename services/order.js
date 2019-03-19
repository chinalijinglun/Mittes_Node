const moment = require("moment");
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "orders",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      create_time: {
        type: DataTypes.DATE,
        allowNull: false,
        get() {
          return moment(this.getDataValue("create_time")).format(
            "YYYY-MM-DD"
          );
        }
      },
      total_price: {
        type:DataTypes.DECIMAL,
      },
      pay_type: {
        type:DataTypes.STRING,
      },
      score_price: {
        type:DataTypes.DECIMAL
      },
      status: {
        type:DataTypes.STRING
      }
    },
    {
      // 如果为 true 则表的名称和 model 相同，即 user
      // 为 false MySQL创建的表名称会是复数 users
      // 如果指定的表名称本就是复数形式则不变
      freezeTableName: true,
      timestamps:false
    }
  );
};
