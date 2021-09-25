'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Courses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            yearDuration: {
                type: Sequelize.INTEGER
            },
            courseNameId: {
                type: Sequelize.INTEGER,
                references: { model: 'CourseNames', key: 'id' }
            },
            educationBaseId: {
                type: Sequelize.INTEGER,
                references: { model: 'EducationBases', key: 'id' }
            },
            shiftId: {
                type: Sequelize.INTEGER,
                references: { model: 'Shifts', key: 'id' }
            },
            departamentId: {
                type: Sequelize.INTEGER,
                references: { model: 'Departaments', key: 'id' }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Courses');
    }
};