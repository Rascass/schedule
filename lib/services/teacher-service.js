const { Teacher, Sequelize } = require(process.cwd() + '/app/models');
const ModelBaseService = require(process.cwd() + '/lib/services/base-service');

class TeacherService extends ModelBaseService {

    constructor() {
        super();
    }

    async findAll(params) {
        const queryParams = this.buildQuery(params);
        return Teacher.findAll(queryParams);
    }

    async find(id) {
        return Teacher.findOne({
            where: { id: id}
        });
    }

    async create(params) {
        return Teacher.create(params)
            .then((user) => {
                return user;
            });
    }

    async update(id, params) {
        const teacher = await Teacher.findOne({
            where: { id: id}
        });

        return teacher.update(params);
    }

    async destroy(id) {
        const teacher = await Teacher.findOne({
            where: { id: id}
        });

        return teacher.destroy();
    }
}

module.exports = TeacherService;