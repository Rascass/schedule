const express = require('express');
const router = express.Router();

const ShiftService = require(process.cwd() + '/lib/services/shift-service');
const ShiftMiddleware = require(process.cwd() + '/lib/middlewares/shift-middleware');

router.get('/', ShiftMiddleware.onGetAll, async (req, res, next) => {
    try {
        const shiftService = new ShiftService();
        const shifts = await shiftService.findAll(req.query);

        const response = {
            data : shifts,
            pageInfo: {
                pageSize: shiftService.pageSize,
                pageLimit: shiftService.pageLimit
            }
        };
        res.json(response);
    } catch (error) {
        next(error);
    }

});

router.get('/:id', async (req, res, next) => {
    try {
        const shiftService = new ShiftService();
        const shift = await shiftService.find(req.params.id);
        res.json({ data: shift });
    } catch (error) {
        next(error);
    }
});

router.post('/', ShiftMiddleware.onCreate, async (req, res, next) => {
    try {
        const shiftService = new ShiftService();
        const shift = await shiftService.create(req.body.Shift);
        res.json({ data: shift });
    } catch (error) {
        next(error);
    }
});

router.put('/:id', ShiftMiddleware.onUpdate, async (req, res, next) => {
    try {
        const shiftService = new ShiftService();
        const shift = await shiftService.update(req.params.id, req.body.Shift);
        res.json({ data: shift });
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const shiftService = new ShiftService();
        const shift = await shiftService.destroy(req.params.id);
        res.json({ data: shift });
    } catch (error) {
        next(error);
    }
});

module.exports = router;