const BaseMiddleware = require('./base-middleware');

const ALLOWED_PARAMS = {
    "getAll": {
        "conditions": ["id","name","cretaedAt","updatedAt"],
        "pageInfo": ["pageNum", "limit"],
        "include": [],
        "attributes": [],
        "order": ["key", "type"]
    },

    "create" : {
        "EducationBase": ["name"]
    },

    "update" : {
        "EducationBase": ["name"]
    }
};

class EducationBaseMiddleware extends BaseMiddleware {
    static onGetAll(req, res, next) {
        EducationBaseMiddleware.permit(req, ALLOWED_PARAMS["getAll"], 'query');
        next();
    }

    static onCreate(req, res, next) {
        EducationBaseMiddleware.permit(req, ALLOWED_PARAMS["create"], 'body');
        next();
    }

    static onUpdate(req, res, next) {
        EducationBaseMiddleware.permit(req, ALLOWED_PARAMS["update"], 'body');
        next();
    }
}

module.exports = EducationBaseMiddleware;