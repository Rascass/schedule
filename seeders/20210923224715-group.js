'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        const courses = await queryInterface.sequelize.query("select id from Courses");
        const coursesRows = courses[0];

        await queryInterface.bulkInsert('Groups', [{
                name: "892",
                courseId: coursesRows[0].id
            },
            {
                name: "893",
                courseId: coursesRows[1].id
            },
            {
                name: "894",
                courseId: coursesRows[1].id
            }
        ], {});
    },

    down: async(queryInterface, Sequelize) => {}
};