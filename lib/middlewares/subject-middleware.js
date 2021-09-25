const BaseMiddleware = require('./base-middleware');

const ALLOWED_PARAMS = {
    "getAll": {
        "conditions": ["id","name","totalHours","courseId","cretaedAt","updatedAt"],
        "pageInfo": ["pageNum", "limit"],
        "include": [],
        "attributes": [],
        "order": ["key", "type"]
    },

    "create" : {
        "Subject": ["name","totalHours","courseId"]
    },

    "update" : {
        "Subject": ["name","totalHours","courseId"]
    }
};

class SubjectMiddleware extends BaseMiddleware {
    static onGetAll(req, res, next) {
        SubjectMiddleware.permit(req, ALLOWED_PARAMS["getAll"], 'query');
        next();
    }

    static onCreate(req, res, next) {
        SubjectMiddleware.permit(req, ALLOWED_PARAMS["create"], 'body');
        next();
    }

    static onUpdate(req, res, next) {
        SubjectMiddleware.permit(req, ALLOWED_PARAMS["update"], 'body');
        next();
    }
}

module.exports = SubjectMiddleware;