const express = require('express');
const router = express.Router();

const DepartamentService = require(process.cwd() + '/lib/services/departament-service');
const DepartamentMiddleware = require(process.cwd() + '/lib/middlewares/departament-middleware');

router.get('/', DepartamentMiddleware.onGetAll, async (req, res, next) => {
    try {
        const departamentService = new DepartamentService();
        const departaments = await departamentService.findAll(req.query);

        const response = {
            data : departaments,
            pageInfo: {
                pageSize: departamentService.pageSize,
                pageLimit: departamentService.pageLimit
            }
        };
        res.json(response);
    } catch (error) {
        next(error);
    }

});

router.get('/:id', async (req, res, next) => {
    try {
        const departamentService = new DepartamentService();
        const departament = await departamentService.find(req.params.id);
        res.json({ data: departament });
    } catch (error) {
        next(error);
    }
});

router.post('/', DepartamentMiddleware.onCreate, async (req, res, next) => {
    try {
        const departamentService = new DepartamentService();
        const departament = await departamentService.create(req.body.Departament);
        res.json({ data: departament });
    } catch (error) {
        next(error);
    }
});

router.put('/:id', DepartamentMiddleware.onUpdate, async (req, res, next) => {
    try {
        const departamentService = new DepartamentService();
        const departament = await departamentService.update(req.params.id, req.body.Departament);
        res.json({ data: departament });
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const departamentService = new DepartamentService();
        const departament = await departamentService.destroy(req.params.id);
        res.json({ data: departament });
    } catch (error) {
        next(error);
    }
});

module.exports = router;