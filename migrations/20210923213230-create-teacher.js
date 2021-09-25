'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Teachers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            workingTypeId: {
                type: Sequelize.INTEGER,
                references: { model: 'WorkingTypes', key: 'id' }
            },
            personInfoId: {
                type: Sequelize.INTEGER,
                unique: true,
                references: { model: 'PersonInfos', key: 'id' },
                onDelete: 'CASCADE'
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
        await queryInterface.dropTable('Teachers');
    }
};