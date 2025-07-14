import { QueryInterface } from "sequelize";
export default  {
  async up (queryInterface :QueryInterface ) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS User (
         id INT AUTO_INCREMENT PRIMARY KEY,
         email VARCHAR(255) NOT NULL,
         fullName VARCHAR(255) NOT NULL,
         password VARCHAR(255) NOT NULL,
         profilePic VARCHAR(255) DEFAULT NULL,
         createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
         updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) 
      `)
  },

  async down (queryInterface : QueryInterface ) {
    await queryInterface.sequelize.query(`
       DROP TABLE IF EXISTS User
      `)
  }
};
