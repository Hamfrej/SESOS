'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Lectures', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			startDate: {
				type: Sequelize.DATE
			},
			endDate: {
				type: Sequelize.DATE
			},
			lecturer_id: {
				type: Sequelize.INTEGER
			},
			classroom_id: {
				type: Sequelize.INTEGER
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				default: new Date()
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				default: new Date()
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Lectures');
	}
};