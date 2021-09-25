const BaseMiddleware = require('./base-middleware');

const ALLOWED_PARAMS = {
    "getAll": {
        "conditions": ["id","number","weekDay","week","subjectId","teacherId","audienceId","groupId","cretaedAt","updatedAt"],
        "pageInfo": ["pageNum", "limit"],
        "include": [],
        "attributes": [],
        "order": ["key", "type"]
    },

    "create" : {
        "Lesson": ["number","weekDay","week","subjectId","teacherId","audienceId","groupId"]
    },

    "update" : {
        "Lesson": ["number","weekDay","week","subjectId","teacherId","audienceId","groupId"]
    }
};

class LessonMiddleware extends BaseMiddleware {
    static onGetAll(req, res, next) {
        LessonMiddleware.permit(req, ALLOWED_PARAMS["getAll"], 'query');
        next();
    }

    static onCreate(req, res, next) {
        LessonMiddleware.permit(req, ALLOWED_PARAMS["create"], 'body');
        next();
    }

    static onUpdate(req, res, next) {
        LessonMiddleware.permit(req, ALLOWED_PARAMS["update"], 'body');
        next();
    }
}

module.exports = LessonMiddleware;