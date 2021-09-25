'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Audiences', [{
            number: '101',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: async(queryInterface, Sequelize) => {}
};