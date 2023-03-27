const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static initate(sequelize) {
    User.init(
      {
        name: {
          type: Sequelize.STRING(20),
          allowNul: false,
          unique: true,
        },
        age: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNul: false,
        },
        married: {
          type: Sequelize.BOOLEAN,
          allowNul: false,
        },
        comment: {
          type: Sequelize.TEXT,
          allowNul: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNul: true,
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
  static associate(db) {}
}
module.exports = User;
