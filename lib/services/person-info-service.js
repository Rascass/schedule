const { PersonInfo, Sequelize } = require(process.cwd() + '/app/models');
const ModelBaseService = require(process.cwd() + '/lib/services/base-service');

class PersonInfoService extends ModelBaseService {

    constructor() {
        super();
    }

    async findAll(params) {
        const queryParams = this.buildQuery(params);
        return PersonInfo.findAll(queryParams);
    }

    async find(id) {
        return PersonInfo.findOne({
            where: { id: id}
        });
    }

    async create(params) {
        return PersonInfo.create(params)
            .then((user) => {
                return user;
            });
    }

    async update(id, params) {
        const personInfo = await PersonInfo.findOne({
            where: { id: id}
        });

        return personInfo.update(params);
    }

    async destroy(id) {
        const personInfo = await PersonInfo.findOne({
            where: { id: id}
        });

        return personInfo.destroy();
    }
}

module.exports = PersonInfoService;