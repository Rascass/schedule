const BaseMiddleware = require('./base-middleware');

const ALLOWED_PARAMS = {
    "getAll": {
        "conditions": ["id","workingTypeId","personInfoId","cretaedAt","updatedAt"],
        "pageInfo": ["pageNum", "limit"],
        "include": [],
        "attributes": [],
        "order": ["key", "type"]
    },

    "create" : {
        "Teacher": ["workingTypeId","personInfoId"]
    },

    "update" : {
        "Teacher": ["workingTypeId","personInfoId"]
    }
};

class TeacherMiddleware extends BaseMiddleware {
    static onGetAll(req, res, next) {
        TeacherMiddleware.permit(req, ALLOWED_PARAMS["getAll"], 'query');
        next();
    }

    static onCreate(req, res, next) {
        TeacherMiddleware.permit(req, ALLOWED_PARAMS["create"], 'body');
        next();
    }

    static onUpdate(req, res, next) {
        TeacherMiddleware.permit(req, ALLOWED_PARAMS["update"], 'body');
        next();
    }
}

module.exports = TeacherMiddleware;