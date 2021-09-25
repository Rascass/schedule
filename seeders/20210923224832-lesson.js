'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        const teachers = await queryInterface.sequelize.query("select id from Teachers");
        const subjects = await queryInterface.sequelize.query("select id from Subjects");
        const audiences = await queryInterface.sequelize.query("select id from Audiences");
        const groups = await queryInterface.sequelize.query("select id from `Groups`");

        const audiencesRows = audiences[0];
        const groupsRows = groups[0];
        const teachersRows = teachers[0];
        const subjectsRows = subjects[0];

        await queryInterface.bulkInsert('Lessons', [{
            number: 1,
            weekDay: 2,
            week: 1,
            subjectId: subjectsRows[0].id,
            teacherId: teachersRows[0].id,
            audienceId: audiencesRows[0].id,
            groupId: groupsRows[0].id
        }], {});
    },

    down: async(queryInterface, Sequelize) => {}
};