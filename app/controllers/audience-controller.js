const express = require('express');
const { request } = require('../../app');
const router = express.Router();

const AudienceService = require(process.cwd() + '/lib/services/audience-service');
const AudienceMiddleware = require(process.cwd() + '/lib/middlewares/audience-middleware');

router.get('/', AudienceMiddleware.onGetAll, async(req, res, next) => {
    try {
        const audienceService = new AudienceService();
        const audiences = await audienceService.findAll(req.query);

        const response = {
            data: audiences,
            pageInfo: {
                pageSize: audienceService.pageSize,
                pageLimit: audienceService.pageLimit
            }
        };
        res.json(response);
    } catch (error) {
        next(error);
    }

});

router.get('/:id', async(req, res, next) => {
    try {
        const audienceService = new AudienceService();
        const audience = await audienceService.find(req.params.id);
        res.json({ data: audience });
    } catch (error) {
        next(error);
    }
});

router.post('/', AudienceMiddleware.onCreate, async(req, res, next) => {
    try {
        // console.log(req.body);
        const audienceService = new AudienceService();
        const audience = await audienceService.create(req.body.Audience);
        console.log(audience);
        res.json({ data: audience });
    } catch (error) {
        next(error);
    }
});

router.put('/:id', AudienceMiddleware.onUpdate, async(req, res, next) => {
    try {
        const audienceService = new AudienceService();
        const audience = await audienceService.update(req.params.id, req.body.Audience);
        res.json({ data: audience });
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async(req, res, next) => {
    try {
        const audienceService = new AudienceService();
        const audience = await audienceService.destroy(req.params.id);
        res.json({ data: audience });
    } catch (error) {
        next(error);
    }
});

module.exports = router;