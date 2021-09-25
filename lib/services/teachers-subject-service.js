const { TeachersSubject, Sequelize } = require(process.cwd() + '/app/models');
const ModelBaseService = require(process.cwd() + '/lib/services/base-service');

class TeachersSubjectService extends ModelBaseService {

    constructor() {
        super();
    }

    async findAll(params) {
        const queryParams = this.buildQuery(params);
        return TeachersSubject.findAll(queryParams);
    }

    async find(id) {
        return TeachersSubject.findOne({
            where: { id: id}
        });
    }

    async create(params) {
        return TeachersSubject.create(params)
            .then((user) => {
                return user;
            });
    }

    async update(id, params) {
        const teachersSubject = await TeachersSubject.findOne({
            where: { id: id}
        });

        return teachersSubject.update(params);
    }

    async destroy(id) {
        const teachersSubject = await TeachersSubject.findOne({
            where: { id: id}
        });

        return teachersSubject.destroy();
    }
}

module.exports = TeachersSubjectService;