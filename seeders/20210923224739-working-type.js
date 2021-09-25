'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('WorkingTypes', [{
                name: "полная занятость",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'частичная занятость',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async(queryInterface, Sequelize) => {}
};