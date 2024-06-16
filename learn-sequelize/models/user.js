const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init(
      {
        // id는 자동으로 생성됨
        name: {
          type: Sequelize.STRING(20), // 타입
          allowNull: false, // notnull
          unique: true,
        },
        age: {
          type: Sequelize.INTEGER.UNSIGNED, // 0과 양수만 허용
          allowNull: false,
        },
        married: {
          type: Sequelize.BOOLEAN, // sql문의 tinyint와 동일 여기서는 true false로
          allowNull: false,
        },
        comment: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        create_at: {
          type: Sequelize.DATE, //sql의 DATETIME
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" });
  } // hasmany는 1:n 관계를 의미함 hasOne 1:1 관계
} // 다대다 관계는 테이블을 하나 더 생성하여 관계를 맺음

module.exports = User;
