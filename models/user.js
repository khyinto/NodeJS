const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
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
        tableName: "users_example",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  /*
  여기서 associate는 모델들의 관계를 설정하는 메서드입니다. 
  db는 Sequelize를 통해 연결한 데이터베이스 객체를 말하며, 
  db.User와 db.Comment는 Sequelize 모델 객체입니다.
  db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" })는 
  User모델과 Comment 모델이 일대다(OneToMany) 관계를 가진다는 것을 의미합니다.
  즉, 하나의 사용자는 여러 개의 댓글을 작성할 수 있습니다. 
  이 때 foreignKey와 sourceKey 옵션을 사용하여 User 모델의 id 속성과 Comment 모델의 commenter 속성을 연결합니다.
  위 코드를 실행하면, User 모델 객체에 hasMany 메서드가 추가되며,
  이 메서드를 사용하여 User 모델과 Comment 모델의 관계를 활용할 수 있습니다. 
  예를 들어, User 모델에서 getComments() 메서드를 사용하여 해당 사용자가 작성한 댓글들을 가져올 수 있습니다.
  */
  static associate(db) {
    db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" });
  }
}
module.exports = User;
