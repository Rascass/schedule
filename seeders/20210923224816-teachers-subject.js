'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        const teachers = await queryInterface.sequelize.query("select id from Teachers");
        const subjects = await queryInterface.sequelize.query("select id from Subjects");
        const teachersRows = teachers[0];
        const subjectsRows = subjects[0];

        await queryInterface.bulkInsert('TeachersSubjects', [{
                teacherId: teachersRows[0].id,
                subjectId: subjectsRows[0].id
            },
            {
                teacherId: teachersRows[1].id,
                subjectId: subjectsRows[1].id
            }
        ], {});
    },

    down: async(queryInterface, Sequelize) => {}
};