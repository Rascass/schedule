'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('PersonInfos', [{
                firstName: 'Николай',
                lastName: 'Васнецов',
                middleName: 'Сергеевич'
            },
            {
                firstName: 'Яна',
                lastName: 'Антонюк',
                middleName: 'Валерьевна'
            },
            {
                firstName: 'Екатерина',
                lastName: 'Пирожкова',
                middleName: 'Витальевна'
            }
        ], {});
    },

    down: async(queryInterface, Sequelize) => {}
};