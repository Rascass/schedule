'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Departaments', [{
            name: "ПОИТ"
        }, {
            name: "БУХУЧЕТ"
        }, {
            name: "КД"
        }], {});
    },

    down: async(queryInterface, Sequelize) => {}
};