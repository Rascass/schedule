'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Lessons', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            number: {
                type: Sequelize.INTEGER
            },
            weekDay: {
                type: Sequelize.INTEGER
            },
            week: {
                type: Sequelize.INTEGER
            },
            subjectId: {
                type: Sequelize.INTEGER,
                references: { model: 'Subjects', key: 'id' }
            },
            teacherId: {
                type: Sequelize.INTEGER,
                references: { model: 'Teachers', key: 'id' }
            },
            audienceId: {
                type: Sequelize.INTEGER,
                references: { model: 'Audiences', key: 'id' }
            },
            groupId: {
                type: Sequelize.INTEGER,
                references: { model: 'Groups', key: 'id' }
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
        await queryInterface.dropTable('Lessons');
    }
};