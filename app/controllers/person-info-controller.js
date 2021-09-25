const express = require('express');
const router = express.Router();

const PersonInfoService = require(process.cwd() + '/lib/services/person-info-service');
const PersonInfoMiddleware = require(process.cwd() + '/lib/middlewares/person-info-middleware');

router.get('/', PersonInfoMiddleware.onGetAll, async (req, res, next) => {
    try {
        const personInfoService = new PersonInfoService();
        const personInfos = await personInfoService.findAll(req.query);

        const response = {
            data : personInfos,
            pageInfo: {
                pageSize: personInfoService.pageSize,
                pageLimit: personInfoService.pageLimit
            }
        };
        res.json(response);
    } catch (error) {
        next(error);
    }

});

router.get('/:id', async (req, res, next) => {
    try {
        const personInfoService = new PersonInfoService();
        const personInfo = await personInfoService.find(req.params.id);
        res.json({ data: personInfo });
    } catch (error) {
        next(error);
    }
});

router.post('/', PersonInfoMiddleware.onCreate, async (req, res, next) => {
    try {
        const personInfoService = new PersonInfoService();
        const personInfo = await personInfoService.create(req.body.PersonInfo);
        res.json({ data: personInfo });
    } catch (error) {
        next(error);
    }
});

router.put('/:id', PersonInfoMiddleware.onUpdate, async (req, res, next) => {
    try {
        const personInfoService = new PersonInfoService();
        const personInfo = await personInfoService.update(req.params.id, req.body.PersonInfo);
        res.json({ data: personInfo });
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const personInfoService = new PersonInfoService();
        const personInfo = await personInfoService.destroy(req.params.id);
        res.json({ data: personInfo });
    } catch (error) {
        next(error);
    }
});

module.exports = router;