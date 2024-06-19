const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init(
      {
        name: { type: Sequelize.STRING(20), allowNull: false, unique: true },
        age: { type: Sequelize.STRING(20), allowNull: false },
        nickName: { type: Sequelize.STRING(20), allowNull: false },
        married: { type: Sequelize.BOOLEAN, allownull: true },
        create_at: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "user",
        tableName: "users",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post, { foreignKey: "userName", sourceKey: "name" });
  }
}

module.exports = User;
