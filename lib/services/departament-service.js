const { Departament, Sequelize } = require(process.cwd() + '/app/models');
const ModelBaseService = require(process.cwd() + '/lib/services/base-service');

class DepartamentService extends ModelBaseService {

    constructor() {
        super();
    }

    async findAll(params) {
        const queryParams = this.buildQuery(params);
        return Departament.findAll(queryParams);
    }

    async find(id) {
        return Departament.findOne({
            where: { id: id}
        });
    }

    async create(params) {
        return Departament.create(params)
            .then((user) => {
                return user;
            });
    }

    async update(id, params) {
        const departament = await Departament.findOne({
            where: { id: id}
        });

        return departament.update(params);
    }

    async destroy(id) {
        const departament = await Departament.findOne({
            where: { id: id}
        });

        return departament.destroy();
    }
}

module.exports = DepartamentService;