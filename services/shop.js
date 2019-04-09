const moment = require("moment");
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "shops",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      img: {
        type: DataTypes.STRING,
      },
      volume: {
        type: DataTypes.STRING,
      },
      update_time: {
        type: DataTypes.DATE,
        allowNull: false,
        get() {
          return moment(this.getDataValue("update_time")).format(
            "YYYY-MM-DD"
          );
        }
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
      price: {
        type:DataTypes.DECIMAL,
      },
      property: {
        type:DataTypes.JSON
      },
      brand_name: {
        type:DataTypes.STRING
      },
      category_first_name: {
        type:DataTypes.STRING
      },
      category_second_name: {
        type:DataTypes.STRING
      },
      total_count: {
        type:DataTypes.INTEGER
      },
      offer_price: {
        type:DataTypes.DECIMAL
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
