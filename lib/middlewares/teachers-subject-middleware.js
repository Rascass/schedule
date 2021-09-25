const BaseMiddleware = require('./base-middleware');

const ALLOWED_PARAMS = {
    "getAll": {
        "conditions": ["id","subjectId","teacherId","cretaedAt","updatedAt"],
        "pageInfo": ["pageNum", "limit"],
        "include": [],
        "attributes": [],
        "order": ["key", "type"]
    },

    "create" : {
        "TeachersSubject": ["subjectId","teacherId"]
    },

    "update" : {
        "TeachersSubject": ["subjectId","teacherId"]
    }
};

class TeachersSubjectMiddleware extends BaseMiddleware {
    static onGetAll(req, res, next) {
        TeachersSubjectMiddleware.permit(req, ALLOWED_PARAMS["getAll"], 'query');
        next();
    }

    static onCreate(req, res, next) {
        TeachersSubjectMiddleware.permit(req, ALLOWED_PARAMS["create"], 'body');
        next();
    }

    static onUpdate(req, res, next) {
        TeachersSubjectMiddleware.permit(req, ALLOWED_PARAMS["update"], 'body');
        next();
    }
}

module.exports = TeachersSubjectMiddleware;