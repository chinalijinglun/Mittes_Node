module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "sale_goods",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
      },
      order_id: {
        type: DataTypes.INTEGER
      },
      good_id: {
        type: DataTypes.INTEGER
      },
      count: {
        type: DataTypes.INTEGER
      }
    },
    {
      // 如果为 true 则表的名称和 model 相同，即 user
      // 为 false MySQL创建的表名称会是复数 users
      // 如果指定的表名称本就是复数形式则不变
      freezeTableName: true,
      timestamps: false //如果为false则不自动添加creat_at,update_at 等字段
    }
  );
};
