const { Group, Sequelize } = require(process.cwd() + '/app/models');
const ModelBaseService = require(process.cwd() + '/lib/services/base-service');

class GroupService extends ModelBaseService {

    constructor() {
        super();
    }

    async findAll(params) {
        const queryParams = this.buildQuery(params);
        return Group.findAll(queryParams);
    }

    async find(id) {
        return Group.findOne({
            where: { id: id}
        });
    }

    async create(params) {
        return Group.create(params)
            .then((user) => {
                return user;
            });
    }

    async update(id, params) {
        const group = await Group.findOne({
            where: { id: id}
        });

        return group.update(params);
    }

    async destroy(id) {
        const group = await Group.findOne({
            where: { id: id}
        });

        return group.destroy();
    }
}

module.exports = GroupService;