const { Audience, Sequelize } = require(process.cwd() + '/app/models');
const ModelBaseService = require(process.cwd() + '/lib/services/base-service');

class AudienceService extends ModelBaseService {

    constructor() {
        super();
    }

    async findAll(params) {
        const queryParams = this.buildQuery(params);
        return Audience.findAll(queryParams);
    }

    async find(id) {
        return Audience.findOne({
            where: { id: id}
        });
    }

    async create(params) {
        return Audience.create(params)
            .then((user) => {
                return user;
            });
    }

    async update(id, params) {
        const audience = await Audience.findOne({
            where: { id: id}
        });

        return audience.update(params);
    }

    async destroy(id) {
        const audience = await Audience.findOne({
            where: { id: id}
        });

        return audience.destroy();
    }
}

module.exports = AudienceService;