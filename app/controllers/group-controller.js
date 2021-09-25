const express = require('express');
const router = express.Router();

const GroupService = require(process.cwd() + '/lib/services/group-service');
const GroupMiddleware = require(process.cwd() + '/lib/middlewares/group-middleware');

router.get('/', GroupMiddleware.onGetAll, async (req, res, next) => {
    try {
        const groupService = new GroupService();
        const groups = await groupService.findAll(req.query);

        const response = {
            data : groups,
            pageInfo: {
                pageSize: groupService.pageSize,
                pageLimit: groupService.pageLimit
            }
        };
        res.json(response);
    } catch (error) {
        next(error);
    }

});

router.get('/:id', async (req, res, next) => {
    try {
        const groupService = new GroupService();
        const group = await groupService.find(req.params.id);
        res.json({ data: group });
    } catch (error) {
        next(error);
    }
});

router.post('/', GroupMiddleware.onCreate, async (req, res, next) => {
    try {
        const groupService = new GroupService();
        const group = await groupService.create(req.body.Group);
        res.json({ data: group });
    } catch (error) {
        next(error);
    }
});

router.put('/:id', GroupMiddleware.onUpdate, async (req, res, next) => {
    try {
        const groupService = new GroupService();
        const group = await groupService.update(req.params.id, req.body.Group);
        res.json({ data: group });
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const groupService = new GroupService();
        const group = await groupService.destroy(req.params.id);
        res.json({ data: group });
    } catch (error) {
        next(error);
    }
});

module.exports = router;