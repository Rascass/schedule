'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('CourseNames', [{
            name: 'техник-программист',
            letter: 'Т'
        }, {
            name: "бухгалтер",
            letter: 'Б'
        }, {
            name: "товаровед",
            letter: 'К'
        }, {
            name: "правовед",
            letter: 'П'
        }], {});
    },

    down: async(queryInterface, Sequelize) => {}
};