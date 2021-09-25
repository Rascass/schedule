const { EducationBase, Sequelize } = require(process.cwd() + '/app/models');
const ModelBaseService = require(process.cwd() + '/lib/services/base-service');

class EducationBaseService extends ModelBaseService {

    constructor() {
        super();
    }

    async findAll(params) {
        const queryParams = this.buildQuery(params);
        return EducationBase.findAll(queryParams);
    }

    async find(id) {
        return EducationBase.findOne({
            where: { id: id}
        });
    }

    async create(params) {
        return EducationBase.create(params)
            .then((user) => {
                return user;
            });
    }

    async update(id, params) {
        const educationBase = await EducationBase.findOne({
            where: { id: id}
        });

        return educationBase.update(params);
    }

    async destroy(id) {
        const educationBase = await EducationBase.findOne({
            where: { id: id}
        });

        return educationBase.destroy();
    }
}

module.exports = EducationBaseService;