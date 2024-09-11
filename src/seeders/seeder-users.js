'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: '123123',
        firstName: 'Quan',
        lastName: 'Tran',
        address: 'USA',
        phoneNumber: '1234567890',
        gender: true,
        image: null,
        roleId: 'R1',
        positionId: 'P1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
