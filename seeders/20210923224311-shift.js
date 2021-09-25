'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Shifts', [{
            name: 'очная форма',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'вечерняя форма',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'заочная форма',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

    },

    down: async(queryInterface, Sequelize) => {}
};