const BaseMiddleware = require('./base-middleware');

const ALLOWED_PARAMS = {
    "getAll": {
        "conditions": ["id","firstName","lastName","middleName","cretaedAt","updatedAt"],
        "pageInfo": ["pageNum", "limit"],
        "include": [],
        "attributes": [],
        "order": ["key", "type"]
    },

    "create" : {
        "PersonInfo": ["firstName","lastName","middleName"]
    },

    "update" : {
        "PersonInfo": ["firstName","lastName","middleName"]
    }
};

class PersonInfoMiddleware extends BaseMiddleware {
    static onGetAll(req, res, next) {
        PersonInfoMiddleware.permit(req, ALLOWED_PARAMS["getAll"], 'query');
        next();
    }

    static onCreate(req, res, next) {
        PersonInfoMiddleware.permit(req, ALLOWED_PARAMS["create"], 'body');
        next();
    }

    static onUpdate(req, res, next) {
        PersonInfoMiddleware.permit(req, ALLOWED_PARAMS["update"], 'body');
        next();
    }
}

module.exports = PersonInfoMiddleware;