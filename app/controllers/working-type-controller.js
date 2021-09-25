const express = require('express');
const router = express.Router();

const WorkingTypeService = require(process.cwd() + '/lib/services/working-type-service');
const WorkingTypeMiddleware = require(process.cwd() + '/lib/middlewares/working-type-middleware');

router.get('/', WorkingTypeMiddleware.onGetAll, async (req, res, next) => {
    try {
        const workingTypeService = new WorkingTypeService();
        const workingTypes = await workingTypeService.findAll(req.query);

        const response = {
            data : workingTypes,
            pageInfo: {
                pageSize: workingTypeService.pageSize,
                pageLimit: workingTypeService.pageLimit
            }
        };
        res.json(response);
    } catch (error) {
        next(error);
    }

});

router.get('/:id', async (req, res, next) => {
    try {
        const workingTypeService = new WorkingTypeService();
        const workingType = await workingTypeService.find(req.params.id);
        res.json({ data: workingType });
    } catch (error) {
        next(error);
    }
});

router.post('/', WorkingTypeMiddleware.onCreate, async (req, res, next) => {
    try {
        const workingTypeService = new WorkingTypeService();
        const workingType = await workingTypeService.create(req.body.WorkingType);
        res.json({ data: workingType });
    } catch (error) {
        next(error);
    }
});

router.put('/:id', WorkingTypeMiddleware.onUpdate, async (req, res, next) => {
    try {
        const workingTypeService = new WorkingTypeService();
        const workingType = await workingTypeService.update(req.params.id, req.body.WorkingType);
        res.json({ data: workingType });
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const workingTypeService = new WorkingTypeService();
        const workingType = await workingTypeService.destroy(req.params.id);
        res.json({ data: workingType });
    } catch (error) {
        next(error);
    }
});

module.exports = router;