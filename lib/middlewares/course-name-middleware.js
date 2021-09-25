const BaseMiddleware = require('./base-middleware');

const ALLOWED_PARAMS = {
    "getAll": {
        "conditions": ["id","name","letter","cretaedAt","updatedAt"],
        "pageInfo": ["pageNum", "limit"],
        "include": [],
        "attributes": [],
        "order": ["key", "type"]
    },

    "create" : {
        "CourseName": ["name","letter"]
    },

    "update" : {
        "CourseName": ["name","letter"]
    }
};

class CourseNameMiddleware extends BaseMiddleware {
    static onGetAll(req, res, next) {
        CourseNameMiddleware.permit(req, ALLOWED_PARAMS["getAll"], 'query');
        next();
    }

    static onCreate(req, res, next) {
        CourseNameMiddleware.permit(req, ALLOWED_PARAMS["create"], 'body');
        next();
    }

    static onUpdate(req, res, next) {
        CourseNameMiddleware.permit(req, ALLOWED_PARAMS["update"], 'body');
        next();
    }
}

module.exports = CourseNameMiddleware;