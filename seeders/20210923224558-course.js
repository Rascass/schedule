'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        const shifts = await queryInterface.sequelize.query("select id from Shifts");
        const departaments = await queryInterface.sequelize.query("select id from Departaments");
        const courseNames = await queryInterface.sequelize.query("select id from CourseNames");
        const educationBases = await queryInterface.sequelize.query("select id from EducationBases");

        const shiftsRows = shifts[0];
        const departamentsRows = departaments[0];
        const courseNamesRows = courseNames[0];
        const educationBasesRows = educationBases[0];

        await queryInterface.bulkInsert('Courses', [{
                yearDuration: 3,
                shiftId: shiftsRows[0].id,
                educationBaseId: educationBasesRows[0].id,
                departamentId: departamentsRows[0].id,
                courseNameId: courseNamesRows[0].id
            },
            {
                yearDuration: 3,
                shiftId: shiftsRows[0].id,
                departamentId: departamentsRows[0].id,
                educationBaseId: educationBasesRows[0].id,
                courseNameId: courseNamesRows[0].id
            },
            {
                yearDuration: 3,
                shiftId: shiftsRows[2].id,
                departamentId: departamentsRows[2].id,
                educationBaseId: educationBasesRows[1].id,
                courseNameId: courseNamesRows[2].id
            }
        ], {});
    },

    down: async(queryInterface, Sequelize) => {}
};