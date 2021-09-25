const { Lesson, Sequelize } = require(process.cwd() + '/app/models');
const ModelBaseService = require(process.cwd() + '/lib/services/base-service');

class LessonService extends ModelBaseService {

    constructor() {
        super();
    }

    async findAll(params) {
        const queryParams = this.buildQuery(params);
        return Lesson.findAll(queryParams);
    }

    async find(id) {
        return Lesson.findOne({
            where: { id: id}
        });
    }

    async create(params) {
        return Lesson.create(params)
            .then((user) => {
                return user;
            });
    }

    async update(id, params) {
        const lesson = await Lesson.findOne({
            where: { id: id}
        });

        return lesson.update(params);
    }

    async destroy(id) {
        const lesson = await Lesson.findOne({
            where: { id: id}
        });

        return lesson.destroy();
    }
}

module.exports = LessonService;