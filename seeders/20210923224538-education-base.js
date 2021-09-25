'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('EducationBases', [{
            name: '9 кл'
        }, {
            name: "11 кл"
        }], {});
    },

    down: async(queryInterface, Sequelize) => {}
};