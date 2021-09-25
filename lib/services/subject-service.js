const { Subject, Sequelize } = require(process.cwd() + '/app/models');
const ModelBaseService = require(process.cwd() + '/lib/services/base-service');

class SubjectService extends ModelBaseService {

    constructor() {
        super();
    }

    async findAll(params) {
        const queryParams = this.buildQuery(params);
        return Subject.findAll(queryParams);
    }

    async find(id) {
        return Subject.findOne({
            where: { id: id}
        });
    }

    async create(params) {
        return Subject.create(params)
            .then((user) => {
                return user;
            });
    }

    async update(id, params) {
        const subject = await Subject.findOne({
            where: { id: id}
        });

        return subject.update(params);
    }

    async destroy(id) {
        const subject = await Subject.findOne({
            where: { id: id}
        });

        return subject.destroy();
    }
}

module.exports = SubjectService;