const { Course, Sequelize } = require(process.cwd() + '/app/models');
const ModelBaseService = require(process.cwd() + '/lib/services/base-service');

class CourseService extends ModelBaseService {

    constructor() {
        super();
    }

    async findAll(params) {
        const queryParams = this.buildQuery(params);
        return Course.findAll(queryParams);
    }

    async find(id) {
        return Course.findOne({
            where: { id: id}
        });
    }

    async create(params) {
        return Course.create(params)
            .then((user) => {
                return user;
            });
    }

    async update(id, params) {
        const course = await Course.findOne({
            where: { id: id}
        });

        return course.update(params);
    }

    async destroy(id) {
        const course = await Course.findOne({
            where: { id: id}
        });

        return course.destroy();
    }
}

module.exports = CourseService;