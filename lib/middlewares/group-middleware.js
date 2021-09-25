const BaseMiddleware = require('./base-middleware');

const ALLOWED_PARAMS = {
    "getAll": {
        "conditions": ["id","name","courseId","cretaedAt","updatedAt"],
        "pageInfo": ["pageNum", "limit"],
        "include": [],
        "attributes": [],
        "order": ["key", "type"]
    },

    "create" : {
        "Group": ["name","courseId"]
    },

    "update" : {
        "Group": ["name","courseId"]
    }
};

class GroupMiddleware extends BaseMiddleware {
    static onGetAll(req, res, next) {
        GroupMiddleware.permit(req, ALLOWED_PARAMS["getAll"], 'query');
        next();
    }

    static onCreate(req, res, next) {
        GroupMiddleware.permit(req, ALLOWED_PARAMS["create"], 'body');
        next();
    }

    static onUpdate(req, res, next) {
        GroupMiddleware.permit(req, ALLOWED_PARAMS["update"], 'body');
        next();
    }
}

module.exports = GroupMiddleware;