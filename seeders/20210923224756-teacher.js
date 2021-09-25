'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        const workingTypes = await queryInterface.sequelize.query("select id from WorkingTypes");
        const personInfos = await queryInterface.sequelize.query("select id from PersonInfos");
        const workingTypesRows = workingTypes[0];
        const personInfosRows = personInfos[0];
        await queryInterface.bulkInsert('Teachers', [{
                workingTypeId: workingTypesRows[0].id,
                personInfoId: personInfosRows[0].id
            },
            {
                workingTypeId: workingTypesRows[1].id,
                personInfoId: personInfosRows[1].id
            }
        ], {});
    },

    down: async(queryInterface, Sequelize) => {}
};