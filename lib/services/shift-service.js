const { Shift, Sequelize } = require('../../app/models');
const ModelBaseService = require('../../lib/services/base-service');

class ShiftService extends ModelBaseService {

    constructor() {
        super();
    }

    async findAll(params) {
        const queryParams = this.buildQuery(params);
        return Shift.findAll(queryParams);
    }

    async find(id) {
        return Shift.findOne({
            where: { id: id }
        });
    }

    async create(params) {
        return Shift.create(params)
            .then((user) => {
                return user;
            });
    }

    async update(id, params) {
        const shift = await Shift.findOne({
            where: { id: id }
        });

        return shift.update(params);
    }

    async destroy(id) {
        const shift = await Shift.findOne({
            where: { id: id }
        });

        return shift.destroy();
    }
}

module.exports = ShiftService;