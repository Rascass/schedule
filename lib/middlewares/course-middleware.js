const BaseMiddleware = require('./base-middleware');

const ALLOWED_PARAMS = {
    "getAll": {
        "conditions": ["id","yearDuration","courseNameId","educationBaseId","shiftId","departamentId","cretaedAt","updatedAt"],
        "pageInfo": ["pageNum", "limit"],
        "include": [],
        "attributes": [],
        "order": ["key", "type"]
    },

    "create" : {
        "Course": ["yearDuration","courseNameId","educationBaseId","shiftId","departamentId"]
    },

    "update" : {
        "Course": ["yearDuration","courseNameId","educationBaseId","shiftId","departamentId"]
    }
};

class CourseMiddleware extends BaseMiddleware {
    static onGetAll(req, res, next) {
        CourseMiddleware.permit(req, ALLOWED_PARAMS["getAll"], 'query');
        next();
    }

    static onCreate(req, res, next) {
        CourseMiddleware.permit(req, ALLOWED_PARAMS["create"], 'body');
        next();
    }

    static onUpdate(req, res, next) {
        CourseMiddleware.permit(req, ALLOWED_PARAMS["update"], 'body');
        next();
    }
}

module.exports = CourseMiddleware;