const express = require('express');
const router = express.Router();

const EducationBaseService = require(process.cwd() + '/lib/services/education-base-service');
const EducationBaseMiddleware = require(process.cwd() + '/lib/middlewares/education-base-middleware');

router.get('/', EducationBaseMiddleware.onGetAll, async (req, res, next) => {
    try {
        const educationBaseService = new EducationBaseService();
        const educationBases = await educationBaseService.findAll(req.query);

        const response = {
            data : educationBases,
            pageInfo: {
                pageSize: educationBaseService.pageSize,
                pageLimit: educationBaseService.pageLimit
            }
        };
        res.json(response);
    } catch (error) {
        next(error);
    }

});

router.get('/:id', async (req, res, next) => {
    try {
        const educationBaseService = new EducationBaseService();
        const educationBase = await educationBaseService.find(req.params.id);
        res.json({ data: educationBase });
    } catch (error) {
        next(error);
    }
});

router.post('/', EducationBaseMiddleware.onCreate, async (req, res, next) => {
    try {
        const educationBaseService = new EducationBaseService();
        const educationBase = await educationBaseService.create(req.body.EducationBase);
        res.json({ data: educationBase });
    } catch (error) {
        next(error);
    }
});

router.put('/:id', EducationBaseMiddleware.onUpdate, async (req, res, next) => {
    try {
        const educationBaseService = new EducationBaseService();
        const educationBase = await educationBaseService.update(req.params.id, req.body.EducationBase);
        res.json({ data: educationBase });
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const educationBaseService = new EducationBaseService();
        const educationBase = await educationBaseService.destroy(req.params.id);
        res.json({ data: educationBase });
    } catch (error) {
        next(error);
    }
});

module.exports = router;