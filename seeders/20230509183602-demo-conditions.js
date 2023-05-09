'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Conditions', [
   {
    condition: 'Heart Disease',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    condition: 'Respiratory Infections',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    condition: 'Mental Health',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    condition: 'Diabetes',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    condition: 'Gut Problems',
    createdAt: new Date(),
    updatedAt: new Date()
  }

]);
},
//Heart Disease, Respiratory Infections, Mental Health Disorders, Diabetes, Gut problems
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Conditions', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
