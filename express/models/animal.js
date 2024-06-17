const Sequelize = require("sequelize");

class Animal extends Sequelize.Model {
  static initiate(sequelize) {
    Animal.init(
      {
        name: { type: Sequelize.STRING(20), allowNull: false, unique: true },
        sound: { type: Sequelize.STRING(20), allowNull: false },
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
        modelName: "animal",
        tableName: "animals",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = Animal;
