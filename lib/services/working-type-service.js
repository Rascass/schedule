const { WorkingType, Sequelize } = require(process.cwd() + '/app/models');
const ModelBaseService = require(process.cwd() + '/lib/services/base-service');

class WorkingTypeService extends ModelBaseService {

    constructor() {
        super();
    }

    async findAll(params) {
        const queryParams = this.buildQuery(params);
        return WorkingType.findAll(queryParams);
    }

    async find(id) {
        return WorkingType.findOne({
            where: { id: id}
        });
    }

    async create(params) {
        return WorkingType.create(params)
            .then((user) => {
                return user;
            });
    }

    async update(id, params) {
        const workingType = await WorkingType.findOne({
            where: { id: id}
        });

        return workingType.update(params);
    }

    async destroy(id) {
        const workingType = await WorkingType.findOne({
            where: { id: id}
        });

        return workingType.destroy();
    }
}

module.exports = WorkingTypeService;