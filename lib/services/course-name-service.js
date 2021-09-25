const { CourseName, Sequelize } = require(process.cwd() + '/app/models');
const ModelBaseService = require(process.cwd() + '/lib/services/base-service');

class CourseNameService extends ModelBaseService {

    constructor() {
        super();
    }

    async findAll(params) {
        const queryParams = this.buildQuery(params);
        return CourseName.findAll(queryParams);
    }

    async find(id) {
        return CourseName.findOne({
            where: { id: id}
        });
    }

    async create(params) {
        return CourseName.create(params)
            .then((user) => {
                return user;
            });
    }

    async update(id, params) {
        const courseName = await CourseName.findOne({
            where: { id: id}
        });

        return courseName.update(params);
    }

    async destroy(id) {
        const courseName = await CourseName.findOne({
            where: { id: id}
        });

        return courseName.destroy();
    }
}

module.exports = CourseNameService;