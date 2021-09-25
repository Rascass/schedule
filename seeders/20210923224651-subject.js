'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        const courses = await queryInterface.sequelize.query("select id from Courses");
        const coursesRows = courses[0];
        await queryInterface.bulkInsert('Subjects', [{
                name: 'Информатика',
                totalHours: 120,
                courseId: coursesRows[0].id
            },
            {
                name: 'Охрана труда',
                totalHours: 60,
                courseId: coursesRows[1].id
            },
            {
                name: 'Охрана окружающей среды',
                totalHours: 20,
                courseId: coursesRows[2].id
            },
            {
                name: 'Физическая культура и здоровья',
                totalHours: 500,
                courseId: coursesRows[0].id
            }
        ], {});
    },

    down: async(queryInterface, Sequelize) => {}
};