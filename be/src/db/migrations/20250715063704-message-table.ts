import { QueryInterface } from "sequelize";

export default  {
  async up (queryInterface : QueryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS Message(
      id INT AUTO_INCREMENT PRIMARY KEY,
      senderId INT  NOT NULL,
      receiverId INT NOT NULL,
      text VARCHAR(255),
      image VARCHAR(255),
      createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (senderId) REFERENCES User(id) ON DELETE CASCADE,
      FOREIGN KEY (receiverId) REFERENCES User(id) ON DELETE CASCADE
      ) 
      `);
  },

  async down (queryInterface : QueryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS Message 
      `)
  }
};
